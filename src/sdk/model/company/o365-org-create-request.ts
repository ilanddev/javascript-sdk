import { O365OrgCreateRequestJson } from './__json__/o365-org-create-request-json';

/**
 * O365 Organization creation request object.
 */
/* istanbul ignore next */
export class O365OrgCreateRequest {

  private readonly _json: O365OrgCreateRequestJson;

  constructor(o365OrgCreateRequest: O365OrgCreateRequest);
  constructor(o365OrgCreateRequestJson: O365OrgCreateRequestJson);
  constructor(firstParam: string | O365OrgCreateRequest | O365OrgCreateRequestJson, account?: string, password?: string,
              isExchangeOnline?: boolean, isSharePointOnline?: boolean) {
    if (typeof firstParam === 'string') {
      // parameters constructor
      this._json = {
        name: firstParam,
        account: account,
        password: password,
        is_exchange_online: isExchangeOnline,
        is_share_point_online: isSharePointOnline
      } as O365OrgCreateRequestJson;
    } else if (firstParam instanceof O365OrgCreateRequest) {
      // copy constructor
      this._json = (firstParam || O365OrgCreateRequest).json;
    } else {
      // json or empty constructor
      this._json = (firstParam || {}) as O365OrgCreateRequestJson;
    }
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get account.
   * @returns {string}
   */
  get account(): string {
    return this._json.account;
  }

  /**
   * Get password.
   * @returns {string}
   */
  get password(): string {
    return this._json.password;
  }

  /**
   * Get isExchangeOnline.
   * @returns {boolean}
   */
  get isExchangeOnline(): boolean {
    return this._json.is_exchange_online;
  }

  /**
   * Get isSharePointOnline.
   * @returns {boolean}
   */
  get isSharePointOnline(): boolean {
    return this._json.is_share_point_online;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365OrgCreateRequestJson}
   */
  get json(): O365OrgCreateRequestJson {
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
