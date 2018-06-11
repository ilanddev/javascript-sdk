import { IpRangeJson } from '../../common/ip-range/__json__/ip-range-json';

export interface VappNetworkDHCPServiceUpdateRequestJson {
  enabled: boolean;
  ip_range: IpRangeJson;
  default_lease_time: number;
  max_lease_time: number;
}
