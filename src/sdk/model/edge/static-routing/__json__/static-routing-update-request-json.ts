import { StaticRouteUpdateRequestJson } from './static-route-update-request-json';

/**
 * Static Routing Update Request JSON interface.
 */
export interface StaticRoutingUpdateRequestJson {
  edge_uuid: string;
  enabled: boolean;
  routes: Array<StaticRouteUpdateRequestJson>;
}
