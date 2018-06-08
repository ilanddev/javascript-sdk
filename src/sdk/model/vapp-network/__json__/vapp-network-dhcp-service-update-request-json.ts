import { IpRangeRequestJson } from '../../common/ip-range/__json__';

export interface VappNetworkDHCPServiceUpdateRequestJson {
  enabled: boolean;
  ip_range: IpRangeRequestJson;
  default_lease_time: number;
  max_lease_time: number;
}
