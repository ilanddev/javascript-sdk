import { VmSummaryJson } from './__json__/vm-summary-json';

/**
 * VM Summary
 */
export class VmSummary {
  private _json: VmSummaryJson;

  constructor(options: VmSummary);
  constructor(optionsJson: VmSummaryJson);
  constructor(firstParam: VmSummary | VmSummaryJson) {
    if (firstParam instanceof VmSummary) {
      // Copy constructor
      this._json = (firstParam as VmSummary).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as VmSummaryJson;
    }
  }

  /**
   * Returns reserved CPU.
   * @returns {number}
   */
  get reservedCpu(): number {
    return this._json.reserved_cpu;
  }

  /**
   * Returns reserved memory.
   * @returns {number}
   */
  get reservedMemory(): number {
    return this._json.reserved_mem;
  }

  /**
   * Returns consumed CPU.
   * @returns {number}
   */
  get consumedCpu(): number {
    return this._json.consumed_cpu;
  }

  /**
   * Returns consumed memory.
   * @returns {number}
   */
  get consumedMemory(): number {
    return this._json.consumed_mem;
  }

  /**
   * Returns consumed disk.
   * @returns {number}
   */
  get consumedDisk(): number {
    return this._json.consumed_disk;
  }

  /**
   * Returns provisioned disk.
   * @returns {number}
   */
  get provisionedDisk(): number {
    return this._json.provisioned_disk;
  }

  /**
   * Returns configured disk.
   * @returns {number}
   */
  get configuredDisk(): number {
    return this._json.configured_disk;
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
   * @returns {BootOptionsJson} the JSON representation
   */
  get json(): VmSummaryJson {
    return Object.assign({}, this._json);
  }
}
