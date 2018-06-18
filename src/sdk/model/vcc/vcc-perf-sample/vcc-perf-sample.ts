import { VccPerfSampleJson } from './__json__/vcc-perf-sample-json';

/**
 * Vcc Perf Sample.
 */
export class VccPerfSample {

  constructor(private _json: VccPerfSampleJson) {
  }

  /**
   * Gets the used quota for the Vcc Perf Sample
   * @returns {number}
   */
  get usedQuota(): number {
    return this._json.used_quota;
  }

  /**
   * Gets the quota for the Vcc Perf Sample
   * @returns {number}
   */
  get quota(): number {
    return this._json.quota;
  }

  /**
   * Gets the timestamp for the Vcc Perf Sample
   * @returns {number}
   */
  get timeStamp(): number {
    return this._json.time;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VccPerfSampleJson} the API __json__ object
   */
  get json(): VccPerfSampleJson {
    return Object.assign({}, this._json);
  }
}
