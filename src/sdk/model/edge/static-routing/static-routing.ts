import { StaticRoutingServiceJson } from './__json__/static-routing-json';
import { StaticRoute } from './static-route';
import { StaticRouteJson } from './__json__/static-route-json';

/**
 * StaticRouting class
 */
export class StaticRouting {

  constructor(private _json: StaticRoutingServiceJson) {
  }

  /**
   * Get edge uuid
   * @returns {string | null}
   */
  get edgeUuid(): string | null {
    return this._json.edge_uuid;
  }

  /**
   * Check weather static routing is enabled or not
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Get list of static routes.
   * @returns {Array<StaticRoute>}
   */
  get routes(): Array<StaticRoute> {
    const routes = (this._json.routes || []) as Array<StaticRouteJson>;
    return routes.map(route => new StaticRoute(route));
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {StaticRoutingServiceJson}
   */
  get json(): StaticRoutingServiceJson {
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
