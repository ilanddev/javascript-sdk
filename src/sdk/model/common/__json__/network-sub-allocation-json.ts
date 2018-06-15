import { IpRangeJson } from '../ip-range/__json__/ip-range-json';

export interface NetworkSubAllocationJson {
  edge_name: string;
  ip_ranges: Array<IpRangeJson>;
}
