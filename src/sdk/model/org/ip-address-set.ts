import { IpAddressSetJson } from './__json__/ip-address-set-json';

/**
 * IP Address Set.
 */
export class IpAddressSet {

  constructor(private _json: IpAddressSetJson) {
  }

  /**
   * Get ips.
   * @returns {Array<string>}
   */
  get ips(): Array<string> {
    return this._json.ips;
  }

  /**
   * Get the json representation of this class.
   * @returns {IpAddressSetJson}
   */
  get json(): IpAddressSetJson {
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
