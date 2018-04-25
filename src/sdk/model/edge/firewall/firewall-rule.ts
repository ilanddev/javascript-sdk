import { FirewallRuleJson } from './json/edge-firewall';

/**
 * FirewallRule class
 */
export class FirewallRule {

  constructor(private _json: FirewallRuleJson) {
  }

  /**
   * Get description
   * @returns {string | null}
   */
  get description(): string | null {
    return this._json.description;
  }

  /**
   * Get destination IPq
   * @returns {string | null}
   */
  get destinationIp(): string | null {
    return this._json.destination_ip;
  }

  /**
   * Get destination port range.
   * @returns {string | null}
   */
  get destinationPortRange(): string | null {
    return this._json.destination_port_range;
  }

  /**
   * Get direction.
   * @returns {string | null}
   */
  get direction(): string | null {
    return this._json.direction;
  }

  /**
   * Get ICMP sub type.
   * @returns {string | null}
   */
  get icmpSubType(): string | null {
    return this._json.icmp_sub_type;
  }

  /**
   * Get ID.
   * @returns {string | null}
   */
  get id(): string | null {
    return this._json.id;
  }

  /**
   * Get policy
   * @returns {string | null}
   */
  get policy(): string | null {
    return this._json.policy;
  }

  /**
   * Get port
   * @returns {number}
   */
  get port(): number {
    return this._json.port;
  }

  /**
   * Get Protocol.
   * @returns {Array<string>}
   */
  get protocol(): Array<string> {
    return (this._json.protocol || []) as Array<string>;
  }

  /**
   * Get source IP
   * @returns {string | null}
   */
  get sourceIp(): string | null {
    return this._json.source_ip;
  }

  /**
   * Get source port.
   * @returns {number}
   */
  get sourcePort(): number {
    return this._json.source_port;
  }

  /**
   * Get source port range
   * @returns {string | null}
   */
  get sourcePortRange(): string | null {
    return this._json.source_port_range;
  }

  /**
   * Check weather this FirewallRule has logging activated or not.
   * @returns {boolean}
   */
  get logging(): boolean {
    return this._json.logging;
  }

  /**
   * Check weather this FirewallRule is enabled or not.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Check weather this FirewallRule match on translate or not.
   * @returns {boolean}
   */
  get matchOnTranslate(): boolean {
    return this._json.match_on_translate;
  }

  /**
   * Get index
   * @returns {number}
   */
  get idx(): number {
    return this._json.idx;
  }

  /**
   * Get the json representation of this class.
   * @returns {FirewallRuleJson}
   */
  get json(): FirewallRuleJson {
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
