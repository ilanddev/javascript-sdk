import { AddressGroupJson } from './vnic-address-group-json';

export interface VnicSubInterfaceJson {
  is_connected: boolean;
  label: string;
  name: string;
  index: number;
  tunnel_id: number;
  vlan_id: number;
  enable_send_redirects: boolean;
  mtu: number;
  address_groups: Array<AddressGroupJson>;
}
