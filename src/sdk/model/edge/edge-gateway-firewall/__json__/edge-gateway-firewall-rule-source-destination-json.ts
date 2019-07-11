/**
 * Firewall Rule Source Destination JSON
 */
export interface EdgeGatewayFirewallRuleSourceDestinationJson {
  exclude: boolean;
  ip_addresses: Array<string>;
  grouping_object_id: Array<string>;
  vnic_group_id: Array<string>;
}
