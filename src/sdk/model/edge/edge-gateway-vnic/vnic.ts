import { EdgeGatewayVNICJson, VnicType } from './__json__/vnic-json';
import { AddressGroup } from './vnic-address-group';
import { MacAddress } from './vnic-mac-address';
import { ShapingPolicy } from './vnic-shaping-policy';

/**
 * Edge Gateway VNIC.
 */
/* istanbul ignore next: autogenerated */
export class EdgeGatewayVNIC {

  constructor(private _json: EdgeGatewayVNICJson) {
  }

  /**
   * Get index.
   * @returns {number}
   */
  get index(): number {
    return this._json.index;
  }

  /**
   * Get label.
   * @returns {string}
   */
  get label(): string {
    return this._json.label;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get type.
   * @returns {VnicType}
   */
  get type(): VnicType {
    return this._json.type;
  }

  /**
   * Get portgroup id.
   * @returns {string}
   */
  get portgroupId(): string {
    return this._json.portgroup_id;
  }

  /**
   * Get portgroup name.
   * @returns {string}
   */
  get portgroupName(): string {
    return this._json.portgroup_name;
  }

  /**
   * Get address groups.
   * @returns {Array<AddressGroup>}
   */
  get addressGroups(): Array<AddressGroup> {
    return this._json.address_groups ? this._json.address_groups.map(it => new AddressGroup(it)) : [];
  }

  /**
   * Get mac address.
   * @returns {Array<MacAddress>}
   */
  get macAddress(): Array<MacAddress> {
    return this._json.mac_address ? this._json.mac_address.map(it => new MacAddress(it)) : [];
  }

  /**
   * Get mtu.
   * @returns {number}
   */
  get mtu(): number {
    return this._json.mtu;
  }

  /**
   * Get enable proxy arp.
   * @returns {boolean}
   */
  get enableProxyArp(): boolean {
    return this._json.enable_proxy_arp;
  }

  /**
   * Get enable send redirects.
   * @returns {boolean}
   */
  get enableSendRedirects(): boolean {
    return this._json.enable_send_redirects;
  }

  /**
   * Get is connected.
   * @returns {boolean}
   */
  get isConnected(): boolean {
    return this._json.is_connected;
  }

  /**
   * Get in shaping policy.
   * @returns {ShapingPolicy}
   */
  get inShapingPolicy(): ShapingPolicy | null {
    return this._json.in_shaping_policy ? new ShapingPolicy(this._json.in_shaping_policy) : null;
  }

  /**
   * Get out shaping policy.
   * @returns {ShapingPolicy}
   */
  get outShapingPolicy(): ShapingPolicy | null {
    return this._json.out_shaping_policy ? new ShapingPolicy(this._json.out_shaping_policy) : null;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayVNICJson}
   */
  get json(): EdgeGatewayVNICJson {
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
