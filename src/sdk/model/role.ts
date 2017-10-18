import { RoleJson, RoleType } from './json/role';
import { Policy } from './policy';

/**
 * Role.
 */
export class Role {

  private policies: Array<Policy>;

  constructor(private _json: RoleJson) {
    this.policies = this._json.policies.map((it) => new Policy(it));
  }

  /**
   * Gets the UUID of the role.
   * @returns {string} role UUID
   */
  getUuid(): string {
    return this._json.uuid;
  }

  /**
   * Gets the ID of the company that the role is associated with.
   * @returns {string} company ID
   */
  getCompanyId(): string {
    return this._json.company_id;
  }

  /**
   * Gets the name of the role.
   * @returns {string} the role name
   */
  getName(): string {
    return this._json.name;
  }

  /**
   * Gets the role description.
   * @returns {string}
   */
  getDescription(): string {
    return this._json.description;
  }

  /**
   * Gets the policies that define the role.
   * @returns {Array<Policy>} the array of role policies
   */
  getPolicies(): Array<Policy> {
    return this.policies.slice();
  }

  /**
   * Gets the role type.
   * @returns {RoleType} role type
   */
  getType(): RoleType {
    return this._json.type;
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
   * @returns {RoleJson} the JSON representation
   */
  getJson(): RoleJson {
    return Object.assign({}, this._json);
  }

}
