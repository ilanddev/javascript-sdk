import { IpRangeJson } from '../../../common/ip-range/__json__/ip-range-json';

/**
 * Interface for Edge SubnetParticipation JSON representation.
 */
export interface EdgeSubnetParticipationJson {
  gateway: string | null;
  netmask: string | null;
  ip_address: string | null;
  ip_ranges: Array<IpRangeJson> | null;
}
