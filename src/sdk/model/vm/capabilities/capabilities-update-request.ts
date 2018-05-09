import { VmCapabilityUpdateRequestJson } from './__json__';

/**
 * VM Capabilities update request.
 */
export class VmCapabilityUpdateRequest {

  constructor(private _json: VmCapabilityUpdateRequestJson) {
  }

  /**
   * Get cpu hot add enabled.
   * @returns {boolean}
   */
  get cpuHotAddEnabled(): boolean {
    return this._json.cpu_hot_add_enabled;
  }

  /**
   * Set cpu hot add enabled.
   * @param {boolean} enabled
   */
  set cpuHotAddEnabled(enabled: boolean) {
    this._json.cpu_hot_add_enabled = enabled;
  }

  /**
   * Get memory hot add enabled.
   * @returns {boolean}
   */
  get memoryHotAddEnabled(): boolean {
    return this._json.memory_hot_add_enabled;
  }

  /**
   * Set memory hot add enabled.
   * @param {boolean} enabled
   */
  set memoryHotAddEnabled(enabled: boolean) {
    this._json.memory_hot_add_enabled = enabled;
  }

  /**
   * Get the json representation of this class.
   * @returns {VmCapabilityUpdateRequestJson}
   */
  get json(): VmCapabilityUpdateRequestJson {
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
