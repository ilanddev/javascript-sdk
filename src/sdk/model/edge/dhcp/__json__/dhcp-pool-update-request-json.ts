/**
 * DHCP Pool Update Request JSON interface.
 */
export interface DHCPPoolUpdateRequestJson {
  edge_uuid: string;
  enabled: boolean;
  network: string;
  max_lease_time: number;
  default_lease_time: number;
  low_ip: string;
  high_ip: string;
}
