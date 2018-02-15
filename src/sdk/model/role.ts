import { RoleJson, RoleType } from './json/role';
import { Policy } from './policy';

/**
 * Role.
 */
export class Role {

  private _policies: Array<Policy>;

  constructor(private _json: RoleJson) {
    this._policies = this._json.policies.map((it) => new Policy(it));
  }

  /**
   * Gets the UUID of the role.
   * @returns {string} role UUID
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Gets the ID of the company that the role is associated with.
   * @returns {string} company ID
   */
  get companyId(): string {
    return this._json.company_id;
  }

  /**
   * Gets the name of the role.
   * @returns {string} the role name
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Gets the role description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Gets the policies that define the role.
   * @returns {Array<Policy>} the array of role policies
   */
  get policies(): Array<Policy> {
    return this._policies.slice();
  }

  /**
   * Gets the role type.
   * @returns {RoleType} role type
   */
  get type(): RoleType {
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
   * Return the policy for the specified uuid.
   * @param {string} entityUuid
   * @returns {Policy | null}
   */
  getPolicy(entityUuid: string): Policy | null {
    for (const p of this._policies) {
      if (p.entityUuid === entityUuid) {
        return p;
      }
    }
    return null;
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {RoleJson} the JSON representation
   */
  get json(): RoleJson {
    return Object.assign({}, this._json);
  }

}
