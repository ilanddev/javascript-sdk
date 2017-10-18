import { CompanyJson } from './json/company';
import { Entity } from './entity';
import { EntityType } from './json/entity-type';
import { Iland } from '../iland';
import { RoleJson } from './json/role';
import { Role } from './role';
import { RoleCreationRequest } from './role-creation-request';
import { User } from './user';
import { UserJson } from './json/user';
import { UserCreationRequest } from './user-creation-request';

/**
 * Company.
 */
export class Company extends Entity {

  constructor(private _json: CompanyJson) {
    super(_json);
  }

  /**
   * Gets an Company by ID.
   * @param id Company ID
   * @returns {Promise<Company>} promise that resolves with the Company
   */
  static async getCompany(id: string): Promise<Company> {
    return Iland.getHttp().get(`/companies/${id}`).then(function(response) {
      let json = response.data as CompanyJson;
      return new Company(json);
    });
  }

  getEntityType(): EntityType {
    return 'COMPANY';
  }

  /**
   * Indicates whether the company has the iland cloud product.
   * @returns {boolean} value
   */
  hasIlandCloud(): boolean {
    return this._json.has_iaas;
  }

  /**
   * Indicates whether the company has the iland backup product.
   * @returns {boolean} value
   */
  hasIlandBackup(): boolean {
    return this._json.has_vcc;
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
   * @returns {CompanyJson} the JSON representation
   */
  getJson(): CompanyJson {
    return Object.assign({}, this._json);
  }

  /**
   * Refreshes the Company data by retrieving it from the API again.
   * @returns {Promise<Company>} promise that resolves with this object
   */
  async refresh(): Promise<Company> {
    let self = this;
    return Iland.getHttp().get(
        `/companies/${self.getUuid()}`).then(function(response) {
      self._json = response.data as CompanyJson;
      return self;
    });
  }

  /**
   * Get company roles.
   * @returns {Promise<Array<Role>>} task promise
   */
  async getRoles(): Promise<Array<Role>> {
    let self = this;
    return Iland.getHttp().get(`/companies/${self.getUuid()}/roles`)
                .then(function(response) {
                  let json = response.data as Array<RoleJson>;
                  return json.map((it) => new Role(it));
                });
  }

  /**
   * Get a company role.
   * @returns {Promise<Role>} a promise with the queried role
   */
  async getRole(uuid: string): Promise<Role> {
    let self = this;
    return Iland.getHttp().get(`/companies/${self.getUuid()}/roles/${uuid}`)
                .then(function(response) {
                  let json = response.data as RoleJson;
                  return new Role(json);
                });
  }

  /**
   * Creates a new company role.
   * @returns {Promise<Role>} a promise with the newly created role
   */
  async createRole(request: RoleCreationRequest): Promise<Role> {
    let self = this;
    return Iland.getHttp().post(`/companies/${self.getUuid()}/roles`, request.getJson())
                .then(function(response) {
                  let json = response.data as RoleJson;
                  return new Role(json);
                });
  }

  /**
   * Updates a company role.
   * @returns {Promise<Role>} a promise with the newly created role that has replaced the original
   */
  async updateRole(uuid: string, request: RoleCreationRequest): Promise<Role> {
    let self = this;
    return Iland.getHttp().put(`/companies/${self.getUuid()}/roles/${uuid}`, request.getJson())
                .then(function(response) {
                  let json = response.data as RoleJson;
                  return new Role(json);
                });
  }

  /**
   * Deletes a new company role.
   * @returns {Promise<void>} a promise that indicates success or failure
   */
  async deleteRole(uuid: string): Promise<void> {
    let self = this;
    return Iland.getHttp().delete(`/companies/${self.getUuid()}/roles/${uuid}`).then(() => undefined);
  }

  /**
   * Gets all company users.
   * @returns {Promise<Array<User>>} a promise with the list of the company users
   */
  async getUsers(): Promise<Array<User>> {
    let self = this;
    return Iland.getHttp().get(`/companies/${self.getUuid()}/users`).then((response) => {
      let json = response.data as Array<UserJson>;
      return json.map((it) => new User(it));
    });
  }

  /**
   * Gets all company users that are assigned to a specified role.
   * @returns {Promise<Array<User>>} a promise with the list of the company users that are assigned to the role
   */
  async getUsersWithRole(roleUuid: string): Promise<Array<User>> {
    let self = this;
    return Iland.getHttp().get(`/companies/${self.getUuid()}/users`, {
      params: {
        role: roleUuid
      }
    }).then((response) => {
      let json = response.data as Array<UserJson>;
      return json.map((it) => new User(it));
    });
  }

  /**
   * A company may have multiple user domains if they have users that are shared with other companies. This method
   * returns the identifiers for all domains that are associated with this company.
   * @returns {Promise<Array<string>>} a promise with the list of the company user domains
   */
  async getUserDomains(): Promise<Array<string>> {
    let self = this;
    return Iland.getHttp().get(`/companies/${self.getUuid()}/domains`).then((response) => {
      return response.data as Array<string>;
    });
  }

  /**
   * Creates a new company user.
   * @returns {Promise<User>} a promise with the newly created user
   */
  async createUser(request: UserCreationRequest): Promise<User> {
    let self = this;
    return Iland.getHttp().post(`/companies/${self.getUuid()}/users`, request.getJson())
                .then(function(response) {
                  let json = response.data as UserJson;
                  return new User(json);
                });
  }

}
