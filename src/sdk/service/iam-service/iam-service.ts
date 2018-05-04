import { PermissionService } from '../permission-service/permission-service';
import { CompanyInventory, InventoryEntity } from '../../model/user/inventory-entity/inventory-entity';
import { Policy, PolicyBuilder } from '../../model/iam/policy/policy';
import { RoleCreationRequest } from '../../model/iam/role/role-creation-request';
import { Role } from '../../model/iam/role/role';
import { UserWithSecurity } from '../../model/user/user-with-security';
import { Permission } from '../../model/iam/permission/permission';
import { PermissionType } from '../../model/iam/permission/__json__/permission-type';

/**
 * IamService
 */
export class IamService {
  /**
   * Check whether or not a user is allowed to perform an action or not.
   * @param {UserWithSecurity} user
   * @param {string} entityUuid
   * @param {PermissionType} permissionType
   * @returns {boolean}
   */
  static isUserPermitted(user: UserWithSecurity, entityUuid: string, permissionType: PermissionType): boolean {
    const permission: Permission | undefined = PermissionService.getInstance().permissions.get(permissionType);
    if (permission !== undefined) {
      if (user.userType === 'SYSTEM_ADMIN' ||
        (user.userType === 'READ_ONLY_SYSTEM_ADMIN' && permission.accessType === 'READ') ||
        IamService.isPubliclyAccessible(entityUuid, permissionType)) {
        return true;
      }
      if (user.inventory) {
        let entity: InventoryEntity | undefined;
        for (const companyInventory of user.inventory) {
          entity = companyInventory.getEntityByUuid(entityUuid);
          if (entity) {
            const role = user.rolesCompanyMap.get(companyInventory.companyId);
            if (role === undefined) {
              return false;
            }
            const policy: Policy | null = IamService.getEffectivePolicy(companyInventory, entity, role);
            if (policy !== null) {
              return policy.permissions.indexOf(permissionType) >= 0 || policy.type === 'ADMIN' ||
                (policy.type === 'READ_ONLY' && permission.accessType === 'READ');
            }
          }
        }
      }
    }
    return false;
  }

  /**
   * Derive effective policy from an ancestor.
   * @param {CompanyInventory} companyInventory
   * @param {Policy} ancestorPolicy
   * @param {InventoryEntity | undefined} target
   * @returns {Policy | null}
   */
  static deriveEffectivePolicyFromAncestor(companyInventory: CompanyInventory, ancestorPolicy: Policy,
                                           target: InventoryEntity | undefined): Policy | null {
    if (target === undefined) {
      return null;
    } else if (ancestorPolicy.entityDomain === target.type) {
      return ancestorPolicy;
    }
    const parentUuid = target.parentUuid;
    if (parentUuid === null) {
      return null;
    }
    const targetParent = companyInventory.getEntityByUuid(parentUuid);
    const directParentPolicy: Policy | null =
      IamService.deriveEffectivePolicyFromAncestor(companyInventory, ancestorPolicy, targetParent);
    if (directParentPolicy === null) {
      return null;
    }
    switch (directParentPolicy.type) {
      case 'ADMIN':
        return new PolicyBuilder(target.uuid, target.type, 'ADMIN').build();
      case 'READ_ONLY':
        return new PolicyBuilder(target.uuid, target.type, 'READ_ONLY').build();
      case 'CUSTOM':
      default:
        const builder: PolicyBuilder = new PolicyBuilder(target.uuid, target.type, 'CUSTOM');
        const permissions: Array<Permission> | null =
          PermissionService.getInstance().getImpliedPermissions(directParentPolicy.permissions);
        if (permissions !== null) {
          for (const p of permissions) {
            if (p.domain === target.type) {
              builder.addPermission(p.permissionType);
            }
          }
        }
        return builder.build();
    }
  }

  /**
   * Check whether or not an entity is accessible publicly.
   * @param {string} entityUuid
   * @param {PermissionType} permission
   * @returns {boolean}
   */
  static isPubliclyAccessible(entityUuid: string, permission: PermissionType): boolean {
    const permissionObject: Permission | undefined = PermissionService.getInstance().permissions.get(permission);
    if (permissionObject) {
      // handle public catalogs, media, and templates
      switch (permissionObject.domain) {
        case 'ILAND_CLOUD_CATALOG':
          return (entityUuid.includes('public:') && permissionObject.accessType === 'READ');
        case 'ILAND_CLOUD_MEDIA':
          return (entityUuid.includes('public:') && permissionObject.accessType === 'READ');
        case 'ILAND_CLOUD_VAPP_TEMPLATE':
          return (entityUuid.includes('public:') && permissionObject.accessType === 'READ');
      }
    }
    return false;
  }

