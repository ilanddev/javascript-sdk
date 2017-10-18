import { UserCreationRequestJson } from './json/user-creation-request';

/**
 * User Creation Request.
 */
export class UserCreationRequest {

  constructor(private _json: UserCreationRequestJson) {
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
   * @returns {UserCreationRequestJson} the JSON representation
   */
  getJson(): UserCreationRequestJson {
    return Object.assign({}, this._json);
  }

}
