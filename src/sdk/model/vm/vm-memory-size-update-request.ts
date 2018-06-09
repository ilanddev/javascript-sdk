import { VmMemorySizeUpdateRequestJson } from './__json__';

export class VmMemorySizeUpdateRequest {

  private readonly _json: VmMemorySizeUpdateRequestJson;

  constructor(vmMemorySizeUpdateRequest: VmMemorySizeUpdateRequest);
  constructor(vmMemorySizeUpdateRequestJson: VmMemorySizeUpdateRequestJson);
  constructor(memorySize: number);
  constructor(firstParam: number | VmMemorySizeUpdateRequest | VmMemorySizeUpdateRequestJson) {
    if (typeof firstParam === 'number') {
      // Parameters constructor
      this._json = {
        memory_size: firstParam
      } as VmMemorySizeUpdateRequestJson;
    } else if (firstParam instanceof VmMemorySizeUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as VmMemorySizeUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as VmMemorySizeUpdateRequestJson;
    }
  }

  /**
   * Get memory size.
   * @returns {string}
   */
  get memorySize(): number {
    return Number(this._json.memory_size);
  }

  /**
   * Get the json representation of this class.
   * @returns {VmMemorySizeUpdateRequestJson}
   */
  get json(): VmMemorySizeUpdateRequestJson {
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
