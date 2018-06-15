import { IpRangeJson } from '../../common/ip-range/__json__/ip-range-json';
import { FenceModeType } from '../../common/__json__/fence-mode-type';

export interface VappNetworkUpdateRequestJson {
  fence_mode: FenceModeType;
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
