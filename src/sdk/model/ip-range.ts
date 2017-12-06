import { IpRangeJson } from './json/ip-range';

/**
 * IP Range.
 */
export class IpRange {

  constructor(private _json: IpRangeJson) {
  }

  /**
   * Gets the IP address at the start of the range.
   * @returns {string} start IP
   */
  get startAddress(): string {
    return this._json.start;
  }

  /**
   * Gets the IP address at the end of the range.
   * @returns {string} end IP
   */
  get endAddress(): string {
    return this._json.end;
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
   * @returns {IpRangeJson} the JSON representation
   */
  get json(): IpRangeJson {
    return Object.assign({}, this._json);
  }

}
