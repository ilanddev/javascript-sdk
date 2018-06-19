import { UserSessionJson } from './__json__/user-session-json';

/**
 * User Session.
 */
/* istanbul ignore next: autogenerated */
export class UserSession {

  constructor(private _json: UserSessionJson) {
  }

  /**
   * Get session id.
   * @returns {string}
   */
  get sessionId(): string {
    return this._json.session_id;
  }

  /**
   * Get ip address.
   * @returns {string}
   */
  get ipAddress(): string {
    return this._json.ip_address;
  }

  /**
   * Get username.
   * @returns {string}
   */
  get username(): string {
    return this._json.username;
  }

  /**
   * Get start.
   * @returns {number}
   */
  get start(): number {
    return this._json.start;
  }

  /**
   * Get last access.
   * @returns {number}
   */
  get lastAccess(): number {
    return this._json.last_access;
  }

  /**
   * Get clients.
   * @returns {{ [key: string]: string }}
   */
  get clients(): { [key: string]: string } {
    return this._json.clients;
  }

  /**
   * Get the json representation of this class.
   * @returns {UserSessionJson}
   */
  get json(): UserSessionJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
