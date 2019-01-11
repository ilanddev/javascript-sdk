"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Bill Line Item.
 */
var BillLineItem = (function () {
    function BillLineItem(_json) {
        this._json = _json;
    }
    Object.defineProperty(BillLineItem.prototype, "name", {
        /**
         * Gets the line item name.
         * @returns {string} name
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillLineItem.prototype, "costPerUnit", {
        /**
         * Gets the cost per unit.
         * @returns {number} cost per unit
         */
        get: function () {
            return this._json.cost_per_unit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillLineItem.prototype, "quantity", {
        /**
         * Gets the quantity.
         * @returns {number} quantity
         */
        get: function () {
            return this._json.quantity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillLineItem.prototype, "productId", {
        /**
         * Gets the product ID.
         * @returns {string} the product ID
         */
        get: function () {
            return this._json.product_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    BillLineItem.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(BillLineItem.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {BillLineItemJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return BillLineItem;
}());
exports.BillLineItem = BillLineItem;
