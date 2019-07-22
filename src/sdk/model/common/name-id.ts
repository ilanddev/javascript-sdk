import { NameIdJson } from './__json__/name-id-json';

/**
 * NameId Class
 */
export class NameId {
  constructor(private _json: NameIdJson) {}

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get ID.
   * @returns {string}
   */
  get id(): string {
    return this._json.id;
  }

  /**
   * Get the json representation of this class.
   * @returns {NameIdJson}
   */
  get json(): NameIdJson {
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
