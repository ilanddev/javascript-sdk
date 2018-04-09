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

/**
 * Interface for Edge firewall log.
 */
export interface EdgeFirewallLogJson {
  edge_uuid: string | null;
  time: number | null;
  dest_port: number | null;
  count: number;
  dest_ip: string | null;
  action: string | null;
  source_ip: string | null;
  protocol: string | null;
}

export type EdgeFirewallLogType = 'action_source' | 'destination_port' | 'destination_port_and_protocol';
