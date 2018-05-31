import { OrgVdcBillsJson } from './__json__/org-vdc-bills-json';
import { Bill } from './bill';

/**
 * Org vDC Bills.
 */
export class OrgVdcBills {

  constructor(private _json: OrgVdcBillsJson) {
  }

  /**
   * Gets the org UUID.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Gets the month as an integer in the range 1 - 12.
   * @returns {number}
   */
  get month(): number {
    return this._json.month;
  }

  /**
   * Gets the year.
   * @returns {number}
   */
  get year(): number {
    return this._json.year;
  }

  /**
   * Gets the list of bills for each vDC.
   * @returns {Array<Bill>}
   */
  get bills(): Array<Bill> {
    return this._json.vdc_bills.map(it => new Bill(it));
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
   * @returns {OrgVdcBillsJson} the JSON representation
   */
  get json(): OrgVdcBillsJson {
    return Object.assign({}, this._json);
  }

}
