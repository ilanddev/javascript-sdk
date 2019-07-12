import { EdgeGatewayFirewallDefaultPolicyJson } from './edge-gateway-firewall-default-policy-json';
import { EdgeGatewayFirewallGlobalConfigJson } from './edge-gateway-firewall-global-config-json';
import { EdgeGatewayFirewallRuleJson } from './edge-gateway-firewall-rule-json';

/**
 * Edge Gateway Firewall Update Request JSON
 */
export interface EdgeGatewayFirewallUpdateRequestJson {
  enabled: boolean;
  firewall_global_config: EdgeGatewayFirewallGlobalConfigJson;
  firewall_default_policy: EdgeGatewayFirewallDefaultPolicyJson;
  firewall_rules: Array<EdgeGatewayFirewallRuleJson>;
}
