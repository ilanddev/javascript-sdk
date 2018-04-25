import { EdgeInterfaceJson, EdgeInterfaceType, EdgeSubnetParticipationJson } from './json/edge';
import { SubnetParticipation } from './subnet-participation';

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
  get name(): string {
    return this._json.name;
  }

  /**
   * Gets the display name.
   * @returns {string | null} display name
   */
  get displayName(): string | null {
    return this._json.display_name;
  }

  /**
   * Gets the incoming rate limit setting.
   * @returns {number} incoming rate limit
   */
  get inRateLimit(): number {
    return this._json.in_rate_limit;
  }

  /**
   * Gets the outgoing rate limit setting.
   * @returns {number} outgoing rate limit
   */
  get outRateLimit(): number {
    return this._json.out_rate_limit;
  }

  /**
   * Gets the interface type.
   * @returns {EdgeInterfaceType | null} interface type
   */
  get type(): EdgeInterfaceType | null {
    return this._json.type;
  }

  /**
   * Indicates whether rate limiting is enabled on this edge.
   * @returns {boolean} value
   */
  get rateLimitEnabled(): boolean {
    return this._json.apply_rate_limit;
  }

  /**
   * Indicates whether this edge is used as the default DNS relay route.
   * @returns {boolean | null} value
   */
  get defaultRoute(): boolean | null {
    return this._json.default_route;
  }

  /**
   * Gets the name of the network that is attached to this interface.
   * @returns {string | null} network name
   */
  get networkName(): string | null {
    return this._json.network;
  }

  /**
   * Gets the UUID of the network that is attached to this interface.
   * @returns {string | null} network UUID
   */
  get networkUuid(): string | null {
    return this._json.network_uuid;
  }

  /**
   * Gets the subnet participation information.
   * @returns {[SubnetParticipation]} subnet participation array
   */
  get subnetParticipation(): Array<SubnetParticipation> {
    const subnetParticipation = (this._json.subnet_participation || []) as Array<EdgeSubnetParticipationJson>;
    return subnetParticipation.map((spJson) => new SubnetParticipation(spJson));
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
  get json(): EdgeInterfaceJson {
    return Object.assign({}, this._json);
  }

}
