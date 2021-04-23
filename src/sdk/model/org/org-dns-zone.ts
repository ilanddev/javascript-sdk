import { OrgDnsZoneJson } from './__json__/org-dns-zone-json';

/**
 * Org DNS Zone. Provides link between an Org and a DNS Zone.
 */
export class OrgDnsZone {

  constructor(private _json: OrgDnsZoneJson) {
  }

  /**
   * Get the org uuid.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get the DNS zone ID.
   * @returns {number}
   */
  get zoneId(): number {
    return this._json.zone_id;
  }

  /**
   * Get whether the DNS zone has been deleted.
   * @returns {boolean}
   */
  get deleted(): boolean {
    return this._json.deleted;
  }

  /**
   * Get the DNS zone name.
   * @returns {string}
   */
  get zoneName(): string {
    return this._json.zone_name;
  }

  /**
   * Get the json representation of this class.
   * @returns {OrgDnsZoneJson}
   */
  get json(): OrgDnsZoneJson {
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
