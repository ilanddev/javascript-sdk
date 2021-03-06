import { StorageProfileBill } from './vdc-storage-profile-bill';
import { VdcStorageProfileSummaryJson } from './__json__/vdc-storage-profile-summary-json';

/**
 * vDC Storage Profile Summary.
 */
/* istanbul ignore next: autogenerated */
export class VdcStorageProfileSummary {

  constructor(private _json: VdcStorageProfileSummaryJson) {
  }

  /**
   * Get vdc uuid.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get year.
   * @returns {number}
   */
  get year(): number {
    return this._json.year;
  }

  /**
   * Get month.
   * @returns {number}
   */
  get month(): number {
    return this._json.month;
  }

  /**
   * Get time.
   * @returns {number}
   */
  get time(): number {
    return this._json.time;
  }

  /**
   * Get storage profile bills.
   * @returns {Array<StorageProfileBill>}
   */
  get storageProfileBills(): Array<StorageProfileBill> {
    return this._json.storage_profile_bills.map(it => new StorageProfileBill(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {VdcStorageProfileSummaryJson}
   */
  get json(): VdcStorageProfileSummaryJson {
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
