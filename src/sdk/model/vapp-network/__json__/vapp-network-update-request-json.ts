import { IpRangeJson } from '../../common/ip-range/__json__/ip-range-json';
import { NetworkFenceModeType } from '../../common/__json__/network-fence-mode-type';

export interface VappNetworkUpdateRequestJson {
  fence_mode: NetworkFenceModeType;
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
