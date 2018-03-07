import { EntityDomainType } from './json/entity-domain';
import { Permission } from './permission';
import { PermissionType } from './json/permission-type';
import { PermissionsMap } from './permission-map';

/**
 * DomainPermissionsMap
 */
export class DomainPermissionsMap {
  private static instance: DomainPermissionsMap;
  private _domainPermissions: Map<EntityDomainType, Permission[]> = new Map<EntityDomainType, Permission[]>();

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
   * @returns {Map<EntityDomainType, Array<Permission>>}
   */
  get domainPermissions(): Map<EntityDomainType, Array<Permission>> {
    return this._domainPermissions;
  }
}
