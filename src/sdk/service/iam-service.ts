import { CompanyInventory, InventoryEntity, Permission, Policy, PolicyBuilder, Role, UserWithSecurity } from '../model';
import { PermissionService } from './permission-service';
import { PermissionType } from '../model/json';

/**
 * IamService
 */
export class IamService {
  /**
   * Get the effective policy.
   * @param {CompanyInventory} companyInventory
   * @param {InventoryEntity} entity
   * @param {Role} role
   * @returns {Policy | null}
   */
  static getEffectivePolicy(companyInventory: CompanyInventory, entity: InventoryEntity, role: Role): Policy | null {
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
   * Find the relevant policy depending on company inventory and an entity.
   * @param {CompanyInventory} companyInventory
   * @param {InventoryEntity | undefined} entity
   * @param {Role} role
   * @returns {Policy | null}
   */
  static findFirstRelevantPolicy(companyInventory: CompanyInventory,
                                 entity: InventoryEntity | undefined, role: Role): Policy | null {
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
}
