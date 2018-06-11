import { VappNetworkFirewallRuleRequestJson } from './vapp-network-firewall-rule-request-json';

export interface VappNetworkFirewallUpdateRequestJson {
  logging_enabled: boolean;
  enabled: boolean;
  default_action: string;
  rules: Array<VappNetworkFirewallRuleRequestJson>;
}
