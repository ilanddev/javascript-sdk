import { BillingLegacyResponseJson } from './__json__/billing-legacy-response-json';

/**
 * Billing legacy response
 */
export class BillingLegacyResponse {

  constructor(private _json: BillingLegacyResponseJson) {
  }

  /**
   * Whether or not there is legacy billing type.
   * @returns {boolean} whether or not there is legacy billing type
   */
  get hasLegacyBilling(): boolean {
    return this._json.has_legacy_billing;
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
   * @returns {BillingLegacyResponseJson} the JSON representation
   */
  get json(): BillingLegacyResponseJson {
    return Object.assign({}, this._json);
  }
}
