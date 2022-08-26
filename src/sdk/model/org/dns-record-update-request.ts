import { DnsRecordType } from './__json__/dns-record-type';
import { DnsRecordUpdateRequestJson } from './__json__/dns-record-update-request-json';

/**
 * Dns Record Update Request.
 */
export class DnsRecordUpdateRequest {

  private readonly _json: DnsRecordUpdateRequestJson;

  constructor(dNSRecordUpdateRequest: DnsRecordUpdateRequest);
  constructor(dNSRecordUpdateRequestJson: DnsRecordUpdateRequestJson);
  constructor(id: number, zoneId: number, host: string, type: DnsRecordType, value: string, ipAddress: string,
              ttl: number, description: string, priority: number);
  constructor(firstParam: number | DnsRecordUpdateRequest | DnsRecordUpdateRequestJson, zoneId?: number, host?: string,
              type?: DnsRecordType, value?: string, ipAddress?: string, ttl?: number, description?: string,
              priority?: number) {
    if (typeof firstParam === 'number') {
      // Parameters constructor
      this._json = {
        id: firstParam,
        zone_id: zoneId,
        host: host,
        type: type,
        value: value,
        ip: ipAddress,
        ttl: ttl,
        description: description,
        priority: priority
      } as DnsRecordUpdateRequestJson;
    } else if (firstParam instanceof DnsRecordUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as DnsRecordUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as DnsRecordUpdateRequestJson;
    }
  }

  /**
   * Get id.
   * @returns {number}
   */
  get id(): number {
    return this._json.id;
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
    return this._json.ip;
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
   * @returns {DnsRecordUpdateRequestJson}
   */
  get json(): DnsRecordUpdateRequestJson {
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
