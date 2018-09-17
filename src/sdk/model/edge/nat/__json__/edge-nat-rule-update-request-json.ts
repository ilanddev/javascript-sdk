/**
 * Edge Nat Rule Update Request JSON
 */
export interface EdgeNATRuleUpdateRequestJson {
  description: string;
  id: number;
  rule_type: string;
  enabled: boolean;
  icmp_sub_type: string;
  original_ip: string;
  original_port: string;
  protocol: string;
  translated_ip: string;
  translated_port: string;
  interface: string;
  idx: number;
}
