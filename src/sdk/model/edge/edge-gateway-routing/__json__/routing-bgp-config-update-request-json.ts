import { RedistributionUpdateRequestJson } from './redistribution-update-request-json';
import { BGPNeighbourJson } from './bgp-neighbour-json';

/**
 * Routing BGP Configuration Update Request JSON
 */
export interface RoutingBGPConfigUpdateRequestJson {
  enabled: boolean;
  local_as_number: string;
  bgp_neighbours: Array<BGPNeighbourJson>;
  redistribution: RedistributionUpdateRequestJson;
  graceful_restart: boolean;
  default_originate: boolean;
}
