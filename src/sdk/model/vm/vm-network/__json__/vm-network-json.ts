import { IpRangeJson } from '../../../common/ip-range/__json__/ip-range-json';

export interface VmNetworkJson {
  uuid: string;
  name: string;
  description: string;
  vapp_network: boolean;
  fence_mode: string;
  deleted: boolean;
  ip_ranges: Array<IpRangeJson>;
  gateway: string;
  netmask: string;
  dns1: string;
  dns2: string;
  dns_suffix: string;
  enabled: boolean;
  inherited: boolean;
  parent_network_name: string;
  parent_network_uuid: string;
  parent_entity_uuid: string;
  shared: boolean;
  edge_uuid: string;
  router_external_ip: string;
}
