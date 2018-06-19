import { SubnetParticipationUpdateRequestJson } from './subnet-participation-update-request-json';

/**
 * Edge Interface Update Request JSON interface.
 */
export interface EdgeInterfaceUpdateRequestJson {
  display_name: string;
  name: string;
  in_rate_limit: number;
  out_rate_limit: number;
  interface_type: string;
  apply_rate_limit: boolean;
  use_for_default_route: boolean;
  network: string;
  network_uuid: string;
  subnet_participation: Array<SubnetParticipationUpdateRequestJson>;
}
