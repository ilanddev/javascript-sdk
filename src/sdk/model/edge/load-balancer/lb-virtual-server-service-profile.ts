import { LbPersistenceJson, LbVirtualServerServiceProfileJson } from './__json__/load-balancer-json';
import { LbPersistence } from './lb-persistence';

/**
 * LbVirtualServerServiceProfile class
 */
export class LbVirtualServerServiceProfile {

  constructor(private _json: LbVirtualServerServiceProfileJson) {
  }

  /**
   * Check weather profile is enabled or not.
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
   * Get port
   * @returns {string | null}
   */
  get port(): string | null {
    return this._json.port;
  }

  /**
   * Get persistence
   * @returns {LbPersistence | null}
   */
  get persistence(): LbPersistence | null {
    return new LbPersistence(this._json.persistence as LbPersistenceJson);
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {LbVirtualServerServiceProfileJson}
   */
  get json(): LbVirtualServerServiceProfileJson {
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
