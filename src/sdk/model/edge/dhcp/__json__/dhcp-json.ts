/**
 * Iterface for Edge DHCP pool.
 */
export interface DhcpJson {
  edge_uuid: string | null;
  enabled: boolean;
  network: string | null;
  max_lease_time: number;
  default_lease_time: number;
  low_ip: string | null;
  high_ip: string | null;
}

/**
 * Interface for Edge DHCP service.
 */
export interface EdgeDhcpJson {
  edge_uuid: string | null;
  enabled: boolean;
  dhcp_pools: Array<DhcpJson> | null;
}
