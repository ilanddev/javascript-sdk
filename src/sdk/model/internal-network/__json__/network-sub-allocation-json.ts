import { IpRangeJson } from '../../common/ip-range/__json__';

export interface NetworkSubAllocationJson {
  edge_name: string;
  ip_ranges: Array<IpRangeJson>;
}
