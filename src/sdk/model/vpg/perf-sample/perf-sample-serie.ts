import { PerfSampleJson, PerfSampleSerieJson } from './__json__/perf-sample-serie';

/**
 * Perf Sample
 */
export class PerfSample {

  constructor(private _json: PerfSampleJson) {}

  /**
   * Get timestamp for Perf Sample
   * @returns {number} timestamp
   */
  get timestamp(): number {
    return this._json.timestamp;
  }

  /**
   * Get value for Perf Sample
   * @returns {number} value
   */
  get value(): number {
    return this._json.value;
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
   * @returns {PerfSampleJson} the API Perf Sample object
   */
  get json(): PerfSampleJson {
    return Object.assign({}, this._json);
  }

}
/**
 * Perf Sample Serie
 */
export class PerfSampleSerie {

  constructor(private _json: PerfSampleSerieJson) {}

  /**
   * Get uuid for Perf Sample Serie
   * @returns {string} uuid
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get summary for Perf Sample Serie
   * @returns {string} summary
   */
  get summary(): string {
    return this._json.summary;
  }

  /**
   * Get interval for Perf Sample Serie
   * @returns {number} interval
   */
  get interval(): number {
    return this._json.interval;
  }

  /**
   * Get group for Perf Sample Serie
   * @returns {string} group
   */
  get group(): string {
    return this._json.group;
  }

  /**
   * Get name for Perf Sample Serie
   * @returns {string} name
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get type for Perf Sample Serie
   * @returns {string} type
   */
  get type(): string {
    return this._json.type;
  }

  /**
   * Get unit for Perf Sample Serie
   * @returns {string} unit
   */
  get unit(): string {
    return this._json.unit;
  }

  /**
   * Get perf samples list for Perf Sample Serie
   * @returns {Array<PerfSample>} samples
   */
  get samples(): Array<PerfSample> {
    return this._json.samples.map((sample) => new PerfSample(sample));
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
   * @returns {PerfSampleSerieJson} the API Perf Sample Serie object
   */
  get json(): PerfSampleSerieJson {
    return Object.assign({}, this._json);
  }
}
