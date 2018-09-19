import { EdgeStaticRouteJson } from './edge-static-route-json';

/**
 * Edge Static Routing Service JSON
 */
export interface EdgeStaticRoutingServiceJson {
  edge_uuid: string;
  enabled: boolean;
  routes: Array<EdgeStaticRouteJson>;
}
