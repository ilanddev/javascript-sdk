/**
 * Edge Gateway NAT 64 Rule JSON
 */
export interface EdgeGatewayNat64RuleJson {
  rule_id: number;
  rule_tag: number;
  logging_enabled: boolean;
  enabled: boolean;
  description: string;
  match_ipv6_destination_prefix: string;
  translated_ipv4_source_prefix: string;
}
