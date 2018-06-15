import { DhcpPool } from './dhcp-pool';
import { DhcpJson } from './__json__/dhcp-json';
import { EdgeDhcpJson } from './__json__/edge-dhcp-json';

/**
 * Dhcp class
 */
export class Dhcp {

  constructor(private _json: EdgeDhcpJson) {
  }

  /**
   * Get the edge UUID.
   * @returns {string | null}
   */
  get edgeUuid(): string | null {
    return this._json.edge_uuid;
  }

  /**
   * Check weather or not a dhcp service is enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get a list of Dhcp pools.
   * @returns {Array<DhcpPool>}
   */
  get dhcpPools(): Array<DhcpPool> {
    const dhcpPools = (this._json.dhcp_pools || []) as Array<DhcpJson>;
    return dhcpPools.map(pool => new DhcpPool(pool));
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeDhcpJson}
   */
  get json(): EdgeDhcpJson {
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
