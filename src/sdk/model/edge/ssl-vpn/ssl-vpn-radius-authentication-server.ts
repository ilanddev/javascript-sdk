import { SslVpnAuthenticationServer } from './ssl-vpn-authentication-server';
import { EdgeSslVpnRadiusAuthenticationServerJson } from './json/edge-ssl-vpn';

export class SslVpnRadiusAuthenticationServer extends SslVpnAuthenticationServer {

  constructor(protected _json: EdgeSslVpnRadiusAuthenticationServerJson) {
    super(_json);
  }

  /**
   * Get IP
   * @returns {string}
   */
  get ip(): string {
    return this._json.ip;
  }

  /**
   * Get port
   * @returns {number | null}
   */
  get port(): number | null {
    return this._json.port;
  }

  /**
   * Get timeout
   * @returns {number | null}
   */
  get timeout(): number | null {
    return this._json.timeout;
  }

  /**
   *
   * @returns {string}
   */
  get secret(): string {
    return this._json.secret;
  }

  /**
   *
   * @returns {string | null}
   */
  get nasIp(): string | null {
    return this._json.nas_ip;
  }

  /**
   *
   * @returns {number | null}
   */
  get retryCount(): number | null {
    return this._json.retry_count;
  }

  /**
   * Get the json representation of this class.
   * @returns {LbPersistenceJson}
   */
  get json(): EdgeSslVpnRadiusAuthenticationServerJson {
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
