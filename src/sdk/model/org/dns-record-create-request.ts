import { DnsRecordCreateRequestJson } from './__json__/dns-record-create-request-json';
import { DnsRecordType } from './__json__/dns-record-type';

/**
 * DNS Record Create Request.
 */
export class DnsRecordCreateRequest {

  private readonly _json: DnsRecordCreateRequestJson;

  constructor(dNSRecordCreateRequest: DnsRecordCreateRequest);
  constructor(dNSRecordCreateRequestJson: DnsRecordCreateRequestJson);
  constructor(zoneId: number, host: string, type: DnsRecordType, value: string, ipAddress: string, ttl: number,
              description: string, priority: number);
  constructor(firstParam: number | DnsRecordCreateRequest | DnsRecordCreateRequestJson, host?: string, type?:
      DnsRecordType, value?: string, ipAddress?: string, ttl?: number, description?: string, priority?: number) {
    if (typeof firstParam === 'number') {
      // Parameters constructor
      this._json = {
        zone_id: firstParam,
        host: host,
        type: type,
        value: value,
        ip_address: ipAddress,
        ttl: ttl,
        description: description,
        priority: priority
      } as DnsRecordCreateRequestJson;
    } else if (firstParam instanceof DnsRecordCreateRequest) {
      // Copy constructor
      this._json = (firstParam as DnsRecordCreateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as DnsRecordCreateRequestJson;
    }
  }

  /**
   * Get zone id.
   * @returns {number}
   */
  get zoneId(): number {
    return this._json.zone_id;
  }

  /**
   * Get host.
   * @returns {string}
   */
  get host(): string {
    return this._json.host;
  }

  /**
   * Get type.
   * @returns {DnsRecordType}
   */
  get type(): DnsRecordType {
    return this._json.type;
  }

  /**
   * Get value.
   * @returns {string}
   */
  get value(): string {
    return this._json.value;
  }

  /**
   * Get ip address.
   * @returns {string}
   */
  get ipAddress(): string {
    return this._json.ip_address;
  }

  /**
   * Get ttl.
   * @returns {number}
   */
  get ttl(): number {
    return this._json.ttl;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get priority.
   * @returns {number}
   */
  get priority(): number {
    return this._json.priority;
  }

  /**
   * Get the json representation of this class.
   * @returns {DnsRecordCreateRequestJson}
   */
  get json(): DnsRecordCreateRequestJson {
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
