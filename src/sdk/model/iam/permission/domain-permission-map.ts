import { PermissionsMap } from './permission-map';
import { IamEntityType } from '../../common/__json__/iam-entity-type';
import { PermissionType } from './__json__/permission-type';
import { Permission } from './permission';

/**
 * DomainPermissionsMap
 */
export class DomainPermissionsMap {
  private static instance: DomainPermissionsMap;
  private _domainPermissions: Map<IamEntityType, Permission[]> = new Map<IamEntityType, Permission[]>();

  private constructor() {
    const permissionMap: Map<PermissionType, Permission> = PermissionsMap.getInstance().permissions;
    const self = this;
    let tmp: Permission[] | undefined;
    permissionMap.forEach((value) => {
      if (!self._domainPermissions.has(value.domain)) {
        self._domainPermissions.set(value.domain, [value]);
      } else if (self._domainPermissions.has(value.domain)) {
        tmp = self._domainPermissions.get(value.domain);
        if (tmp) {
          self._domainPermissions.set(value.domain, tmp.concat([value]));
        }
      }
    });
  }

  /**
   * Get an instance of DomainPermissionsMap. Singleton implementation.
   * @returns {DomainPermissionsMap}
   */
  static getInstance() {
    if (!DomainPermissionsMap.instance) {
      DomainPermissionsMap.instance = new DomainPermissionsMap();
    }
    return DomainPermissionsMap.instance;
  }

  /**
   * Get the domains permissions map.
   * @returns {Map<IamEntityType, Array<Permission>>}
   */
  get domainPermissions(): Map<IamEntityType, Array<Permission>> {
    return this._domainPermissions;
  }
}
