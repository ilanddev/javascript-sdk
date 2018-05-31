import { CheckDnsZoneJson } from './__json__/check-dns-zone-json';

/**
 * Check DNS Zone.
 */
export class CheckDnsZone {

  constructor(private _json: CheckDnsZoneJson) {
  }

  /**
   * Get valid.
   * @returns {boolean}
   */
  get valid(): boolean {
    return this._json.valid;
  }

  /**
   * Get message.
   * @returns {string}
   */
  get message(): string {
    return this._json.message;
  }

  /**
   * Get the json representation of this class.
   * @returns {CheckDnsZoneJson}
   */
  get json(): CheckDnsZoneJson {
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
