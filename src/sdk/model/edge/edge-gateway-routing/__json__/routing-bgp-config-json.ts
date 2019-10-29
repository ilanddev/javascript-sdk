import { RedistributionJson } from './redistribution-json';
import { BGPNeighbourJson } from './bgp-neighbour-json';

/**
 * Routing BGP Configuration JSON
 */
export interface RoutingBGPConfigJson {
  enabled: boolean;
  local_as: number;
  local_as_number: string;
  bgp_neighbours: Array<BGPNeighbourJson>;
  redistribution: RedistributionJson;
  graceful_restart: boolean;
  default_originate: boolean;
}
