/**
 * Edge Firewall Update Request JSON representation.
 */
export interface EdgeFirewallUpdateRequestJson {
  edge_uuid: string;
  log: boolean;
  enabled: boolean;
  default_action: string;
}
