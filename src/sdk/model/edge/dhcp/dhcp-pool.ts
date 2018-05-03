import { DhcpJson } from './__json__/dhcp-json';

/**
 * DhcpPool class
 */
export class DhcpPool {

  constructor(private _json: DhcpJson) {
  }

  /**
   * Get edge uuid
   * @returns {string | null}
   */
  get edgeUuid(): string | null {
    return this._json.edge_uuid;
  }

  /**
   * Check weather or not this Dhcp Pool is enabled or not.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get network
   * @returns {string | null}
   */
  get network(): string | null {
    return this._json.network;
  }

  /**
   * Get max lease time.
   * @returns {number | null}
   */
  get maxLeaseTime(): number | null {
    return this._json.max_lease_time;
  }

  /**
   * Get default lease time.
   * @returns {number | null}
   */
  get defaultLeaseTime(): number | null {
    return this._json.default_lease_time;
  }

  /**
   * Get low IP.
   * @returns {string | null}
   */
  get lowIp(): string | null {
    return this._json.low_ip;
  }

  /**
   * Get high IP.
   * @returns {string | null}
   */
  get highIp(): string | null {
    return this._json.high_ip;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {DhcpJson}
   */
  get json(): DhcpJson {
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
