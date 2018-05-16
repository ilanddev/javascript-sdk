import { PerfSamplesSeriesJson, PerfCounterJson } from './__json__/perf-samples';
import { PerfCounter } from './perf-counter';
import { PerfSample } from './perf-sample';

/**
 * Perf Sample Series class.
 */
export class PerfSamplesSeries {

  constructor(private _json: PerfSamplesSeriesJson) {
  }

  /**
   * Returns the uuid of the entity that belongs to current sample series
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Returns the summary for the current sample series
   * @returns {string}
   */
  get summary(): string {
    return this._json.summary;
  }

  /**
   * Returns the group of the current sample series
   * @returns {string}
   */
  get group(): string {
    return this._json.group;
  }

  /**
   * Returns the name of the current sample series
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Returns the type of the current sample series
   * @returns {string}
   */
  get type(): string {
    return this._json.type;
  }

  /**
   * Returns the counter of the current sample series
   * @returns {PerfCounter}
   */
  get counter(): PerfCounter {
    return new PerfCounter({
      group: this._json.group,
      name: this._json.name,
      type: this._json.type
    } as PerfCounterJson);
  }

  /**
   * Returns the interval of the current sample series
   * @returns {number}
   */
  get interval(): number {
    return this._json.interval;
  }

  /**
   * Returns the unit for samples of the current series
   * @returns {string}
   */
  get unit(): string {
    return this._json.unit;
  }

  /**
   * Returns samples of the current series
   * @returns {Array<PerfSample>}
   */
  get samples(): Array<PerfSample> {
    return this._json.samples.map(s => new PerfSample(s));
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
   * @returns {PerfSampleSerieJson} the JSON representation
   */
  get json(): PerfSamplesSeriesJson {
    return Object.assign({}, this._json);
  }
}
