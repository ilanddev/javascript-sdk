import { VappNetworkStaticRouteRequestJson } from './vapp-network-static-route-request-json';

export interface VappNetworkStaticRoutingServiceUpdateRequestJson {
  enabled: boolean;
  static_routes: Array<VappNetworkStaticRouteRequestJson>;
}
