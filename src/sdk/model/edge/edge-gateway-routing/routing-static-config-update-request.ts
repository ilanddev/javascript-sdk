import { DefaultRoute } from './default-route';
import { Route } from './route';
import { RoutingStaticConfigUpdateRequestJson } from './__json__/routing-static-config-update-request-json';
import { RouteJson } from './__json__/route-json';
import { DefaultRouteJson } from './__json__/default-route-json';

/**
 * Routing Static Configuration Update Request
 */
/* istanbul ignore next: autogenerated */
export class RoutingStaticConfigUpdateRequest {

  private readonly _json: RoutingStaticConfigUpdateRequestJson;

  constructor(routingStaticConfigUpdateRequest: RoutingStaticConfigUpdateRequest);
  constructor(routingStaticConfigUpdateRequestJson: RoutingStaticConfigUpdateRequestJson);
  constructor(defaultRoute: DefaultRouteJson, staticRoutes: Array<RouteJson>);
  constructor(firstParam: DefaultRouteJson | RoutingStaticConfigUpdateRequest | RoutingStaticConfigUpdateRequestJson,
              staticRoutes?: Array<RouteJson>) {
    if (firstParam instanceof RoutingStaticConfigUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as RoutingStaticConfigUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as RoutingStaticConfigUpdateRequestJson;
    }
  }

  /**
   * Get default route.
   * @returns {DefaultRoute}
   */
  get defaultRoute(): DefaultRoute {
    return new DefaultRoute(this._json.default_route);
  }

  /**
   * Get static routes.
   * @returns {Array<Route>}
   */
  get staticRoutes(): Array<Route> {
    return this._json.static_routes.map(it => new Route(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {RoutingStaticConfigUpdateRequestJson}
   */
  get json(): RoutingStaticConfigUpdateRequestJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
