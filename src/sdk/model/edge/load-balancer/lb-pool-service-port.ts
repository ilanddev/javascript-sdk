import { LbPoolHealthCheckJson, LbPoolServicePortJson } from './json/load-balancer';
import { LbPoolHealthCheck } from './lb-pool-health-check';

/**
 * LbPoolServicePort class
 */
export class LbPoolServicePort {

  constructor(private _json: LbPoolServicePortJson) {
  }

  /**
   * Check weather LbPoolServicePort is enabled or not.
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Get protocol
   * @returns {string | null}
   */
  get protocol(): string | null {
    return this._json.protocol;
  }

  /**
   * Get algorithm
   * @returns {string | null}
   */
  get algorithm(): string | null {
    return this._json.algorithm;
  }

  /**
   * Get port
   * @returns {string | null}
   */
  get port(): string | null {
    return this._json.port;
  }

  /**
   * Get health check port
   * @returns {string | null}
   */
  get healthCheckPort(): string | null {
    return this._json.health_check_port;
  }

  /**
   * Get list of health checks.
   * @returns {Array<LbPoolHealthCheck>}
   */
  get healthChecks(): Array<LbPoolHealthCheck> {
    return (this._json.health_checks as Array<LbPoolHealthCheckJson>)
      .map(lbPoolHealthCheck => new LbPoolHealthCheck(lbPoolHealthCheck));
  }

  /**
   * Get the json representation of this class.
   * @returns {LbPoolServicePortJson}
   */
  get json(): LbPoolServicePortJson {
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
