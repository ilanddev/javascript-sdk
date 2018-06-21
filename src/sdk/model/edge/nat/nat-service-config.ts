import { GatewayNatRule } from '../gateway-nat-rule/gateway-nat-rule';
import { GatewayNatRuleJson } from '../gateway-nat-rule/__json__/gateway-nat-rule-json';
import { NatServiceConfigJson } from './__json__/nat-service-config-json';

/**
 * Nat Service Configuration class.
 */
export class NatServiceConfiguration {

  constructor(private _json: NatServiceConfigJson) {
  }

  /**
   * Get the version.
   * @returns {number}
   */
  get version(): number {
    return this._json.version;
  }

  /**
   * Get external ip
   * @returns {string | null}
   */
  get externalIp(): string | null {
    return this._json.external_ip;
  }

  /**
   * Get type
   * @returns {string | null}
   */
  get type(): string | null {
    return this._json.type;
  }

  /**
   * Get policy
   * @returns {string | null}
   */
  get policy(): string | null {
    return this._json.policy;
  }

  /**
   * Check weather nat service is enabled or not
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Get a list of gateway nat rules.
   * @returns {Array<GatewayNatRule>}
   */
  get rules(): Array<GatewayNatRule> {
    const rules = (this._json.rules || []) as Array<GatewayNatRuleJson>;
    return rules.map(rule => new GatewayNatRule(rule));
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {NatServiceConfigJson}
   */
  get json(): NatServiceConfigJson {
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
