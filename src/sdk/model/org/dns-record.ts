import { DnsRecordJson } from './__json__/dns-record-json';
import { DnsRecordType } from './__json__/dns-record-type';

/**
 * DNS Record.
 */
export class DnsRecord {

  constructor(private _json: DnsRecordJson) {
  }

  /**
   * Gets the ID of the DNS record.
   * @returns {number}
   */
  get id(): number {
    return this._json.id;
  }

  /**
   * Gets the zone ID of the record.
   * @returns {number}
   */
  get zoneId(): number {
    return this._json.zone_id;
  }

  /**
   * Gets the name of the zone that the record is associated with.
   * @returns {string}
   */
  get zoneName(): string {
    return this._json.zone_name;
  }

  /**
   * Gets the host string.
   * @returns {string}
   */
  get host(): string {
    return this._json.host;
  }

  /**
   * Gets the record description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Gets the TTL setting of the record or undefined if no TTL is set.
   * @returns {number | undefined}
   */
  get ttl(): number | undefined {
    return this._json.ttl;
  }

  /**
   * Gets the ordering string.
   * @returns {string}
   */
  get ordering(): string {
    return this._json.ordering;
  }

  /**
   * Gets the record IP address.
   * @returns {string}
   */
  get ip(): string {
    return this._json.ip;
  }

  /**
   * Gets the last modified date.
   * @returns {Date}
   */
  get lastModified(): Date {
    return new Date(this._json.last_modified);
  }

  /**
   * Gets the record value.
   * @returns {string}
   */
  get value(): string {
    return this._json.value;
  }

  /**
   * Gets the record's type.
   * @returns {DnsRecordType}
   */
  get recordType(): DnsRecordType {
    return this._json.record_type;
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
   * @returns {DnsRecordJson} the JSON representation
   */
  get json(): DnsRecordJson {
    return Object.assign({}, this._json);
  }

}
