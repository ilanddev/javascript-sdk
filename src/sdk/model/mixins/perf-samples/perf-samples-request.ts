import { PerfSamplesRequestJson } from './_json_/perf-samples-request';
import { PerfCounter } from './perf-counter';

/**
 * Perf Sample Request class.
 */
export class PerfSamplesRequest {

  private _json: PerfSamplesRequestJson;

  constructor(perfSampleRequest: PerfSamplesRequest);
  constructor(perfSampleRequestJson: PerfSamplesRequestJson);
  constructor(counter: PerfCounter, start: number, end: number, interval: number, limit: number);
  constructor(firstParam: PerfCounter | PerfSamplesRequest | PerfSamplesRequestJson, start?: number, end?: number,
              interval?: number, limit?: number) {
    if (firstParam instanceof PerfCounter) {
      // Parameters constructor
      this._json = {
        counter: firstParam.json,
        start: start,
        end: end,
        interval: interval,
        limit: limit
      } as PerfSamplesRequestJson;
    } else if (firstParam instanceof PerfSamplesRequest) {
      // Copy constructor
      this._json = (firstParam as PerfSamplesRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as PerfSamplesRequestJson;
    }
  }

  /**
   * Returns the perf counter for current request
   * @returns {PerfCounter}
   */
  get counter(): PerfCounter {
    return new PerfCounter(this._json.counter);
  }

  /**
   * Returns the start timestamp for current request
   * @returns {number}
   */
  get start(): number {
    return this._json.start;
  }

  /**
   * Returns the start date for current request
   * @returns {Date}
   */
  get startDate(): Date {
    return new Date(this._json.start);
  }

  /**
   * Returns the end timestamp for current request
   * @returns {number}
   */
  get end(): number {
    return this._json.end;
  }

  /**
   * Returns the end date for current request
   * @returns {Date}
   */
  get endDate(): Date {
    return new Date(this._json.end);
  }

  /**
   * Returns the interval for current request
   * @returns {number}
   */
  get interval(): number {
    return this._json.interval;
  }

  /**
   * Returns the limit for current request
   * @returns {number}
   */
  get limit(): number {
    return this._json.limit;
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
   * @returns {PerfSamplesRequestJson} the JSON representation
   */
  get json(): PerfSamplesRequestJson {
    return Object.assign({}, this._json);
  }

}
