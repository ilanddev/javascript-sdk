import { FirewallRuleJson } from './firewall-rule-json';

/**
 * Interface for Edge firewall service.
 */
export interface EdgeFirewallJson {
  edge_uuid: string | null;
  log: boolean;
  enabled: boolean;
  default_action: string | null;
  rules: Array<FirewallRuleJson> | null;
}
