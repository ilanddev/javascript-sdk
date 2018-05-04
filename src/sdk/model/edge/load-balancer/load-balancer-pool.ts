import { LbPoolMemberJson, LbPoolServicePortJson, LoadBalancerPoolJson } from './__json__/load-balancer-json';
import { LbPoolServicePort } from './lb-pool-service-port';
import { LbPoolMember } from './lb-pool-member';

/**
 * LoadBalancerPool class
 */
export class LoadBalancerPool {

  constructor(private _json: LoadBalancerPoolJson) {
  }

  /**
   * Get id
   * @returns {string | null}
   */
  get id(): string | null {
    return this._json.id;
  }

  /**
   * Get name
   * @returns {string | null}
   */
  get name(): string | null {
    return this._json.name;
  }

  /**
   * Get description
   * @returns {string | null}
   */
  get description(): string | null {
    return this._json.description;
  }

  /**
   * Check weather this LoadBalancerPool is operational or not.
   * @returns {boolean | null}
   */
  get operational(): boolean | null {
    return this._json.operational;
  }

  /**
   * Get error details.
   * @returns {string | null}
   */
  get errorDetails(): string | null {
    return this._json.error_details;
  }

  /**
   * Get a list of pool service ports
   * @returns {Array<LbPoolServicePort>}
   */
  get servicePorts(): Array<LbPoolServicePort> {
    return (this._json.service_ports as Array<LbPoolServicePortJson>)
      .map(lbPoolServicePort => new LbPoolServicePort(lbPoolServicePort));
  }

  /**
   * Get a list of pool members
   * @returns {Array<LbPoolMember>}
   */
  get members(): Array<LbPoolMember> {
    return (this._json.members as Array<LbPoolMemberJson>).map(lbPoolMember => new LbPoolMember(lbPoolMember));
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {LoadBalancerPoolJson}
   */
  get json(): LoadBalancerPoolJson {
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
