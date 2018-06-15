import { BillingSampleSerieJson } from './__json__/billing-sample-serie-json';
import { BillingSample } from './billing-sample';

/* istanbul ignore next: autogenerated */
export class BillingSampleSerie {

  constructor(private _json: BillingSampleSerieJson) {
  }

  /**
   * Get entity uuid.
   * @returns {string}
   */
  get entityUuid(): string {
    return this._json.entity_uuid;
  }

  /**
   * Get entity name.
   * @returns {string}
   */
  get entityName(): string {
    return this._json.entity_name;
  }

  /**
   * Get interval.
   * @returns {number}
   */
  get interval(): number {
    return this._json.interval;
  }

  /**
   * Get summary.
   * @returns {string}
   */
  get summary(): string {
    return this._json.summary;
  }

  /**
   * Get samples.
   * @returns {Array<BillingSample>}
   */
  get samples(): Array<BillingSample> {
    return this._json.samples.map((sample) => { return new BillingSample(sample); });
  }

  /**
   * Get currency code.
   * @returns {string}
   */
  get currencyCode(): string {
    return this._json.currency_code;
  }

  /**
   * Get the json representation of this class.
   * @returns {BillingSampleSerieJson}
   */
  get json(): BillingSampleSerieJson {
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
