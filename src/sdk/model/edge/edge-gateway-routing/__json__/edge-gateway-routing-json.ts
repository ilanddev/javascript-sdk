import { RoutingGlobalConfigJson } from './routing-global-config-json';
import { RoutingStaticConfigJson } from './routing-static-config-json';
import { RoutingOSPFConfigJson } from './routing-ospf-config-json';
import { RoutingBGPConfigJson } from './routing-bgp-config-json';

/**
 * Edge Gateway Routing JSON
 */
export interface EdgeGatewayRoutingJson {
  enabled: boolean;
  routing_global_config: RoutingGlobalConfigJson;
  routing_static_config: RoutingStaticConfigJson;
  routing_ospf_config: RoutingOSPFConfigJson;
  routing_bgp_config?: RoutingBGPConfigJson;
}
