import { O365Organization } from '../o365/o365-organization';
import { O365OrganizationSetJson } from './__json__/o365-organization-set-json';

/**
 * O365 Organization Set.
 */
/* istanbul ignore next: autogenerated */
export class O365OrganizationSet {

  constructor(private _json: O365OrganizationSetJson) {
  }

  /**
   * Get O365 Organizations.
   * @returns {Array<O365Organization>}
   */
  get o365Organizations(): Array<O365Organization> {
    return this._json.data.map((it) => new O365Organization(it));
  }

  /**
   * Get the total unique reserved O365 licenses for the O365 Organizations scoped to a location.
   * @returns {number}
   */
  get totalReservedLicenses(): number {
    return this._json.total_reserved_licenses;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365OrganizationSetJson}
   */
  get json(): O365OrganizationSetJson {
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
