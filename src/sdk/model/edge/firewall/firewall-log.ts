/**
 * FirewallLog class
 */
import { EdgeFirewallLogJson } from './__json__/edge-firewall-log-json';

export class FirewallLog {

  constructor(private _json: EdgeFirewallLogJson) {
  }

  /**
   * Get edge uuid.
   * @returns {string | null}
   */
  get edgeUuid(): string | null {
    return this._json.edge_uuid;
  }

  /**
   * Get time.
   * @returns {Date | null}
   */
  get time(): Date | null {
    return this._json.time ? new Date(this._json.time) : null;
  }

  /**
   * Get destination port.
   * @returns {number | null}
   */
  get destPort(): number | null {
    return this._json.dest_port;
  }

  /**
   * Get count
   * @returns {number}
   */
  get count(): number {
    return this._json.count;
  }

  /**
   * Get destination IP.
   * @returns {string | null}
   */
  get destIp(): string | null {
    return this._json.dest_ip;
  }

  /**
   * Get action
   * @returns {string | null}
   */
  get action(): string | null {
    return this._json.action;
  }

  /**
   * Get source IP.
   * @returns {string | null}
   */
  get sourceIp(): string | null {
    return this._json.source_ip;
  }

  /**
   * Get protocol
   * @returns {string | null}
   */
  get protocol(): string | null {
    return this._json.protocol;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeFirewallLogJson}
   */
  get json(): EdgeFirewallLogJson {
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
