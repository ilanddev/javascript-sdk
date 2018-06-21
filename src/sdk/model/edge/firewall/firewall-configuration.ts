import { FirewallRule } from './firewall-rule';
import { FirewallRuleJson } from './__json__/firewall-rule-json';
import { EdgeFirewallConfigJson } from './__json__/edge-firewall-config-json';

/**
 * Firewall Configuration class.
 */
export class FirewallConfiguration {

  constructor(private _json: EdgeFirewallConfigJson) {
  }

  /**
   * Get the version.
   * @returns {number}
   */
  get version(): number {
    return this._json.version;
  }

  /**
   * Get edge uuid.
   * @returns {string | null}
   */
  get edgeUuid(): string | null {
    return this._json.edge_uuid;
  }

  /**
   * Check weather the Firewall has logging enabled or not.
   * @returns {boolean}
   */
  get log(): boolean {
    return this._json.log;
  }

  /**
   * Check weather the Firewall is enabled or not.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get default action.
   * @returns {string | null}
   */
  get defaultAction(): string | null {
    return this._json.default_action;
  }

  /**
   * Get a list of firewall rules.
   * @returns {Array<FirewallRule>}
   */
  get rules(): Array<FirewallRule> {
    const rules = (this._json.rules || []) as Array<FirewallRuleJson>;
    return rules.map(rule => new FirewallRule(rule));
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeFirewallConfigJson}
   */
  get json(): EdgeFirewallConfigJson {
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
