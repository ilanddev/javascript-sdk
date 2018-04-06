import { PerfCounterJson } from './_json_/perf-samples';

export class PerfCounter {

  private _json: PerfCounterJson;

  constructor(perfCounter: PerfCounter);
  constructor(perfCounterJson: PerfCounterJson);
  constructor(group: string, name: string, type: string);
  constructor(firstParam: string | PerfCounter | PerfCounterJson, name?: string, type?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        group: firstParam,
        name: name,
        type: type
      } as PerfCounterJson;
    } else if (firstParam instanceof PerfCounter) {
      // Copy constructor
      this._json = (firstParam as PerfCounter).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as PerfCounterJson;
    }
  }

  /**
   * Returns group of current counter
   * @returns {string}
   */
  get group(): string {
    return this._json.group;
  }

  /**
   * Returns name of current counter
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Returns type of current counter
   * @returns {string}
   */
  get type(): string {
    return this._json.type;
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
   * @returns {PerfCounterJson} the JSON representation
   */
  get json(): PerfCounterJson {
    return Object.assign({}, this._json);
  }
}
