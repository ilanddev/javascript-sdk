/**
 * Interface for Edge firewall rule.
 */
export interface FirewallRuleJson {
  description: string | null;
  destination_ip: string | null;
  destination_port_range: string | null;
  direction: string | null;
  icmp_sub_type: string | null;
  id: string | null;
  policy: string | null;
  port: number;
  protocol: Array<string> | null;
  source_ip: string | null;
  source_port: number;
  source_port_range: string | null;
  logging: boolean;
  enabled: boolean;
  match_on_translate: boolean;
  idx: number;
}
