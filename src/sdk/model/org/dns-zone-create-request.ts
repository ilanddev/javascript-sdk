import { DnsZoneCreateRequestJson } from './__json__/dns-zone-create-request-json';

/**
 * Dns Zone Create Request.
 */
export class DnsZoneCreateRequest {

  private readonly _json: DnsZoneCreateRequestJson;

  constructor(dNSZoneCreateRequest: DnsZoneCreateRequest);
  constructor(dNSZoneCreateRequestJson: DnsZoneCreateRequestJson);
  constructor(name: string);
  constructor(firstParam: string | DnsZoneCreateRequest | DnsZoneCreateRequestJson) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        name: firstParam
      } as DnsZoneCreateRequestJson;
    } else if (firstParam instanceof DnsZoneCreateRequest) {
      // Copy constructor
      this._json = (firstParam as DnsZoneCreateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as DnsZoneCreateRequestJson;
    }
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get the json representation of this class.
   * @returns {DnsZoneCreateRequestJson}
   */
  get json(): DnsZoneCreateRequestJson {
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
