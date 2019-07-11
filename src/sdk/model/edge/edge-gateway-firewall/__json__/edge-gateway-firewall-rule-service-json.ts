/**
 * Firewall Rule Service JSON
 */
export interface EdgeGatewayFirewallRuleServiceJson {
  protocol: string;
  port: Array<string>;
  source_port: Array<string>;
  icmp_type: string;
}
