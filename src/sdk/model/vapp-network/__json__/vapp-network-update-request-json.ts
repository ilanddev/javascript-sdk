import { IpRangeJson } from '../../common/ip-range/__json__/ip-range-json';
import { NetworkFenceMode } from '../..';

export interface VappNetworkUpdateRequestJson {
  fence_mode: NetworkFenceMode;
  parent_network_uuid: string;
  description: string;
  name: string;
  primary_dns: string;
  secondary_dns: string;
  dns_suffix: string;
  inherited: boolean;
  ip_ranges: Array<IpRangeJson>;
  router_external_ip: string;
}
