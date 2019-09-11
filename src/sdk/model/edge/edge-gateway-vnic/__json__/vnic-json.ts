import { MacAddressJson } from './vnic-mac-address-json';
import { ShapingPolicyJson } from './vnic-shaping-policy-json';
import { AddressGroupJson } from './vnic-address-group-json';

export interface EdgeGatewayVNICJson {
  index: number;
  label: string;
  name: string;
  type: VnicType;
  portgroup_id: string;
  portgroup_name: string;
  address_groups: Array<AddressGroupJson>;
  mac_address: Array<MacAddressJson>;
  mtu: number;
  enable_proxy_arp: boolean;
  enable_send_redirects: boolean;
  is_connected: boolean;
  in_shaping_policy: ShapingPolicyJson;
  out_shaping_policy: ShapingPolicyJson;
}

export type VnicType = 'INTERNAL' | 'UPLINK' | 'TRUNK';
