import { UserJson, UserType } from './json/user';
import { Iland } from '../iland';
import { OrgEntityTreeJson } from './json/org-entity-tree';
import { Inventory } from './inventory';

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
    return Iland.getHttp().get(`/user/${username}`).then(function(response) {
      let apiUser = response.data as UserJson;
      return new User(apiUser);
    });
  }

  /**
   * Gets the currently authenticated user.
   * @returns {Promise<User>}
   */
  static async getCurrentUser(): Promise<User> {
    return Iland.getAuthProvider().getAuthenticatedUsername().then(async function(username: string) {
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
  getUsername(): string {
    return this._apiUser.name;
  }

  /**
   * Gets the user's address.
   * @returns {string} address
   */
  getAddress(): string {
    return this._apiUser.address;
  }

  /**
   * Gets the user's city.
   * @returns {string} city
   */
  getCity(): string {
    return this._apiUser.city;
  }

  /**
   * Gets the user's company.
   * @returns {string} company
   */
  getCompany(): string {
    return this._apiUser.company;
  }

  /**
   * Gets the user's country.
   * @returns {string} country
   */
  getCountry(): string {
    return this._apiUser.country;
  }

  /**
   * Gets the user's created date.
   * @returns {Date} created date
   */
  getCreatedDate(): Date {
    return new Date(this._apiUser.created_date);
  }

  /**
   * Gets the company identifier for the user.
   * @returns {string} company identifier
   */
  getCrm(): string {
    return this._apiUser.crm;
  }

  /**
   * Indicates whether the user is deleted.
   * @returns {boolean} value
   */
  isDeleted(): boolean {
    return this._apiUser.deleted;
  }

  /**
   * Gets the deleted date of the user.
   * @returns {Date} deleted date or null if the user is not deleted
   */
  getDeletedDate(): Date | null {
    return this._apiUser.deleted_date ? new Date(this._apiUser.deleted_date) :
        null;
  }

  /**
   * Gets the user's email address.
   * @returns {string} email address
   */
  getEmail(): string {
    return this._apiUser.email;
  }

  /**
   * Gets the user's full name.
   * @returns {string} full name
   */
  getFullName(): string {
    return this._apiUser.fullname;
  }

  /**
   * Indicates whether the user is locked out of their account.
   * @returns {boolean} value
   */
  isLocked(): boolean {
    return this._apiUser.locked;
  }

  /**
   * Gets the phone number of the user.
   * @returns {string} phone number
   */
  getPhoneNumber(): string {
    return this._apiUser.phone;
  }

  /**
   * Gets the user's state.
   * @returns {string} state
   */
  getState(): string {
    return this._apiUser.state;
  }

  /**
   * Gets the user type.
   * @returns {UserType} user type
   */
  getUserType(): UserType {
    return this._apiUser.user_type;
  }

  /**
   * Gets the user's zip code.
   * @returns {string} zip code.
   */
  getZip(): string {
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
  getJson(): UserJson {
    return Object.assign({}, this._apiUser);
  }

  /**
   * Retrieves a new representation of the user from the API.
   * @returns {Promise<User>} promise that resolves with updated user
   */
  async refresh(): Promise<User> {
    let self = this;
    return Iland.getHttp().get(`/user/${self.getUsername()}`).then(function(response) {
      self._apiUser = response.data as UserJson;
      return self;
    });
  }

  /**
   * Gets the user's entity inventory.
   * @returns {Promise<Inventory>} user's entity inventory
   */
  async getInventory(): Promise<Inventory> {
    let self = this;
    return Iland.getHttp().get(`/user/${self.getUsername()}/inventory`).then(function(response) {
      let inventory = response.data as Array<OrgEntityTreeJson>;
      return new Inventory(inventory);
    });
  }

}
