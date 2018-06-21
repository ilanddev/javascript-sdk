import { FirewallRuleJson } from './firewall-rule-json';

/**
 * Edge Firewall Config JSON interface.
 */
export interface EdgeFirewallConfigJson {
  version: number;
  edge_uuid: string | null;
  log: boolean;
  enabled: boolean;
  default_action: string | null;
  rules: Array<FirewallRuleJson> | null;
}
