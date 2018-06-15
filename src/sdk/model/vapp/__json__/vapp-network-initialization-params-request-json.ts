import { IpRangeJson } from '../../common/ip-range/__json__/ip-range-json';

export interface VappNetworkInitializationParamsRequestJson {
  name: string;
  description: string;
  deployed: boolean;
  backward_compatibility_mode: boolean;
  retain_net_info_across_deployments: boolean;
  parent_network_uuid: string;
  gateway_address: string;
  network_mask: string;
  primary_dns: string;
  secondary_dns: string;
  dns_suffix: string;
  ip_ranges: Array<IpRangeJson>;
}
