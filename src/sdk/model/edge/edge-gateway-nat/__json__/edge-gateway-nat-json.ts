import { EdgeGatewayNatRuleJson } from './edge-gateway-nat-rule-json';
import { EdgeGatewayNat64RuleJson } from './edge-gateway-nat64-rule-json';

/**
 * Edge Gateway NAT Jsonn
 */
export interface EdgeGatewayNatJson {
  enabled: boolean;
  nat_rules: Array<EdgeGatewayNatRuleJson>;
  nat64_rules: Array<EdgeGatewayNat64RuleJson>;
}
