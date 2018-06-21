import { StaticRouteUpdateRequestJson } from './__json__/static-route-update-request-json';
import { StaticRoutingUpdateRequestJson } from './__json__/static-routing-update-request-json';
import { StaticRouteUpdateRequest } from './static-route-update-request';

/**
 * Static Routing Update Request.
 */
/* istanbul ignore next: autogenerated */
export class StaticRoutingUpdateRequest {

  private readonly _json: StaticRoutingUpdateRequestJson;

  constructor(StaticRoutingUpdateRequest: StaticRoutingUpdateRequest);
  constructor(StaticRoutingUpdateRequestJson: StaticRoutingUpdateRequestJson);
  constructor(edgeUuid: string, enabled: boolean, routes: Array<StaticRouteUpdateRequestJson>);
  constructor(firstParam: string | StaticRoutingUpdateRequest | StaticRoutingUpdateRequestJson,
              enabled?: boolean, routes?: Array<StaticRouteUpdateRequestJson>) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        edge_uuid: firstParam,
        enabled: enabled,
        routes: routes
      } as StaticRoutingUpdateRequestJson;
    } else if (firstParam instanceof StaticRoutingUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as StaticRoutingUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as StaticRoutingUpdateRequestJson;
    }
  }

  /**
   * Get edge uuid.
   * @returns {string}
   */
  get edgeUuid(): string {
    return this._json.edge_uuid;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get routes.
   * @returns {Array<StaticRouteUpdateRequest>}
   */
  get routes(): Array<StaticRouteUpdateRequest> {
    return this._json.routes.map(it => new StaticRouteUpdateRequest(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {StaticRoutingUpdateRequestJson}
   */
  get json(): StaticRoutingUpdateRequestJson {
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
