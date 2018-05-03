import { EdgeSslVpnPrivateNetworkJson } from './__json__/edge-ssl-vpn-json';

/**
 * SslVpnPrivateNetwork class
 */
export class SslVpnPrivateNetwork {

  constructor(private _json: EdgeSslVpnPrivateNetworkJson) {
  }

  /**
   * Get network
   * @returns {string | null}
   */
  get network(): string | null {
    return this._json.network;
  }

  /**
   * Check weather its enabled or not
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Get description
   * @returns {string | null}
   */
  get description(): string | null {
    return this._json.description;
  }

  /**
   * Get ports
   * @returns {string | null}
   */
  get ports(): string | null {
    return this._json.ports;
  }

  /**
   * Check weather to optimize or not
   * @returns {boolean | null}
   */
  get optimize(): boolean | null {
    return this._json.optimize;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeSslVpnPrivateNetworkJson}
   */
  get json(): EdgeSslVpnPrivateNetworkJson {
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
