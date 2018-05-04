/**
 * Interface for VNIC properties.
 */
export interface VnicJson {
  adapter_type: string;
  ip_addressing_mode: VnicAddressMode;
  is_connected: boolean;
  deleted: boolean;
  ip_address: string;
  mac_address: string;
  network_name: string;
  is_primary: boolean;
  vnic_id: number;
}

/**
 * Enumeration of possible VNIC addressing modes.
 */
export type VnicAddressMode = 'DHCP' |
  'MANUAL' |
  'POOL' |
  'NONE';
