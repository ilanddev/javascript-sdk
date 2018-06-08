import { UserUpdateRequestJson } from './__json__/user-update-request-json';

/**
 * User Update Request
 */
export class UserUpdateRequest {

  /**
   * Creates a new user update request.
   * @param {string} name
   * @param {string} phone
   * @param {string} company
   * @param {string} address
   * @param {string} city
   * @param {string} state
   * @param {string} zip
   * @param {string} country
   */
  constructor(public name: string, public phone: string, public company: string, public address: string,
              public city: string, public state: string, public zip: string, public country: string) {
  }

  /**
   * Get the json representation of this class.
   * @returns {UserUpdateRequestJson}
   */
  get json(): UserUpdateRequestJson {
    return {
      name: this.name,
      phone: this.phone,
      company: this.company,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip,
      country: this.country
    };
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this.json, undefined, 2);
  }
}
