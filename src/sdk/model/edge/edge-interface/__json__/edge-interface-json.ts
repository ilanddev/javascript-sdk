import { EdgeSubnetParticipationJson } from '../../subnet-participation/__json__/subnet-participation-json';
import { EdgeInterfaceType } from './edge-interface-type';

/**
 * Interface for Edge Interface JSON representation.
 */
export interface EdgeInterfaceJson {
  display_name: string | null;
  name: string;
  in_rate_limit: number;
  out_rate_limit: number;
  type: EdgeInterfaceType | null;
  apply_rate_limit: boolean;
  default_route: boolean | null;
  network: string | null;
  network_uuid: string | null;
  subnet_participation: Array<EdgeSubnetParticipationJson> | null;
}
