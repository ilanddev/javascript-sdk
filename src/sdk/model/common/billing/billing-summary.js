"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bill_1 = require("./bill");
/**
 * Billing Summary.
 */
var BillingSummary = (function () {
    function BillingSummary(_json) {
        this._json = _json;
    }
    Object.defineProperty(BillingSummary.prototype, "currentMonth", {
        /**
         * Gets the current month bill.
         * @returns {Bill} the current month bill
         */
        get: function () {
            return new bill_1.Bill(this._json.current_month);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingSummary.prototype, "previousMonth", {
        /**
         * Gets the previous month bill.
         * @returns {Bill} the previous month bill
         */
        get: function () {
            return new bill_1.Bill(this._json.previous_month);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingSummary.prototype, "currentHour", {
        /**
         * Gets the current hour bill.
         * @returns {Bill} the current hour bill
         */
        get: function () {
            return new bill_1.Bill(this._json.current_hour);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingSummary.prototype, "previousHour", {
        /**
         * Gets the previous hour bill.
         * @returns {Bill} the previous hour bill
         */
        get: function () {
            return new bill_1.Bill(this._json.previous_hour);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingSummary.prototype, "testDrive", {
        /**
         * Indicates whether this is a test drive bill.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.test_drive;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    BillingSummary.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(BillingSummary.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {BillingSummaryJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return BillingSummary;
}());
exports.BillingSummary = BillingSummary;
