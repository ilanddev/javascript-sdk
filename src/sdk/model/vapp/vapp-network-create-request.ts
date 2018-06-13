import { VappNetworkCreateRequestJson } from './__json__/vapp-network-create-request-json';
import { IpRangeJson } from '../common/ip-range/__json__/ip-range-json';

export class VappNetworkCreateRequest {

  constructor(private _json: VappNetworkCreateRequestJson) {
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
   * Get deployed.
   * @returns {boolean}
   */
  get deployed(): boolean {
    return this._json.deployed;
  }

  /**
   * Get backward compatibility mode.
   * @returns {boolean}
   */
  get backwardCompatibilityMode(): boolean {
    return this._json.backward_compatibility_mode;
  }

  /**
   * Get retain net info across deployments.
   * @returns {boolean}
   */
  get retainNetInfoAcrossDeployments(): boolean {
    return this._json.retain_net_info_across_deployments;
  }

  /**
   * Get parent network uuid.
   * @returns {string}
   */
  get parentNetworkUuid(): string {
    return this._json.parent_network_uuid;
  }

  /**
   * Get gateway address.
   * @returns {string}
   */
  get gatewayAddress(): string {
    return this._json.gateway_address;
  }

  /**
   * Get network mask.
   * @returns {string}
   */
  get networkMask(): string {
    return this._json.network_mask;
  }

  /**
   * Get primary dns.
   * @returns {string}
   */
  get primaryDns(): string {
    return this._json.primary_dns;
  }

  /**
   * Get secondary dns.
   * @returns {string}
   */
  get secondaryDns(): string {
    return this._json.secondary_dns;
  }

  /**
   * Get dns suffix.
   * @returns {string}
   */
  get dnsSuffix(): string {
    return this._json.dns_suffix;
  }

  /**
   * Get ip ranges.
   * @returns {Array<IpRangeJson>}
   */
  get ipRanges(): Array<IpRangeJson> {
    return this._json.ip_ranges;
  }

  /**
   * Get the json representation of this class.
   * @returns {VappNetworkCreateRequestJson}
   */
  get json(): VappNetworkCreateRequestJson {
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
