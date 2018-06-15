import { DhcpJson } from './dhcp-json';

/**
 * Interface for Edge DHCP service.
 */
export interface EdgeDhcpJson {
  edge_uuid: string | null;
  enabled: boolean;
  dhcp_pools: Array<DhcpJson> | null;
}
