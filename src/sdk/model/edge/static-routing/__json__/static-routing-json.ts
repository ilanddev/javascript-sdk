import { StaticRouteJson } from './static-route-json';

/**
 * Interface for Static Routing Service JSON representation
 */
export interface StaticRoutingServiceJson {
  edge_uuid: string;
  enabled: boolean;
  routes: Array<StaticRouteJson> | null;
}
