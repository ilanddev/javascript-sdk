import { NetworkPerfSampleJson } from './json/network-perf-sample';

/**
 * NetworkPerfSample class
 */
export class NetworkPerfSample {

  constructor(private _json: NetworkPerfSampleJson) {
  }

  /**
   * Get time
   * @returns {Date | null}
   */
  get time(): Date | null {
    return this._json.time ? new Date(this._json.time) : null;
  }

  /**
   * Get value
   * @returns {number | null}
   */
  get value(): number | null {
    return this._json.value;
  }

  /**
   * Get the json representation of this class.
   * @returns {NetworkPerfSampleJson}
   */
  get json(): NetworkPerfSampleJson {
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
