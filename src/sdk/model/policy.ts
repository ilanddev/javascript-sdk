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
  getEntityUuid(): string {
    return this._json.entity_uuid;
  }

  /**
   * Gets the entity domain of the policy.
   * @returns {EntityDomain} the entity domain
   */
  getEntityDomain(): EntityDomain {
    return this._json.domain;
  }

  /**
   * Gets the policy type.
   * @returns {PolicyType} the policy type
   */
  getType(): PolicyType {
    return this._json.type;
  }

  /**
   * Gets the permissions assigned to the policy.
   * @returns {Array<Permission>} the policy permissions
   */
  getPermissions(): Array<Permission> {
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
  getJson(): PolicyJson {
    return Object.assign({}, this._json);
  }

}
