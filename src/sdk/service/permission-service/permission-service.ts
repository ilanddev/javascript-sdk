import { Permission } from '../../model/iam/permission/permission';
import { PermissionsMap } from '../../model/iam/permission/permission-map';
import { DomainPermissionsMap } from '../../model/iam/permission/domain-permission-map';
import { PermissionType } from '../../model/iam/permission/__json__/permission-type';
import { EntityDomainType } from '../../model/common/__json__/entity-domain-type';

/**
 * PermissionService
 */
export class PermissionService {
  private static instance: PermissionService;

  /**
   * Map of all permission listed by their PermissionType.
   */
  public permissions: Map<PermissionType, Permission>;
  /**
   * Map of all permissions listed by their EntityDomainType.
   */
  public domainPermissions: Map<EntityDomainType, Array<Permission>>;

  private constructor() {
    this.permissions = PermissionsMap.getInstance().permissions;
    this.domainPermissions = DomainPermissionsMap.getInstance().domainPermissions;
  }

  /**
   * Get the instance of PermissionService. Singleton implementation.
   * @returns {PermissionService}
   */
  static getInstance(): PermissionService {
    if (!PermissionService.instance) {
      PermissionService.instance = new PermissionService();
    }
    return PermissionService.instance;
  }

  /**
   * Get the decorated permission for the specified permission type.
   * @param {PermissionType} permission
   * @returns {Permission | undefined}
   */
  static getPermission(permission: PermissionType): Permission | undefined {
    return PermissionsMap.getInstance().permissions.get(permission);
  }

  /**
   * Get implied permission for the current permission.
   * @param {Array<PermissionType> | undefined} _impliedPermissions
   * @returns {Array<Permission> | null}
   */
  getImpliedPermissions(_impliedPermissions: Array<PermissionType> | undefined): Array<Permission> | null {
    if (_impliedPermissions === undefined) {
      return null;
    }
    const impliedPermissions: Array<Permission> = [];
    let tmp;
    for (const permission of _impliedPermissions) {
      if (this.permissions) {
        tmp = this.permissions.get(permission);
        if (tmp) {
          impliedPermissions.push(tmp);
        }
      }
    }
    return impliedPermissions;
  }

  /**
   * Get all available permissions for an EntityDomainType.
   * @param {EntityDomainType} domain
   * @returns {Array<Permission> | undefined}
   */
  getAvailablePermissionsForDomain(domain: EntityDomainType): Array<Permission> | undefined {
    return this.domainPermissions.get(domain);
  }

  /**
   * Get all required permissions for an EntityDomainType.
   * @param {EntityDomainType | undefined} domain
   * @returns {Array<Permission> | undefined}
   */
  getRequiredPermissionsForDomain(domain: EntityDomainType | undefined): Array<Permission> | undefined {
    if (domain !== undefined) {
      const permissionMap = this.domainPermissions.get(domain);
      if (permissionMap) {
        return permissionMap.filter((item) => {
          return item.requiredForCustomPolicy;
        });
      }
    }
    return undefined;
  }

  /**
   * Get all view permissions for an EntityDomainType.
   * @param {EntityDomainType | undefined} domain
   * @returns {Permission | undefined}
   */
  getViewPermissionForDomain(domain: EntityDomainType | undefined): Permission | undefined {
    if (domain !== undefined) {
      const domainPermissions = this.getAvailablePermissionsForDomain(domain);
      let permissions: Array<Permission> | undefined;
      let permission: Permission | undefined;
      if (domainPermissions) {
        permissions = domainPermissions.filter((p) => {
          return (p.permissionType === 'VIEW_COMPANY' || p.permissionType === 'VIEW_ILAND_CLOUD' ||
            p.permissionType === 'VIEW_ILAND_BACKUP' || p.permissionType === 'VIEW_ILAND_CLOUD_LOCATION' ||
            p.permissionType === 'VIEW_ILAND_CLOUD_ORG' || p.permissionType === 'VIEW_ILAND_CLOUD_VPG' ||
            p.permissionType === 'VIEW_ILAND_CLOUD_CATALOG' || p.permissionType === 'VIEW_ILAND_CLOUD_MEDIA' ||
            p.permissionType === 'VIEW_ILAND_CLOUD_VAPP_TEMPLATE' || p.permissionType === 'VIEW_ILAND_CLOUD_VDC' ||
            p.permissionType === 'VIEW_ILAND_CLOUD_EDGE' || p.permissionType === 'VIEW_ILAND_CLOUD_INTERNAL_NETWORK' ||
            p.permissionType === 'VIEW_ILAND_CLOUD_VAPP' || p.permissionType === 'VIEW_ILAND_CLOUD_VAPP_NETWORK' ||
            p.permissionType === 'VIEW_ILAND_CLOUD_VM' || p.permissionType === 'VIEW_ILAND_BACKUP_LOCATION' ||
            p.permissionType === 'VIEW_ILAND_BACKUP_TENANT');
        });
        if (permissions) {
          permission = permissions[0];
        }
        return permission;
      }
    }
    return undefined;
  }
}
