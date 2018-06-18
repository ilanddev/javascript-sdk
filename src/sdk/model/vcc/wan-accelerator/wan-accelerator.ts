import { WanAcceleratorJson } from './__json__/wan-accelerator-json';

/**
 * Wan Accelerator.
 */
export class WanAccelerator {

  constructor(private _json: WanAcceleratorJson) {
  }

  /**
   * Gets the name of the Wan Accelerator
   * @returns {string} name
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Gets the description of the Wan Accelerator
   * @returns {string} description
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Gets the is ouf of date of the Wan Accelerator
   * @returns {boolean} is out of date
   */
  get outOfDate(): boolean {
    return this._json.out_of_date;
  }

  /**
   * Gets the version of the Wan Accelerator
   * @returns {string} version
   */
  get version(): string {
    return this._json.version;
  }

  /**
   * Gets the capacity of the Wan Accelerator
   * @returns {number} capacity
   */
  get capacity(): number {
    return this._json.capacity;
  }

  /**
   * Gets the traffic port of the Wan Accelerator
   * @returns {number} port
   */
  get trafficPort(): number {
    return this._json.traffic_port;
  }

  /**
   * Gets the connection count of the Wan Accelerator
   * @returns {number} count
   */
  get connectionCount(): number {
    return this._json.connection_count;
  }

  /**
   * Gets the cache path of the Wan Accelerator
   * @returns {string} cache path
   */
  get cachePath(): string {
    return this._json.cache_path;
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
   * @returns {WanAcceleratorJson} the API __json__ object
   */
  get json(): WanAcceleratorJson {
    return Object.assign({}, this._json);
  }
}
