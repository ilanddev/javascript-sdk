export interface GatewayNatRuleJson {
  description: string | null;
  id: number;
  rule_type: string;
  enabled: boolean;
  icmp_sub_type: string | null;
  original_ip: string;
  original_port: string | null;
  protocol: string | null;
  translated_ip: string;
  translated_port: string | null;
  interface_name: string;
  rule_index: number;
}
