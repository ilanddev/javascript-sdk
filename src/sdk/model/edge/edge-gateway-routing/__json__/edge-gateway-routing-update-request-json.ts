import { RoutingGlobalConfigUpdateRequestJson } from './routing-global-config-update-request-json';
import { RoutingStaticConfigUpdateRequestJson } from './routing-static-config-update-request-json';
import { RoutingOSPFConfigUpdateRequestJson } from './routing-ospf-config-update-request-json';
import { RoutingBGPConfigUpdateRequestJson } from './routing-bgp-config-update-request-json';

/**
 * Edge Gateway Routing Update Request JSON
 */
export interface EdgeGatewayRoutingUpdateRequestJson {
  enabled: boolean;
  routing_global_config: RoutingGlobalConfigUpdateRequestJson;
  routing_static_config: RoutingStaticConfigUpdateRequestJson;
  routing_ospf_config: RoutingOSPFConfigUpdateRequestJson;
  routing_bgp_config?: RoutingBGPConfigUpdateRequestJson;
}
