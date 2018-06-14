export interface VappNetworkFirewallRuleRequestJson {
  description: string;
  destination_ip: string;
  destination_port_range: string;
  direction: string;
  icmp_sub_type: string;
  policy: string;
  port: number;
  protocols: Array<string>;
  source_ip: string;
  source_port: number;
  source_port_range: string;
  logging_enabled: boolean;
  enabled: boolean;
  match_on_translate: boolean;
}
