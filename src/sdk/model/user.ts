import { Iland } from '../iland';
import { CompanyInventory } from './company-inventory';
import { Company } from './company';
import { CompanyJson, RoleJson, UserInventoryJson, UserJson, UserType } from './json';
import { Role } from './role';

/**
 * User.
 */
export class User {

  constructor(private _apiUser: UserJson) {
  }

  /**
   * Gets a user by username.
   * @param username the user's username
   * @returns {Promise<User>}
   */
  static async getUser(username: string): Promise<User> {
    return Iland.getHttp().get(`/users/${username}`).then((response) => {
      const apiUser = response.data as UserJson;
      return new User(apiUser);
    });
  }

  /**
   * Gets the currently authenticated user.
   * @returns {Promise<User>}
   */
  static async getCurrentUser(): Promise<User> {
    return Iland.getAuthProvider().getAuthenticatedUsername().then(async(username: string) => {
      if (username) {
        return User.getUser(username);
      } else {
        return new Promise<User>(function(_, reject) {
          reject();
        });
      }
    });
  }

  /**
   * Gets the user's username.
   * @returns {string} username
   */
  get username(): string {
    return this._apiUser.name;
  }

  /**
   * Gets the user's address.
   * @returns {string} address
   */
  get address(): string {
    return this._apiUser.address;
  }

  /**
   * Gets the user's city.
   * @returns {string} city
   */
  get city(): string {
    return this._apiUser.city;
  }

  /**
   * Gets the user's company.
   * @returns {string} company
   */
  get company(): string {
    return this._apiUser.company;
  }

  /**
   * Gets the user's country.
   * @returns {string} country
   */
  get country(): string {
    return this._apiUser.country;
  }

  /**
   * Gets the user's created date.
   * @returns {Date} created date
   */
  get createdDate(): Date {
    return new Date(this._apiUser.created_date);
  }

  /**
   * Gets the user's domain.
   * @returns {string} user domain
   */
  get domain(): string {
    return this._apiUser.domain;
  }

  /**
   * Indicates whether the user is deleted.
   * @returns {boolean} value
   */
  get deleted(): boolean {
    return this._apiUser.deleted;
  }

  /**
   * Gets the deleted date of the user.
   * @returns {Date} deleted date or null if the user is not deleted
   */
  get deletedDate(): Date | null {
    return this._apiUser.deleted_date ? new Date(this._apiUser.deleted_date) : null;
  }

  /**
   * Gets the user's email address.
   * @returns {string} email address
   */
  get email(): string {
    return this._apiUser.email;
  }

  /**
   * Gets the user's full name.
   * @returns {string} full name
   */
  get fullName(): string {
    return this._apiUser.fullname;
  }

  /**
   * Indicates whether the user is locked out of their account.
   * @returns {boolean} value
   */
  get locked(): boolean {
    return this._apiUser.locked;
  }

  /**
   * Gets the phone number of the user.
   * @returns {string} phone number
   */
  get phoneNumber(): string {
    return this._apiUser.phone;
  }

  /**
   * Gets the user's state.
   * @returns {string} state
   */
  get state(): string {
    return this._apiUser.state;
  }

  /**
   * Gets the user type.
   * @returns {UserType} user type
   */
  get userType(): UserType {
    return this._apiUser.user_type;
  }

  /**
   * Gets the user's zip code.
   * @returns {string} zip code.
   */
  get zip(): string {
    return this._apiUser.zip;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._apiUser, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {UserJson} the API User object
   */
  get json(): UserJson {
    return Object.assign({}, this._apiUser);
  }

  /**
   * Retrieves a new representation of the user from the API.
   * @returns {Promise<User>} promise that resolves with updated user
   */
  async refresh(): Promise<User> {
    return Iland.getHttp().get(`/users/${this.username}`).then((response) => {
      this._apiUser = response.data as UserJson;
      return this;
    });
  }

  /**
   * Gets the user's inventory within the specified company..
   * @param {string} companyId the ID of the company to retrieve inventory for
   * @returns {Promise<CompanyInventory>}  entity inventory
   * @throws Error
   */
  async getInventoryInCompany(companyId: string): Promise<CompanyInventory> {
    return Iland.getHttp().get(`/users/${this.username}/iaas-inventory`, {
      params: {
        company: companyId
      }
    }).then((response) => {
      const userInventory = response.data as UserInventoryJson;
      return new CompanyInventory(userInventory.inventory[0]);
    }, () => {
      throw new Error(`No inventory found for company with id=${companyId}.`);
    });
  }

  /**
   * Gets the user's entity inventory.
   * @returns {Promise<Array<CompanyInventory>>} user's entity inventory
   */
  async getInventory(): Promise<Array<CompanyInventory>> {
    return Iland.getHttp().get(`/users/${this.username}/iaas-inventory`).then((response) => {
      const userInventory = response.data as UserInventoryJson;
      return userInventory.inventory.map((it) => new CompanyInventory(it));
    });
  }

  /**
   * Gets the user's role for a company
   * @param {string} companyUuid
   * @returns {Promise<Role>}
   */
  async getRole(companyUuid: string): Promise<Role> {
    return Iland.getHttp().get(`/users/${this.username}/roles/${companyUuid}`).then((response) => {
      const role = response.data as RoleJson;
      return new Role(role);
    });
  }

  /**
   * Gets the user's list of companies.
   * @returns {Promise<Array<Company>>} user's list of companies
   */
  async getCompanies(): Promise<Array<Company>> {
    return Iland.getHttp().get(`/users/${this.username}/companies`).then((response) => {
      const companiesList = response.data as Array<CompanyJson>;
      return companiesList.map((it) => new Company(it));
    });
  }

}
