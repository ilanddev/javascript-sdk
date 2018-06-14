import { VappNetworkStaticRouteJson } from './vapp-network-static-route-json';

export interface VappNetworkStaticRoutingServiceJson {
  vapp_uuid: string;
  network_name: string;
  enabled: boolean;
  static_routes: Array<VappNetworkStaticRouteJson>;
}
