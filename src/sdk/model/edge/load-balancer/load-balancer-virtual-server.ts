import { LbVirtualServerServiceProfileJson, LoadBalancerVirtualServerJson } from './json/load-balancer';
import { LbVirtualServerServiceProfile } from './lb-virtual-server-service-profile';

/**
 * LoadBalancerVirtualServer class
 */
export class LoadBalancerVirtualServer {

  constructor(private _json: LoadBalancerVirtualServerJson) {
  }

  /**
   * Get name
   * @returns {string | null}
   */
  get name(): string | null {
    return this._json.name;
  }

  /**
   * Check weather this LoadBalancerVirtualServer is enabled or not.
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Get description
   * @returns {string | null}
   */
  get description(): string | null {
    return this._json.description;
  }

  /**
   * Get id address
   * @returns {string | null}
   */
  get ipAddress(): string | null {
    return this._json.ip_address;
  }

  /**
   * Check weather this LoadBalancerVirtualServer has logging enabled or not.
   * @returns {boolean | null}
   */
  get logging(): boolean | null {
    return this._json.logging;
  }

  /**
   * Get pool
   * @returns {string | null}
   */
  get pool(): string | null {
    return this._json.pool;
  }

  /**
   * Get network
   * @returns {string | null}
   */
  get network(): string | null {
    return this._json.network;
  }

  /**
   * Get a list of virtual server service profiles
   * @returns {Array<LbVirtualServerServiceProfile>}
   */
  get serviceProfiles(): Array<LbVirtualServerServiceProfile> {
    return (this._json.service_profiles as Array<LbVirtualServerServiceProfileJson>)
      .map(lbVsProfile => new LbVirtualServerServiceProfile(lbVsProfile));
  }

  /**
   * Get the json representation of this class.
   * @returns {LoadBalancerVirtualServerJson}
   */
  get json(): LoadBalancerVirtualServerJson {
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
