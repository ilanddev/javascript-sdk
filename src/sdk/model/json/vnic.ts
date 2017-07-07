/**
 * Interface for VNIC properties.
 */
export interface VnicJson {
  adapter_type: string;
  address_mode: VnicAddressMode;
  connected: boolean;
  deleted: boolean;
  ip_addr: string;
  mac_addr: string;
  net_name: string;
  primary_cnx: boolean;
  vnic_id: number;
}

/**
 * Enumeration of possible VNIC addressing modes.
 */
export type VnicAddressMode = 'DHCP' |
  'MANUAL' |
  'POOL' |
  'NONE';
