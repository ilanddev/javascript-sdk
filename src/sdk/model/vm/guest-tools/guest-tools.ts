import { GuestToolsJson } from './__json__';

/**
 * VM Guest Tools
 */
export class GuestTools {
  private _json: GuestToolsJson;

  constructor(guestTools: GuestTools);
  constructor(guestToolsJson: GuestToolsJson);
  constructor(firstParam: GuestTools | GuestToolsJson) {
    if (firstParam instanceof GuestTools) {
      // Copy constructor
      this._json = (firstParam as GuestTools).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as GuestToolsJson;
    }
  }

  /**
   * Returns guest tools status
   * @returns {string}
   */
  get status(): string {
    return this._json.status;
  }

  /**
   * Returns guest tools running status
   * @returns {string}
   */
  get runningStatus(): string {
    return this._json.running_status;
  }

  /**
   * Returns guest tools version
   * @returns {string}
   */
  get version(): string {
    return this._json.version;
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
  get json(): GuestToolsJson {
    return Object.assign({}, this._json);
  }
}
