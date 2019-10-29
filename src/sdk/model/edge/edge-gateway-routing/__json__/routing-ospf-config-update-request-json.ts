import { OSPFAreaJson } from './ospf-area-json';
import { RedistributionUpdateRequestJson } from './redistribution-update-request-json';
import { OSPFInterfaceJson } from './ospf-interface-json';

/**
 * Routing OSPF Configuration Update Request JSON
 */
export interface RoutingOSPFConfigUpdateRequestJson {
  enabled: boolean;
  graceful_restart: boolean;
  default_originate: boolean;
  ospf_areas: Array<OSPFAreaJson>;
  ospf_interfaces: Array<OSPFInterfaceJson>;
  redistribution: RedistributionUpdateRequestJson;
}
