import { EdgeSslVpnUserJson } from './json/edge-ssl-vpn';

/**
 * SslVpnUser class
 */
export class SslVpnUser {

  constructor(private _json: EdgeSslVpnUserJson) {
  }

  /**
   * Get user id
   * @returns {string | null}
   */
  get userId(): string | null {
    return this._json.user_id;
  }

  /**
   * Get object id
   * @returns {string | null}
   */
  get objectId(): string | null {
    return this._json.object_id;
  }

  /**
   * Get firstname
   * @returns {string | null}
   */
  get firstName(): string | null {
    return this._json.first_name;
  }

  /**
   * Get lastname
   * @returns {string | null}
   */
  get lastName(): string | null {
    return this._json.last_name;
  }

  /**
   * Get description
   * @returns {string | null}
   */
  get description(): string | null {
    return this._json.description;
  }

  /**
   * Check weather the account is disabled or not.
   * @returns {boolean | null}
   */
  get disableAccount(): boolean | null {
    return this._json.disable_account;
  }

  /**
   * Get password
   * @returns {string | null}
   */
  get password(): string | null {
    return this._json.password;
  }

  /**
   * Check weather password never expires or not.
   * @returns {boolean | null}
   */
  get passwordNeverExpires(): boolean | null {
    return this._json.password_never_expires;
  }

  /**
   * Check weather to change password on next login or not.
   * @returns {boolean | null}
   */
  get changePwdOnNextLogin(): boolean | null {
    return this._json.change_pwd_on_next_login;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeSslVpnUserJson}
   */
  get json(): EdgeSslVpnUserJson {
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
