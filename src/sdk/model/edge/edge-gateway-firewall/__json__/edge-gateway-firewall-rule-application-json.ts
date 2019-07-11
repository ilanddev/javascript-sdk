import { EdgeGatewayFirewallRuleServiceJson } from './edge-gateway-firewall-rule-service-json';

/**
 * Firewall Rule Application JSON
 */
export interface EdgeGatewayFirewallRuleApplicationJson {
  application_id: string;
  service: Array<EdgeGatewayFirewallRuleServiceJson>;
}
