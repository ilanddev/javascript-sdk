import { NetworkSubAllocationJson } from '../../common/__json__/network-sub-allocation-json';
import { IpRangeJson } from '../../common/ip-range/__json__/ip-range-json';

export interface IpScopeJson {
  inherited?: boolean;
  enabled?: boolean;
  gateway: string;
  netmask: string;
  primary_dns: string;
  secondary_dns: string;
  dns_suffix: string;
  ip_ranges: Array<IpRangeJson>;
  allocated_ip_addresses?: Array<string>;
  sub_allocations?: Array<NetworkSubAllocationJson>;
}
