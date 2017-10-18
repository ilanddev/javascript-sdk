import { Policy } from './policy';
import { RoleCreationRequestJson } from './json/role-creation-request';

/**
 * Role Creation Request.
 */
export interface RoleCreationRequest {

  /**
   * Gets the ID of the company that the role creation request is associated with.
   * @returns {string} the company ID
   */
  getCompanyId(): string;

  /**
   * Gets the name of the role to be created.
   * @returns {string} the name
   */
  getName(): string;

  /**
   * Gets the description of the role to be created.
   * @returns {string} the description
   */
  getDescription(): string;

  /**
   * Gets the array of policies that will belong to the role.
   * @returns {Array<Policy>} array of member policies
   */
  getPolicies(): Array<Policy>;

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string;

  /**
   * Gets the JSON version of this RoleCreationRequest.
   * @returns {RoleCreationRequestJson} JSON object
   */
  getJson(): RoleCreationRequestJson;
}

/**
 * Role Creation Request Implementation.
 */
class RoleCreationRequestImpl implements RoleCreationRequest {

  constructor(private _companyId: string, private _name: string, private _description: string,
              private _policies: Array<Policy>) {
  }

  getCompanyId(): string {
    return this._companyId;
  }

  getName(): string {
    return this._name;
  }

  getDescription(): string {
    return this._description;
  }

  getPolicies(): Array<Policy> {
    return this._policies.slice();
  }

  toString(): string {
    return JSON.stringify(this.getJson(), undefined, 2);
  }

  getJson(): RoleCreationRequestJson {
    return {
      company_id: this._companyId,
      name: this._name,
      description: this._description,
      policies: this._policies.map((it) => it.getJson())
    };
  }

}


export class RoleCreationRequestBuilder {

  private _policies: {[entityUuid: string]: Policy} = {};

  constructor(private _companyId: string, private _name: string, private _description: string) {
  }

  /**
   * Sets the name for the role creation request.
   * @param {string} name
   */
  setName(name: string) {
    this._name = name;
  }

  /**
   * Sets the description for the role creation request.
   * @param {string} description
   */
  setDescription(description: string) {
    this._description = description;
  }

  /**
   * Sets a policy on the role creation request.
   * @param {Policy} policy
   */
  setPolicy(policy: Policy) {
    this._policies[policy.getEntityUuid()] = policy;
  }

  /**
   * Removes a policy for a specified entity.
   * @param {string} entityUuid the UUID of the entity
   */
  removePolicy(entityUuid: string) {
    delete this._policies[entityUuid];
  }

  /**
   * Clears all policies.
   */
  clearPolicies() {
    this._policies = {};
  }

  /**
   * Builds the RoleCreationRequest.
   * @returns {RoleCreationRequest}
   */
  build(): RoleCreationRequest {
    return new RoleCreationRequestImpl(this._companyId, this._name, this._description,
        Object.keys(this._policies).map((it) => this._policies[it]));
  }
}
