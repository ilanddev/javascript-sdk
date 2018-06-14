import { IpRangeJson } from '../ip-range/__json__/index';

export interface NetworkSubAllocationJson {
  edge_name: string;
  ip_ranges: Array<IpRangeJson>;
}
