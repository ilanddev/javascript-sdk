import { PolicyJson, PolicyType } from './json/policy';
import { EntityDomain } from './json/role';
import { Permission } from './json/permission';

/**
 * Policy.
 */
export class Policy {

  constructor(private _json: PolicyJson) {
  }

  /**
   * Gets the entity UUID associated with the policy.
   * @returns {string} the entity UUID
   */
  get entityUuid(): string {
    return this._json.entity_uuid;
  }

  /**
   * Gets the entity domain of the policy.
   * @returns {EntityDomain} the entity domain
   */
  get entityDomain(): EntityDomain {
    return this._json.domain;
  }

  /**
   * Gets the policy type.
   * @returns {PolicyType} the policy type
   */
  get type(): PolicyType {
    return this._json.type;
  }

  /**
   * Gets the permissions assigned to the policy.
   * @returns {Array<Permission>} the policy permissions
   */
  get permissions(): Array<Permission> {
    return this._json.permissions.slice();
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {PolicyJson} the JSON representation
   */
  get json(): PolicyJson {
    return Object.assign({}, this._json);
  }

}

/**
 * Policy Builder.
 */
export class PolicyBuilder {

  private _permissions: Array<Permission> = [];

  /**
   * Creates a new PolicyBuilder.
   * @param {string} _entityUuid the UUID of the entity that the policy will apply to
   * @param {EntityDomain} _entityDomain the EntityDomain of the entity that the policy will apply to
   * @param {PolicyType} _type the policy type
   */
  constructor(private _entityUuid: string, private _entityDomain: EntityDomain, private _type: PolicyType) {
  }

  /**
   * Adds a permission.
   * @param {Permission} permission the permission to add
   * @returns {PolicyBuilder} the builder
   */
  addPermission(permission: Permission): PolicyBuilder {
    if (!this._permissions.some((it) => it === permission)) {
      this._permissions.push(permission);
    }
    return this;
  }

  /**
   * Removes a permission.
   * @param {Permission} permission the permission to remove
   * @returns {PolicyBuilder} the builder
   */
  removePermission(permission: Permission): PolicyBuilder {
    const idx = this._permissions.findIndex((it) => it === permission);
    if (idx >= 0) {
      this._permissions.splice(idx, 1);
    }
    return this;
  }

  /**
   * Builds the policy.
   * @returns {Policy} the new policy
   */
  build(): Policy {
    return new Policy({
      entity_uuid: this._entityUuid,
      domain: this._entityDomain,
      type: this._type,
      permissions: this._permissions
    });
  }

}
