import { PerfSampleJson } from './__json__/perf-samples';

/**
 * Perf Sample class.
 */
export class PerfSample {

  private _json: PerfSampleJson;

  constructor(perfSample: PerfSample);
  constructor(perfSampleJson: PerfSampleJson);
  constructor(time: number, value: number);
  constructor(firstParam: number | PerfSample | PerfSampleJson, value?: number) {
    if (typeof firstParam === 'number') {
      // Parameters constructor
      this._json = {
        time: firstParam,
        value: value
      } as PerfSampleJson;
    } else if (firstParam instanceof PerfSample) {
      // Copy constructor
      this._json = (firstParam as PerfSample).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as PerfSampleJson;
    }
  }

  /**
   * Returns the date of the current sample
   * @returns {Date}
   */
  get date(): Date {
    return new Date(this._json.time);
  }

  /**
   * Returns the timestamp of the current sample
   * @returns {number}
   */
  get timestamp(): number {
    return this._json.time;
  }

  /**
   * Returns the value of the current sample
   * @returns {number}
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
   * @returns {PerfSampleJson} the JSON representation
   */
  get json(): PerfSampleJson {
    return Object.assign({}, this._json);
  }
}
