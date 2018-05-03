import {
  LoadBalancerPoolJson,
  LoadBalancerServiceJson,
  LoadBalancerVirtualServerJson
} from './__json__/load-balancer-json';
import { LoadBalancerPool } from './load-balancer-pool';
import { LoadBalancerVirtualServer } from './load-balancer-virtual-server';

/**
 * LoadBalancer class
 */
export class LoadBalancer {

  constructor(private _json: LoadBalancerServiceJson) {
  }

  /**
   * Get edge uuid
   * @returns {string | null}
   */
  get edgeUuid(): string | null {
    return this._json.edge_uuid;
  }

  /**
   * Check weather this LoadBalancer is enabled or not.
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Get a list of virtual servers
   * @returns {Array<LoadBalancerVirtualServer>}
   */
  get virtualServers(): Array<LoadBalancerVirtualServer> {
    return (this._json.virtual_servers as Array<LoadBalancerVirtualServerJson>)
      .map(vs => new LoadBalancerVirtualServer(vs));
  }

  /**
   * Get a list of load balancer pools
   * @returns {Array<LoadBalancerPool>}
   */
  get pools(): Array<LoadBalancerPool> {
    return (this._json.pools as Array<LoadBalancerPoolJson>).map(lb => new LoadBalancerPool(lb));
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {LoadBalancerServiceJson}
   */
  get json(): LoadBalancerServiceJson {
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
