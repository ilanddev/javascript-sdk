import { DHCPPoolUpdateRequestJson } from './dhcp-pool-update-request-json';

/**
 * Dhcp Service Update Request JSON interface.
 */
export interface DhcpServiceUpdateRequestJson {
  edge_uuid: string;
  enabled: boolean;
  dhcp_pools: Array<DHCPPoolUpdateRequestJson>;
}
