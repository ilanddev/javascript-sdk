import { EntityDomain } from '../../common/entity-domain';
import { PermissionType } from './__json__/permission-type';
import { AccessType } from '../__json__/access-type';
import { EntityDomainType } from '../../common/__json__/entity-domain-type';

/**
 * Permission
 */
export class Permission {
  private _entityDomain: EntityDomain;

  constructor(private _permissionType: PermissionType, private _domain: EntityDomainType,
              private _accessType: AccessType, private _availableToCustomPolicy: boolean,
              private _requiredForCustomPolicy: boolean,
              private _impliedPermissions: Array<PermissionType> | null) {
    this._entityDomain = new EntityDomain(_domain);
  }

  /**
   * Get the EntityDomainType for a permission.
   * @returns {EntityDomainType}
   */
  get domain(): EntityDomainType {
    return this._domain;
  }

  /**
   * Get the PermissionType for a permission.
   * @returns {PermissionType}
   */
  get permissionType(): PermissionType {
    return this._permissionType;
  }

  /**
   * Get the AccessType for a permission.
   * @returns {AccessType}
   */
  get accessType(): AccessType {
    return this._accessType;
  }

  /**
   * Check whether or not this permission is available to custom policy.
   * @returns {boolean}
   */
  get availableToCustomPolicy(): boolean {
    return this._availableToCustomPolicy;
  }

  /**
   * Check whether or not a permission is required for custom policy.
   * @returns {boolean}
   */
  get requiredForCustomPolicy(): boolean {
    return this._requiredForCustomPolicy;
  }

  /**
   * Get the implied permissions.
   * @returns {Array<PermissionType> | null}
   */
  get impliedPermissions(): Array<PermissionType> | null {
    return this._impliedPermissions;
  }

  /**
   * Get the string representation of a permission. Which is the PermissionType.
   * @returns {string}
   */
  toString(): string {
    return this._permissionType.toString();
  }

  /**
   * Get the entity domain class for this permission.
   * @returns {EntityDomain}
   */
  getDomain(): EntityDomain {
    return this._entityDomain;
  }
}
