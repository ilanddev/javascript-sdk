"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bill_1 = require("./bill");
/**
 * Org vDC Bills.
 */
var OrgVdcBills = (function () {
    function OrgVdcBills(_json) {
        this._json = _json;
    }
    Object.defineProperty(OrgVdcBills.prototype, "orgUuid", {
        /**
         * Gets the org UUID.
         * @returns {string}
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrgVdcBills.prototype, "month", {
        /**
         * Gets the month as an integer in the range 1 - 12.
         * @returns {number}
         */
        get: function () {
            return this._json.month;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrgVdcBills.prototype, "year", {
        /**
         * Gets the year.
         * @returns {number}
         */
        get: function () {
            return this._json.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrgVdcBills.prototype, "bills", {
        /**
         * Gets the list of bills for each vDC.
         * @returns {Array<Bill>}
         */
        get: function () {
            return this._json.vdc_bills.map(function (it) { return new bill_1.Bill(it); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    OrgVdcBills.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(OrgVdcBills.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {OrgVdcBillsJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return OrgVdcBills;
}());
exports.OrgVdcBills = OrgVdcBills;
