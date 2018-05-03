import { EdgeSslVpnGatewayJson } from './__json__/edge-ssl-vpn-json';

/**
 * SslVpnGateway class
 */
export class SslVpnGateway {

  constructor(private _json: EdgeSslVpnGatewayJson) {
  }

  /**
   * Get Hostname
   * @returns {string | null}
   */
  get hostName(): string | null {
    return this._json.host_name;
  }

  /**
   * Get port
   * @returns {string | null}
   */
  get port(): string | null {
    return this._json.port;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeSslVpnGatewayJson}
   */
  get json(): EdgeSslVpnGatewayJson {
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
