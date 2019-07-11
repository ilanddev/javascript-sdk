import { EdgeGatewayFirewallActionType } from './edge-gateway-firewall-action-type';
import { EdgeGatewayFirewallRuleApplicationJson } from './edge-gateway-firewall-rule-application-json';
import { EdgeGatewayFirewallRuleSourceDestinationJson } from './edge-gateway-firewall-rule-source-destination-json';

/**
 * Firewall Rule JSON
 */
export interface EdgeGatewayFirewallRuleJson {
  id: number;
  rule_tag: number;
  name: string;
  rule_type: string;
  description: string;
  source: EdgeGatewayFirewallRuleSourceDestinationJson;
  destination: EdgeGatewayFirewallRuleSourceDestinationJson;
  application: EdgeGatewayFirewallRuleApplicationJson;
  action_type: EdgeGatewayFirewallActionType;
  enabled: boolean;
  logging_enabled: boolean;
  match_translated: boolean;
}
