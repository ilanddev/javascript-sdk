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
   * @returns {string | null} null if no description is set.
   */
  get description(): string | null {
    return this._json.description || null;
  }

  /**
   * Gets the TTL setting of the record.
   * @returns {number | null} null if no TTL is set.
   */
  get ttl(): number | null {
    return this._json.ttl ?? null;
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
   * @returns {string | null} null if no IP address is set and/or not applicable.
   */
  get ip(): string | null {
    return this._json.ip || null;
  }

  /**
   * Gets the last modified date.
   * @returns {Date | null} null if not applicable.
   */
  get lastModified(): Date | null {
    return this._json.last_modified ? new Date(this._json.last_modified) : null;
  }

  /**
   * Gets the record value.
   * @returns {string}
   */
  get value(): string {
    return this._json.value;
  }

  /**
   * Gets the record type.
   * @returns {DnsRecordType}
   */
  get type(): DnsRecordType {
    return this._json.type;
  }

  /**
   * Gets the record priority. Applicable for MX record type.
   * @returns {number | null} null if not applicable.
   */
  get priority(): number | null {
    return this._json.priority ?? null;
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
