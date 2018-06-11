import { VappNetworkFirewallRuleJson } from './vapp-network-firewall-rule-json';

export interface VappNetworkFirewallJson {
  vapp_uuid: string;
  network_name: string;
  logging_enabled: boolean;
  enabled: boolean;
  default_action: string;
  rules: Array<VappNetworkFirewallRuleJson>;
}
