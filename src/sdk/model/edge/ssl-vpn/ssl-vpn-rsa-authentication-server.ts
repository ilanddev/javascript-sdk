import { SslVpnAuthenticationServer } from './ssl-vpn-authentication-server';
import { EdgeSslVpnRsaAuthenticationServerJson } from './json/edge-ssl-vpn';

export class SslVpnRsaAuthenticationServer extends SslVpnAuthenticationServer {

  constructor(protected _json: EdgeSslVpnRsaAuthenticationServerJson) {
    super(_json);
  }

  /**
   * Get timeout
   * @returns {number | null}
   */
  get timeout(): number | null {
    return this._json.timeout;
  }

  /**
   * Get source IP
   * @returns {string}
   */
  get sourceIp(): string {
    return this._json.source_ip;
  }

  /**
   * Get the json representation of this class.
   * @returns {LbPersistenceJson}
   */
  get json(): EdgeSslVpnRsaAuthenticationServerJson {
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
