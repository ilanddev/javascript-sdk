import { LbPersistenceJson } from './__json__/load-balancer-json';

/**
 * LbPersistence class
 */
export class LbPersistence {

  constructor(private _json: LbPersistenceJson) {
  }

  /**
   * Get method
   * @returns {string | null}
   */
  get method(): string | null {
    return this._json.method;
  }

  /**
   * Get cookie name
   * @returns {string | null}
   */
  get cookieName(): string | null {
    return this._json.cookie_name;
  }

  /**
   * Get cookie mode
   * @returns {string | null}
   */
  get cookieMode(): string | null {
    return this._json.cookie_mode;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {LbPersistenceJson}
   */
  get json(): LbPersistenceJson {
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
