import { EdgeSubnetParticipationJson } from './json/edge';
import { IpRange } from './ip-range';

/**
 * Edge Gateway Subnet Participation.
 */
export class EdgeSubnetParticipation {

  constructor(private _json: EdgeSubnetParticipationJson) {
  }

  /**
   * Gets the gateway address on the network.
   * @returns {string} gateway address
   */
  get gatewayAddress(): string {
    return this._json.gateway;
  }

  /**
   * Gets the networks netmask.
   * @returns {string} netmask
   */
  get netmask(): string {
    return this._json.netmask;
  }

  /**
   * Gets the IP address.
   * @returns {string} IP address
   */
  get ipAddress(): string {
    return this._json.ip_address;
  }

  /**
   * Gets the assigned IP ranges.
   * @returns {[IpRange]} IP address ranges
   */
  get ipRanges(): Array<IpRange> {
    return this._json.ip_ranges.map((rangeJson) => new IpRange(rangeJson));
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {EdgeSubnetParticipationJson} the JSON representation
   */
  get json(): EdgeSubnetParticipationJson {
    return Object.assign({}, this._json);
  }

}
