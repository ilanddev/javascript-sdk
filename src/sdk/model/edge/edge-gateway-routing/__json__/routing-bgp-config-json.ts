import { RedistributionJson } from './redistribution-json';
import { BGPNeighbourJson } from './bgp-neighbour-json';

/**
 * Routing BGP Configuration JSON
 */
export interface RoutingBGPConfigJson {
  enabled: boolean;
  local_as: number;
  local_as_number: number;
  bgp_neighbours: Array<BGPNeighbourJson>;
  redistribution_response: RedistributionJson;
  graceful_restart: boolean;
  default_originate: boolean;
}
