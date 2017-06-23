import {ApiUser} from "./api-spec/api-user";
import {Iland} from "../iland";
import {OrgEntityTree} from "./api-spec/api-org-entity-tree";
import {Inventory} from "./inventory";

/**
 * User.
 */
export class User {

  constructor(private _apiUser: ApiUser) {
  }

  /**
   * Gets a user by username.
   * @param username the user's username
   * @returns {Promise<User>}
   */
  static getUser(username: string): Promise<User> {
    return Iland.getHttp().get(`/user/${username}`).then(function(response) {
      let apiUser = response.data as ApiUser;
      return new User(apiUser);
    });
  }

  /**
   * Gets the currently authenticated user.
   * @returns {Promise<User>}
   */
  static getCurrentUser(): Promise<User> {
    return Iland.getAuthProvider().getAuthenticatedUsername().then(function(username: string) {
      if (username) {
        return User.getUser(username);
      } else {
        return new Promise<User>(function(undefined, reject) {
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
   * @returns {string} user type
   */
  getUserType(): string {
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
   * Retrieves a new representation of the user from the API.
   * @returns {Promise<User>} promise that resolves with updated user
   */
  refresh(): Promise<User> {
    let self = this;
    return Iland.getHttp().get(`/user/${self.getUsername()}`).then(function(response) {
      self._apiUser = response.data as ApiUser;
      return self;
    });
  }

  /**
   * Gets the user's entity inventory.
   * @returns {Promise<Inventory>} user's entity inventory
   */
  getInventory(): Promise<Inventory> {
    let self = this;
    return Iland.getHttp().get(`/user/${self.getUsername()}/inventory`).then(function(response) {
      let inventory = response.data as Array<OrgEntityTree>;
      return new Inventory(inventory);
    });
  }

}
