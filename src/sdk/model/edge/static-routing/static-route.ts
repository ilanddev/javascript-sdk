import { StaticRouteJson } from './__json__/static-route-json';

/**
 * StaticRoute class
 */
export class StaticRoute {

  constructor(private _json: StaticRouteJson) {
  }

  /**
   * Get edge uuid
   * @returns {string | null}
   */
  get edgeUuid(): string | null {
    return this._json.edge_uuid;
  }

  /**
   * Get index
   * @returns {number}
   */
  get idx(): number {
    return this._json.idx;
  }

  /**
   * Get name
   * @returns {string | null}
   */
  get name(): string | null {
    return this._json.name;
  }

  /**
   * Get network
   * @returns {string | null}
   */
  get network(): string | null {
    return this._json.network;
  }

  /**
   * Get next hop IP
   * @returns {string | null}
   */
  get nextHopIp(): string | null {
    return this._json.next_hop_ip;
  }

  /**
   * Get interface type
   * @returns {string | null}
   */
  get interfaceType(): string | null {
    return this._json.interface_type;
  }

  /**
   * Get interface
   * @returns {string | null}
   */
  get interface(): string | null {
    return this._json.interface;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {StaticRouteJson}
   */
  get json(): StaticRouteJson {
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
