import { IpRangeJson } from '../../common/ip-range/__json__';

export interface VappNetworkDHCPServiceJson {
  vapp_uuid: string;
  network_name: string;
  enabled: boolean;
  ip_range: IpRangeJson;
  default_lease_time: number;
  max_lease_time: number;
}