  /**
   * Validate a role creation request.
   * @param {RoleCreationRequest} roleCreationRequest
   * @param {CompanyInventory} companyInventory
   * @returns {Array<Error>}
   */
  static validateRole(roleCreationRequest: RoleCreationRequest, companyInventory: CompanyInventory) {
    const errors: Array<Error> = [];
    if (roleCreationRequest.policies.length === 0) {
      errors.push((new Error('A role must have at least one policy.')));
    }
    for (const policy of roleCreationRequest.policies) {
      const entityOptional: InventoryEntity | undefined = companyInventory.getEntityByUuid(policy.entityUuid);
      if (entityOptional === undefined) {
        errors.push((new Error('Entity ' + policy.entityUuid + ' not found in this company.')));
      } else {
        if (policy.entityDomain !== entityOptional.type) {
          errors.push((new Error('Policy for entity ' + entityOptional.name + ' has domain type ' +
            policy.entityDomain + ' but entity is actually of type ' + entityOptional.type)));
        }
        if (policy.type === 'CUSTOM') {
          if (policy.permissions.length === 0) {
            errors.push((new Error('Custom policies must contain at least one permission.')));
          }
          const availablePermissions: Array<Permission> | undefined =
            PermissionService.getInstance().getAvailablePermissionsForDomain(policy.entityDomain);
          if (availablePermissions) {
            // if this is a custom policy, verify that it has all permissions that
            // are required for a custom policy and that it doesn't have any
            // permissions that are not available to a custom policy
            for (const domainPermission of availablePermissions) {
              if (domainPermission.requiredForCustomPolicy && !policy.hasPermission(domainPermission.permissionType)) {
                errors.push((new Error('Custom policy doesn\'t have the required permission.')));
              } else if (!domainPermission.availableToCustomPolicy &&
                policy.hasPermission(domainPermission.permissionType)) {
                errors.push((new Error('Custom policy is not allowed to have the specified permission.')));
              }
            }
          }
        }
        if (entityOptional.parentUuid !== null) {
          const parentEntity = companyInventory.getEntityByUuid(entityOptional.parentUuid);
          if (parentEntity) {
            const effectiveParentPolicy = this.getEffectivePolicy(companyInventory, parentEntity, roleCreationRequest);
            if (effectiveParentPolicy) {
              let perm: Permission | undefined;
              let impliedPerm: Permission | undefined;
              for (const parentPermission of effectiveParentPolicy.permissions) {
                perm = PermissionService.getPermission(parentPermission);
                if (perm && perm.impliedPermissions) {
                  for (const impliedPermission of perm.impliedPermissions) {
                    impliedPerm = PermissionService.getPermission(impliedPermission);
                    if (impliedPerm && impliedPerm.domain === policy.entityDomain &&
                      !policy.hasPermission(impliedPermission)) {
                      // the policy must have this permission, otherwise it violates an
                      // implication of higher-level policies
                      errors.push((new Error('Policy must contain permission=' + impliedPermission +
                        ' since it is implied by a higher level permission.')));
                    }
                  }
                }
              }
            }
          }
        }
        // verify that the policies has all permissions that are implied by its
        // own permissions on the same domain
        for (const permission of policy.permissions) {
          const perm = PermissionService.getPermission(permission);
          if (perm && perm.impliedPermissions) {
            for (const impliedPermission of perm.impliedPermissions) {
              const implPerm = PermissionService.getPermission(impliedPermission);
              if (implPerm && implPerm.domain === policy.entityDomain && !policy.hasPermission(impliedPermission)) {
                // the policy must have this permission, otherwise it violates an implication of higher-level policies
                errors.push((new Error('Policy must contain permission=' + impliedPermission +
                  ' since it has permission=' + permission + '.')));
              }
            }
          }
        }
      }
    }
    return errors;
  }

  /**
   * Get the effective policy.
   * @param {CompanyInventory} companyInventory
   * @param {InventoryEntity} entity
   * @param {Role} role
   * @returns {Policy | null}
   */
  private static getEffectivePolicy(companyInventory: CompanyInventory, entity: InventoryEntity,
                                    role: Role | RoleCreationRequest): Policy | null {
    const policyOptional: Policy | null = IamService.findFirstRelevantPolicy(companyInventory, entity, role);

    let derivePolicy: Policy | null = null;
    if (policyOptional) {
      derivePolicy = IamService.deriveEffectivePolicyFromAncestor(companyInventory, policyOptional, entity);
      if (!derivePolicy) {
        derivePolicy = new PolicyBuilder(entity.uuid, entity.type, 'CUSTOM').build();
      }
    }
    return derivePolicy;
  }

  /**
   * Find the relevant policy depending on company inventory and an entity.
   * @param {CompanyInventory} companyInventory
   * @param {InventoryEntity | undefined} entity
   * @param {Role} role
   * @returns {Policy | null}
   */
  private static findFirstRelevantPolicy(companyInventory: CompanyInventory, entity: InventoryEntity | undefined,
                                         role: Role | RoleCreationRequest): Policy | null {
    if (entity === undefined) {
      return null;
    }
    const policyOptional = role.getPolicy(entity.uuid);
    if (policyOptional !== null) {
      return policyOptional;
    } else if (entity.parentUuid !== null) {
      return IamService.findFirstRelevantPolicy(companyInventory,
        companyInventory.getEntityByUuid(entity.parentUuid), role);
    } else {
      return null;
    }
  }
}
