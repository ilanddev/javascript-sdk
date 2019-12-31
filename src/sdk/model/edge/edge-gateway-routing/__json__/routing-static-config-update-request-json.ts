import { DefaultRouteJson } from './default-route-json';
import { RouteJson } from './route-json';

/**
 * Routing Static Configuration Update Request JSON
 */
export interface RoutingStaticConfigUpdateRequestJson {
  default_route?: DefaultRouteJson;
  static_routes: Array<RouteJson>;
}
