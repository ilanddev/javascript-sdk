import { NetworkSubAllocationJson } from './network-sub-allocation-json';
import { IpRangeJson } from '../ip-range/__json__/ip-range-json';

export interface NetworkIpScopeJson {
  inherited?: boolean;
  gateway: string;
  netmask: string;
  primary_dns: string;
  secondary_dns: string;
  dns_suffix: string;
  ip_ranges: Array<IpRangeJson>;
  enabled?: boolean;
  allocated_ip_addresses?: Array<string>;
  sub_allocations?: Array<NetworkSubAllocationJson>;
}
