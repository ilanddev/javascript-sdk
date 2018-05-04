export interface GatewayNatRuleJson {
  description: string | null;
  id: number | null;
  type: string | null;
  enabled: boolean;
  icmp_sub_type: string | null;
  original_ip: string | null;
  original_port: string | null;
  protocol: string | null;
  translated_ip: string | null;
  translated_port: string | null;
  interface: string | null;
  idx: number;
}
