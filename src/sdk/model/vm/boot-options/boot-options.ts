import { BootOptionsJson } from './__json__';

/**
 * VM Boot Options
 */
export class BootOptions {
  private _json: BootOptionsJson;

  constructor(options: BootOptions);
  constructor(optionsJson: BootOptionsJson);
  constructor(bootDelay: number, isEnterBios: boolean);
  constructor(firstParam: number | BootOptions | BootOptionsJson, isEnterBios?: boolean) {
    if (typeof firstParam === 'number') {
      // Parameters constructor
      this._json = {
        boot_delay: firstParam,
        is_enter_bios: isEnterBios
      } as BootOptionsJson;
    } else if (firstParam instanceof BootOptions) {
      // Copy constructor
      this._json = (firstParam as BootOptions).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as BootOptionsJson;
    }
  }

  /**
   * Returns boot delay
   * @returns {number}
   */
  get bootDelay(): number {
    return this._json.boot_delay;
  }

  /**
   * Returns true if "is enter bios" option is set to true
   * @returns {boolean}
   */
  get isEnterBios(): boolean {
    return this._json.is_enter_bios;
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
  get json(): BootOptionsJson {
    return Object.assign({}, this._json);
  }
}
