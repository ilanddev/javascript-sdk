import { EdgeGatewayNatActionType } from '../edge-gateway-nat-action-type';

/**
 * Edge Gateway NAT Rule Json
 */
export interface EdgeGatewayNatRuleJson {
  rule_id: number;
  rule_tag: number;
  logging_enabled: boolean;
  enabled: boolean;
  description: string;
  translated_address: string;
  rule_type: string;
  action: EdgeGatewayNatActionType;
  vnic: string;
  original_address: string;
  dnat_match_source_address: string;
  snat_match_destination_address: string;
  protocol: string;
  original_port: string;
  translated_port: string;
  dnat_match_source_port: string;
  snat_match_destination_port: string;
  icmp_type: string;
}
