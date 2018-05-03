import { EdgeFirewallJson, FirewallRuleJson } from './__json__/edge-firewall-json';
import { FirewallRule } from './firewall-rule';

/**
 * Firewall class
 */
export class Firewall {

  constructor(private _json: EdgeFirewallJson) {
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
   * @returns {EdgeFirewallJson}
   */
  get json(): EdgeFirewallJson {
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
