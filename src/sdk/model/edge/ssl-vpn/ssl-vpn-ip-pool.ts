import { EdgeSslVpnIpPoolJson } from './__json__/edge-ssl-vpn-json';

/**
 * SslVpnIpPool class
 */
export class SslVpnIpPool {

  constructor(private _json: EdgeSslVpnIpPoolJson) {
  }

  /**
   * Get description
   * @returns {string | null}
   */
  get description(): string | null {
    return this._json.description;
  }

  /**
   * Get ip range
   * @returns {string | null}
   */
  get ipRange(): string | null {
    return this._json.ip_range;
  }

  /**
   * Get netmask
   * @returns {string | null}
   */
  get netmask(): string | null {
    return this._json.netmask;
  }

  /**
   * Get getway
   * @returns {string | null}
   */
  get gateway(): string | null {
    return this._json.gateway;
  }

  /**
   * Get primary dns
   * @returns {string | null}
   */
  get primaryDns(): string | null {
    return this._json.primary_dns;
  }

  /**
   * Get secondary dns
   * @returns {string | null}
   */
  get secondaryDns(): string | null {
    return this._json.secondary_dns;
  }

  /**
   * Get dns suffix
   * @returns {string | null}
   */
  get dnsSuffix(): string | null {
    return this._json.dns_suffix;
  }

  /**
   * Get windows server
   * @returns {string | null}
   */
  get winsServer(): string | null {
    return this._json.wins_server;
  }

  /**
   * Check weather this vpn ip pool is enabled or not.
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeSslVpnIpPoolJson}
   */
  get json(): EdgeSslVpnIpPoolJson {
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
