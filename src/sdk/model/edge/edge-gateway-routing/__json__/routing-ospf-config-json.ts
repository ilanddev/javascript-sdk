import { RedistributionJson } from './redistribution-json';
import { OSPFAreaJson } from './ospf-area-json';
import { OSPFInterfaceJson } from './ospf-interface-json';

/**
 * Routing OSPF Configuration JSON
 */
export interface RoutingOSPFConfigJson {
  enabled: boolean;
  graceful_restart: boolean;
  default_originate: boolean;
  ospf_areas: Array<OSPFAreaJson>;
  ospf_interfaces: Array<OSPFInterfaceJson>;
  redistribution: RedistributionJson;
}
