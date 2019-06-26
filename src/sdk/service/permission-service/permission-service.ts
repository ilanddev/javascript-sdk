import { Permission } from '../../model/iam/permission/permission';
import { PermissionsMap } from '../../model/iam/permission/permission-map';
import { DomainPermissionsMap } from '../../model/iam/permission/domain-permission-map';
import { PermissionType } from '../../model/iam/permission/__json__/permission-type';
import { IamEntityType } from '../../model/common/__json__/iam-entity-type';

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
   * Map of all permissions listed by their IamEntityType.
   */
  public domainPermissions: Map<IamEntityType, Array<Permission>>;

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
   * @param {Array<PermissionType> | undefined} originalPermissions
   * @returns {Array<Permission> | null}
   */
  getImpliedPermissions(originalPermissions: Array<PermissionType> | undefined): Array<Permission> {
    if (originalPermissions === undefined) {
      return [];
    }
    const impliedPermissions: Array<Permission> = [];
    for (const permissionType of originalPermissions) {
      const permission = this.permissions.get(permissionType);
      if (permission && permission.impliedPermissions !== null) {
        for (const impliedPermission of permission.impliedPermissions) {
          impliedPermissions.push(this.permissions.get(impliedPermission)!!);
        }
      }
    }
    return impliedPermissions;
  }

  /**
   * Get all available permissions for an IamEntityType.
   * @param {IamEntityType} domain
   * @returns {Array<Permission> | undefined}
   */
  getAvailablePermissionsForDomain(domain: IamEntityType): Array<Permission> | undefined {
    return this.domainPermissions.get(domain);
  }

  /**
   * Get all required permissions for an IamEntityType.
   * @param {IamEntityType | undefined} domain
   * @returns {Array<Permission> | undefined}
   */
  getRequiredPermissionsForDomain(domain: IamEntityType | undefined): Array<Permission> | undefined {
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
   * Get all view permissions for an IamEntityType.
   * @param {IamEntityType | undefined} domain
   * @returns {Permission | undefined}
   */
  getViewPermissionForDomain(domain: IamEntityType | undefined): Permission | undefined {
    if (domain !== undefined) {
      const domainPermissions = this.getAvailablePermissionsForDomain(domain);
      let permissions: Array<Permission> | undefined;
      let permission: Permission | undefined;
      if (domainPermissions) {
        permissions = domainPermissions.filter((p) => {
          return (p.permissionType ===
                  'VIEW_COMPANY' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD' ||
                  p.permissionType ===
                  'VIEW_ILAND_BACKUP' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_LOCATION' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_ORG' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_VPG' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_VCC_FAILOVER_PLAN' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_CATALOG' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_MEDIA' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_VAPP_TEMPLATE' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_VDC' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_EDGE' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_INTERNAL_NETWORK' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_VAPP' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_VAPP_NETWORK' ||
                  p.permissionType ===
                  'VIEW_ILAND_CLOUD_VM' ||
                  p.permissionType ===
                  'VIEW_ILAND_BACKUP_LOCATION' ||
                  p.permissionType ===
                  'VIEW_ILAND_BACKUP_TENANT' ||
                  p.permissionType ===
                  'MANAGE_ILAND_OBJECT_STORAGE' ||
                  p.permissionType ===
                  'MANAGE_ILAND_OBJECT_STORAGE_LOCATION');
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
