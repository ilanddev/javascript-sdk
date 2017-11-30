import { BillLineItemJson } from './json/bill';

/**
 * Bill Line Item.
 */
export class BillLineItem {

  constructor(private _json: BillLineItemJson) {
  }

  /**
   * Gets the line item name.
   * @returns {string} name
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Gets the price.
   * @returns {number} price
   */
  get price(): number {
    return this._json.price;
  }

  /**
   * Gets the quantity.
   * @returns {number} quantity
   */
  get quantity(): number {
    return this._json.quantity;
  }

  /**
   * Gets the product ID.
   * @returns {string} the product ID
   */
  get productId(): string {
    return this._json.product_id;
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
   * @returns {BillLineItemJson} the JSON representation
   */
  get json(): BillLineItemJson {
    return Object.assign({}, this._json);
  }

}
