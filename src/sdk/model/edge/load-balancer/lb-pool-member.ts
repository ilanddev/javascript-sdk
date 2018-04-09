import { LbPoolMemberJson, LbPoolServicePortJson } from './json/load-balancer';
import { LbPoolServicePort } from './lb-pool-service-port';

/**
 * LbPoolMember class
 */
export class LbPoolMember {

  constructor(private _json: LbPoolMemberJson) {
  }

  /**
   * Get ip address
   * @returns {string | null}
   */
  get ipAddress(): string | null {
    return this._json.ip_address;
  }

  /**
   * Get weight
   * @returns {string | null}
   */
  get weight(): string | null {
    return this._json.weight;
  }

  /**
   * Get list of service ports.
   * @returns {Array<LbPoolServicePort>}
   */
  get servicePorts(): Array<LbPoolServicePort> {
    return (this._json.service_ports as Array<LbPoolServicePortJson>).map(port => new LbPoolServicePort(port));
  }

  /**
   * Get the json representation of this class.
   * @returns {LbPoolMemberJson}
   */
  get json(): LbPoolMemberJson {
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
