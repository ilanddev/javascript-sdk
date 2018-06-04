import { VmNetworkJson } from './__json__';
import { IpRange } from '../../edge/ip-range';

export class VmNetwork {

  constructor(private _json: VmNetworkJson) {
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get vapp network.
   * @returns {boolean}
   */
  get vappNetwork(): boolean {
    return this._json.vapp_network;
  }

  /**
   * Get fence mode.
   * @returns {string}
   */
  get fenceMode(): string {
    return this._json.fence_mode;
  }

  /**
   * Get deleted.
   * @returns {boolean}
   */
  get deleted(): boolean {
    return this._json.deleted;
  }

  /**
   * Get ip ranges.
   * @returns {Array<IpRange>}
   */
  get ipRanges(): Array<IpRange> {
    return this._json.ip_ranges.map((range) => {
      return new IpRange(range);
    });
  }

  /**
   * Get gateway.
   * @returns {string}
   */
  get gateway(): string {
    return this._json.gateway;
  }

  /**
   * Get netmask.
   * @returns {string}
   */
  get netmask(): string {
    return this._json.netmask;
  }

  /**
   * Get dns1.
   * @returns {string}
   */
  get dns1(): string {
    return this._json.dns1;
  }

  /**
   * Get dns2.
   * @returns {string}
   */
  get dns2(): string {
    return this._json.dns2;
  }

  /**
   * Get dns suffix.
   * @returns {string}
   */
  get dnsSuffix(): string {
    return this._json.dns_suffix;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get inherited.
   * @returns {boolean}
   */
  get inherited(): boolean {
    return this._json.inherited;
  }

  /**
   * Get parent network name.
   * @returns {string}
   */
  get parentNetworkName(): string {
    return this._json.parent_network_name;
  }

  /**
   * Get parent network uuid.
   * @returns {string}
   */
  get parentNetworkUuid(): string {
    return this._json.parent_network_uuid;
  }

  /**
   * Get parent entity uuid.
   * @returns {string}
   */
  get parentEntityUuid(): string {
    return this._json.parent_entity_uuid;
  }

  /**
   * Get shared.
   * @returns {boolean}
   */
  get shared(): boolean {
    return this._json.shared;
  }

  /**
   * Get edge uuid.
   * @returns {string}
   */
  get edgeUuid(): string {
    return this._json.edge_uuid;
  }

  /**
   * Get router external ip.
   * @returns {string}
   */
  get routerExternalIp(): string {
    return this._json.router_external_ip;
  }

  /**
   * Get the json representation of this class.
   * @returns {VmNetworkJson}
   */
  get json(): VmNetworkJson {
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
