import { DnsZoneJson } from './__json__/dns-zone-json';
import { DNSRecordType } from './__json__/dns-zone-type';

/**
 * DNS Zone.
 */
export class DnsZone {

  constructor(private _json: DnsZoneJson) {
  }

  /**
   * Get id.
   * @returns {number}
   */
  get id(): number {
    return this._json.id;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get resource id.
   * @returns {number}
   */
  get resourceId(): number {
    return this._json.resource_id;
  }

  /**
   * Get serial.
   * @returns {number}
   */
  get serial(): number {
    return this._json.serial;
  }

  /**
   * Get refresh.
   * @returns {number}
   */
  get refresh(): number {
    return this._json.refresh;
  }

  /**
   * Get retry.
   * @returns {number}
   */
  get retry(): number {
    return this._json.retry;
  }

  /**
   * Get expire.
   * @returns {number}
   */
  get expire(): number {
    return this._json.expire;
  }

  /**
   * Get minimum.
   * @returns {number}
   */
  get minimum(): number {
    return this._json.minimum;
  }

  /**
   * Get soa.
   * @returns {string}
   */
  get soa(): string {
    return this._json.soa;
  }

  /**
   * Get tags.
   * @returns {string}
   */
  get tags(): string {
    return this._json.tags;
  }

  /**
   * Get ttl.
   * @returns {string}
   */
  get ttl(): string {
    return this._json.ttl;
  }

  /**
   * Get enable dns sec.
   * @returns {boolean}
   */
  get enableDnsSec(): boolean {
    return this._json.enable_dns_sec;
  }

  /**
   * Get auto check.
   * @returns {boolean}
   */
  get autoCheck(): boolean {
    return this._json.auto_check;
  }

  /**
   * Get record id.
   * @returns {number}
   */
  get recordId(): number {
    return this._json.record_id;
  }

  /**
   * Get record host.
   * @returns {string}
   */
  get recordHost(): string {
    return this._json.record_host;
  }

  /**
   * Get record type.
   * @returns {DNSRecordType}
   */
  get recordType(): DNSRecordType {
    return this._json.record_type;
  }

  /**
   * Get record value.
   * @returns {string}
   */
  get recordValue(): string {
    return this._json.record_value;
  }

  /**
   * Get record description.
   * @returns {string}
   */
  get recordDescription(): string {
    return this._json.record_description;
  }

  /**
   * Get record ttl.
   * @returns {string}
   */
  get recordTtl(): string {
    return this._json.record_ttl;
  }

  /**
   * Get record ordering.
   * @returns {number}
   */
  get recordOrdering(): number {
    return this._json.record_ordering;
  }

  /**
   * Get record errors.
   * @returns {string}
   */
  get recordErrors(): string {
    return this._json.record_errors;
  }

  /**
   * Get user can create.
   * @returns {boolean}
   */
  get userCanCreate(): boolean {
    return this._json.user_can_create;
  }

  /**
   * Get user can delete.
   * @returns {boolean}
   */
  get userCanDelete(): boolean {
    return this._json.user_can_delete;
  }

  /**
   * Get user can update.
   * @returns {boolean}
   */
  get userCanUpdate(): boolean {
    return this._json.user_can_update;
  }

  /**
   * Get unpaged rows.
   * @returns {number}
   */
  get unpagedRows(): number {
    return this._json.unpaged_rows;
  }

  /**
   * Get the json representation of this class.
   * @returns {DnsZoneJson}
   */
  get json(): DnsZoneJson {
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
