import { Entity } from './entity';
import { IpRange } from './ip-range';
import { AbstractNetworkJson, NetworkFenceMode } from './json/abstract-network';

/**
 * Abstract Network.
 */
export abstract class AbstractNetwork extends Entity {

  constructor(protected _json: AbstractNetworkJson) {
    super(_json);
  }

  /**
   * Gets the description.
   * @returns {string} description
   */
  getDescription(): string {
    return this._json.description;
  }

  /**
   * Gets the datacenter location identifier.
   * @returns {string} location ID
   */
  getLocationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the UUID of the Org that the network is associated with.
   * @returns {string} Org UUID
   */
  getOrgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Gets the UUID of the vDC that the network is associated with.
   * @returns {string} vDC UUID
   */
  getVdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Gets the primary DNS host.
   * @returns {string} primary DNS host
   */
  getPrimaryDns(): string {
    return this._json.primary_dns;
  }

  /**
   * Gets the secondary DSN host.
   * @returns {string} secondary DNS host
   */
  getSecondaryDns(): string {
    return this._json.secondary_dns;
  }

  /**
   * Gets the DNS suffix.
   * @returns {string} DNS suffix
   */
  getDnsSuffix(): string {
    return this._json.dns_suffix;
  }

  /**
   * Gets the networks fence mode.
   * @returns {NetworkFenceMode} fence mode
   */
  getFenceMode(): NetworkFenceMode {
    return this._json.fence_mode;
  }

  /**
   * Gets the gateway address of the network.
   * @returns {string} gateway address
   */
  getGatewayAddress(): string {
    return this._json.gateway;
  }

  /**
   * Gets the netmask of the network.
   * @returns {string} netmask
   */
  getNetmask(): string {
    return this._json.netmask;
  }

  /**
   * Gets the static IP Ranges for the newtork.
   * @returns {[IpRange]} static IP ranges
   */
  getIpRanges(): Array<IpRange> {
    return this._json.ip_ranges.map((ipRangeJson) => new IpRange(ipRangeJson));
  }

  /**
   * Indicates whether this network is inherited.
   * @returns {boolean} value
   */
  isInherited(): boolean {
    return this._json.inherited;
  }

  /**
   * Gets the UUID of the parent external network if this is a bridged network, otherwise null.
   * @returns {string|null} parent external network UUID
   */
  getParentNetworkUuid(): string | null {
    return this._json.parent_network_uuid;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

}
