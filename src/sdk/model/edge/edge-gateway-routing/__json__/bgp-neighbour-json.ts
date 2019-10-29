import { BGPFilterJson } from './bgp-filter-json';

/**
 * BGP Neighbour JSON
 */
export interface BGPNeighbourJson {
  ip_address: string;
  remote_as: number;
  remote_as_number: number;
  weight: number;
  hold_down_timer: number;
  keep_alive_timer: number;
  password: string;
  remove_private_as: boolean;
  bgp_filters: Array<BGPFilterJson>;
}
