import { LbPoolHealthCheckJson } from './json/load-balancer';

/**
 * LbPoolHealthCheck class
 */
export class LbPoolHealthCheck {

  constructor(private _json: LbPoolHealthCheckJson) {
  }

  /**
   * Get mode
   * @returns {string | null}
   */
  get mode(): string | null {
    return this._json.mode;
  }

  /**
   * Get uri
   * @returns {string | null}
   */
  get uri(): string | null {
    return this._json.uri;
  }

  /**
   * Get health threshold
   * @returns {string | null}
   */
  get healthThreshold(): string | null {
    return this._json.health_threshold;
  }

  /**
   * Get unhealth threshold
   * @returns {string | null}
   */
  get unhealthThreshold(): string | null {
    return this._json.unhealth_threshold;
  }

  /**
   * Get interval
   * @returns {string | null}
   */
  get interval(): string | null {
    return this._json.interval;
  }

  /**
   * Get timeout
   * @returns {string | null}
   */
  get timeout(): string | null {
    return this._json.timeout;
  }

  /**
   * Get the json representation of this class.
   * @returns {LbPoolHealthCheckJson}
   */
  get json(): LbPoolHealthCheckJson {
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
