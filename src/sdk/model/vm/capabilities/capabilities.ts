import { CapabilitiesJson } from './__json__';

/**
 * VM Capabilities
 */
export class Capabilities {
  protected _json: CapabilitiesJson;

  constructor(options: Capabilities);
  constructor(optionsJson: CapabilitiesJson);
  constructor(cpuHotAddEnabled: boolean, memoryHotAddEnabled: boolean);
  constructor(firstParam: boolean | Capabilities | CapabilitiesJson, memoryHotAddEnabled?: boolean) {
    if (typeof firstParam === 'boolean') {
      // Parameters constructor
      this._json = {
        cpu_hot_add_enabled: firstParam,
        memory_hot_add_enabled: memoryHotAddEnabled
      } as CapabilitiesJson;
    } else if (firstParam instanceof Capabilities) {
      // Copy constructor
      this._json = (firstParam as Capabilities).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as CapabilitiesJson;
    }
  }

  /**
   * Returns true if CPU hot add is enabled
   * @returns {boolean}
   */
  get cpuHotAddEnabled(): boolean {
    return this._json.cpu_hot_add_enabled;
  }

  /**
   * Returns true if Memory hot add is enabled
   * @returns {boolean}
   */
  get memoryHotAddEnabled(): boolean {
    return this._json.memory_hot_add_enabled;
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
  get json(): CapabilitiesJson {
    return Object.assign({}, this._json);
  }
}
