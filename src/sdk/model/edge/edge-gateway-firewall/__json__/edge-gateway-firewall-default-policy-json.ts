import { EdgeGatewayFirewallActionType } from './edge-gateway-firewall-action-type';

/**
 * Firewall Default Policy JSON
 */
export interface EdgeGatewayFirewallDefaultPolicyJson {
  firewall_action_type: EdgeGatewayFirewallActionType;
  logging_enabled: boolean;
}
