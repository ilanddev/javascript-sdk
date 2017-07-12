import { EdgeInterfaceJson, EdgeInterfaceType } from './json/edge';
import { EdgeSubnetParticipation } from './edge-subnet-participation';

/**
 * Edge Gateway Interface.
 */
export class EdgeInterface {

  constructor(private _json: EdgeInterfaceJson) {
  }

  /**
   * Gets the interface name.
   * @returns {string} interface name
   */
  getName(): string {
    return this._json.name;
  }

  /**
   * Gets the display name.
   * @returns {string} display name
   */
  getDisplayName(): string {
    return this._json.display_name;
  }

  /**
   * Gets the incoming rate limit setting.
   * @returns {number} incoming rate limit
   */
  getInRateLimit(): number {
    return this._json.in_rate_limit;
  }

  /**
   * Gets the outgoing rate limit setting.
   * @returns {number} outgoing rate limit
   */
  getOutRateLimit(): number {
    return this._json.out_rate_limit;
  }

  /**
   * Gets the interface type.
   * @returns {EdgeInterfaceType} interface type
   */
  getType(): EdgeInterfaceType {
    return this._json.type;
  }

  /**
   * Indicates whether rate limiting is enabled on this edge.
   * @returns {boolean} value
   */
  isRateLimitEnabled(): boolean {
    return this._json.apply_rate_limit;
  }

  /**
   * Indicates whether this edge is used as the default DNS relay route.
   * @returns {boolean} value
   */
  isDefaultRoute(): boolean {
    return this._json.default_route;
  }

  /**
   * Gets the name of the network that is attached to this interface.
   * @returns {string} network name
   */
  getNetworkName(): string {
    return this._json.network;
  }

  /**
   * Gets the UUID of the network that is attached to this interface.
   * @returns {string} network UUID
   */
  getNetworkUuid(): string {
    return this._json.network_uuid;
  }

  /**
   * Gets the subnet participation information.
   * @returns {[EdgeSubnetParticipation]} subnet participation array
   */
  getSubnetParticipation(): Array<EdgeSubnetParticipation> {
    return this._json.subnet_participation.map((spJson) => new EdgeSubnetParticipation(spJson));
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
   * @returns {EdgeInterfaceJson} the JSON representation
   */
  getJson(): EdgeInterfaceJson {
    return Object.assign({}, this._json);
  }

}
