import { DefaultRouteJson } from './default-route-json';
import { RouteJson } from './route-json';

/**
 * Routing Static Configuration JSON
 */
export interface RoutingStaticConfigJson {
  default_route: DefaultRouteJson;
  static_routes: Array<RouteJson>;
}
