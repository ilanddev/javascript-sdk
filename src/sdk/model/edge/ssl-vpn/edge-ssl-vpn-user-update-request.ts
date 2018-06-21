import { EdgeSslVpnUserUpdateRequestJson } from './__json__/edge-ssl-vpn-user-update-request-json';

/* istanbul ignore next: autogenerated */
export class EdgeSslVpnUserUpdateRequest {

  private readonly _json: EdgeSslVpnUserUpdateRequestJson;

  constructor(edgeSslVpnUserUpdateRequest: EdgeSslVpnUserUpdateRequest);
  constructor(edgeSslVpnUserUpdateRequestJson: EdgeSslVpnUserUpdateRequestJson);
  constructor(userId: string, objectId: string, firstName: string, lastName: string, description: string,
              disableAccount: boolean, password: string, passwordNeverExpires: boolean, changePwdOnNextLogin: boolean);
  constructor(firstParam: string | EdgeSslVpnUserUpdateRequest | EdgeSslVpnUserUpdateRequestJson, objectId?: string,
              firstName?: string, lastName?: string, description?: string, disableAccount?: boolean, password?: string,
              passwordNeverExpires?: boolean, changePwdOnNextLogin?: boolean) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        user_id: firstParam,
        object_id: objectId,
        first_name: firstName,
        last_name: lastName,
        description: description,
        disable_account: disableAccount,
        password: password,
        password_never_expires: passwordNeverExpires,
        change_pwd_on_next_login: changePwdOnNextLogin
      } as EdgeSslVpnUserUpdateRequestJson;
    } else if (firstParam instanceof EdgeSslVpnUserUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as EdgeSslVpnUserUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as EdgeSslVpnUserUpdateRequestJson;
    }
  }

  /**
   * Get user id.
   * @returns {string}
   */
  get userId(): string {
    return this._json.user_id;
  }

  /**
   * Get object id.
   * @returns {string}
   */
  get objectId(): string {
    return this._json.object_id;
  }

  /**
   * Get first name.
   * @returns {string}
   */
  get firstName(): string {
    return this._json.first_name;
  }

  /**
   * Get last name.
   * @returns {string}
   */
  get lastName(): string {
    return this._json.last_name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get disable account.
   * @returns {boolean}
   */
  get disableAccount(): boolean {
    return this._json.disable_account;
  }

  /**
   * Get password.
   * @returns {string}
   */
  get password(): string {
    return this._json.password;
  }

  /**
   * Get password never expires.
   * @returns {boolean}
   */
  get passwordNeverExpires(): boolean {
    return this._json.password_never_expires;
  }

  /**
   * Get change pwd on next login.
   * @returns {boolean}
   */
  get changePwdOnNextLogin(): boolean {
    return this._json.change_pwd_on_next_login;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeSslVpnUserUpdateRequestJson}
   */
  get json(): EdgeSslVpnUserUpdateRequestJson {
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