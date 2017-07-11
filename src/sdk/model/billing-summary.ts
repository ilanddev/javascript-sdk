import { BillingSummaryJson } from './json/billing-summary';
import { Bill } from './bill';

/**
 * Billing Summary.
 */
export class BillingSummary {

  constructor(private _json: BillingSummaryJson) {
  }

  /**
   * Gets the current month bill.
   * @returns {Bill} the current month bill
   */
  getCurrentMonth(): Bill {
    return new Bill(this._json.current_month);
  }

  /**
   * Gets the previous month bill.
   * @returns {Bill} the previous month bill
   */
  getPreviousMonth(): Bill {
    return new Bill(this._json.previous_month);
  }

  /**
   * Gets the current hour bill.
   * @returns {Bill} the current hour bill
   */
  getCurrentHour(): Bill {
    return new Bill(this._json.current_hour);
  }

  /**
   * Gets the previous hour bill.
   * @returns {Bill} the previous hour bill
   */
  getPreviousHour(): Bill {
    return new Bill(this._json.previous_hour);
  }

  /**
   * Indicates whether this is a test drive bill.
   * @returns {boolean} value
   */
  isTestDrive(): boolean {
    return this._json.test_drive;
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
   * @returns {SnapshotJson} the JSON representation
   */
  getJson(): BillingSummaryJson {
    return Object.assign({}, this._json);
  }

}
