import { Policy } from './policy';
import { RoleCreationRequestJson } from './json/role-creation-request';
import { RoleInterface } from './json/role';

/**
 * Role Creation Request Implementation.
 */
export class RoleCreationRequest implements RoleInterface {

  /**
   * Creates a new role creation request.
   * @param {string} companyId the ID of the company that the role will be created in
   * @param {string} name the name of the role
   * @param {string} description the description of the role
   * @param {Array<Policy>} policies the policies that define the role
   */
  constructor(public companyId: string, public name: string, public description: string,
              public policies: Array<Policy>) {
  }

  /**
   * Gets the raw JSON object for the API.
   * @returns {RoleCreationRequestJson} JSON representation
   */
  get json(): RoleCreationRequestJson {
    return {
      company_id: this.companyId,
      name: this.name,
      description: this.description,
      policies: this.policies.map((it) => it.json)
    };
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this.json, undefined, 2);
  }

  /**
   * Return the policy for the specified uuid.
   * @param {string} entityUuid
   * @returns {Policy | null}
   */
  getPolicy(entityUuid: string): Policy | null {
    for (const p of this.policies) {
      if (p.entityUuid === entityUuid) {
        return p;
      }
    }
    return null;
  }
}

/**
 * Role Creation Request Builder.
 */
export class RoleCreationRequestBuilder {

  private _policies: { [entityUuid: string]: Policy } = {};

  constructor(private _companyId: string, private _name: string, private _description: string) {
  }

  /**
   * Sets the name for the role creation request.
   * @param {string} name
   * @returns {RoleCreationRequestBuilder} the builder
   */
  setName(name: string): RoleCreationRequestBuilder {
    this._name = name;
    return this;
  }

  /**
   * Sets the description for the role creation request.
   * @param {string} description
   * @returns {RoleCreationRequestBuilder} the builder
   */
  setDescription(description: string): RoleCreationRequestBuilder {
    this._description = description;
    return this;
  }

  /**
   * Sets a policy on the role creation request.
   * @param {Policy} policy
   * @returns {RoleCreationRequestBuilder} the builder
   */
  setPolicy(policy: Policy): RoleCreationRequestBuilder {
    this._policies[policy.entityUuid] = policy;
    return this;
  }

  /**
   * Removes a policy for a specified entity.
   * @param {string} entityUuid the UUID of the entity
   * @returns {RoleCreationRequestBuilder} the builder
   */
  removePolicy(entityUuid: string): RoleCreationRequestBuilder {
    delete this._policies[entityUuid];
    return this;
  }

  /**
   * Clears all policies.
   * @returns {RoleCreationRequestBuilder} the builder
   */
  clearPolicies(): RoleCreationRequestBuilder {
    this._policies = {};
    return this;
  }

  /**
   * Builds the RoleCreationRequest.
   * @returns {RoleCreationRequest}
   */
  build(): RoleCreationRequest {
    return new RoleCreationRequest(this._companyId, this._name, this._description,
      Object.keys(this._policies).map((it) => this._policies[it]));
  }

}
