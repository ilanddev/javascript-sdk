import { EdgeGatewayNatRuleJson } from './__json__/edge-gateway-nat-rule-json';
import { EdgeGatewayNatActionType } from './edge-gateway-nat-action-type';

/**
 * Edge Gateway NAT Rule
 */
/* istanbul ignore next: autogenerated */
export class EdgeGatewayNatRule {

  constructor(private _json: EdgeGatewayNatRuleJson) {}

  /**
   * Get rule id.
   * @returns {number}
   */
  get ruleId(): number {
    return this._json.rule_id;
  }

  /**
   * Get rule tag.
   * @returns {number}
   */
  get ruleTag(): number {
    return this._json.rule_tag;
  }

  /**
   * Get logging enabled.
   * @returns {boolean}
   */
  get loggingEnabled(): boolean {
    return this._json.logging_enabled;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get translated address.
   * @returns {string}
   */
  get translatedAddress(): string {
    return this._json.translated_address;
  }

  /**
   * Get rule type.
   * @returns {string}
   */
  get ruleType(): string {
    return this._json.rule_type;
  }

  /**
   * Get action.
   * @returns {EdgeGatewayNatActionType}
   */
  get action(): EdgeGatewayNatActionType {
    return this._json.action;
  }

  /**
   * Get vnic.
   * @returns {string}
   */
  get vnic(): string {
    return this._json.vnic;
  }

  /**
   * Get original address.
   * @returns {string}
   */
  get originalAddress(): string {
    return this._json.original_address;
  }

  /**
   * Get dnat match source address.
   * @returns {string}
   */
  get dnatMatchSourceAddress(): string {
    return this._json.dnat_match_source_address;
  }

  /**
   * Get snat match destination address.
   * @returns {string}
   */
  get snatMatchDestinationAddress(): string {
    return this._json.snat_match_destination_address;
  }

  /**
   * Get protocol.
   * @returns {string}
   */
  get protocol(): string {
    return this._json.protocol;
  }

  /**
   * Get original port.
   * @returns {string}
   */
  get originalPort(): string {
    return this._json.original_port;
  }

  /**
   * Get translated port.
   * @returns {string}
   */
  get translatedPort(): string {
    return this._json.translated_port;
  }

  /**
   * Get dnat match source port.
   * @returns {string}
   */
  get dnatMatchSourcePort(): string {
    return this._json.dnat_match_source_port;
  }

  /**
   * Get snat match destination port.
   * @returns {string}
   */
  get snatMatchDestinationPort(): string {
    return this._json.snat_match_destination_port;
  }

  /**
   * Get icmp type.
   * @returns {string}
   */
  get icmpType(): string {
    return this._json.icmp_type;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayNatRuleJson}
   */
  get json(): EdgeGatewayNatRuleJson {
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