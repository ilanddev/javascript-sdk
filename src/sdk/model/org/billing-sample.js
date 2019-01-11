"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next: autogenerated */
var BillingSample = (function () {
    function BillingSample(_json) {
        this._json = _json;
    }
    Object.defineProperty(BillingSample.prototype, "time", {
        /**
         * Get time.
         * @returns {number}
         */
        get: function () {
            return this._json.time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingSample.prototype, "value", {
        /**
         * Get value.
         * @returns {number}
         */
        get: function () {
            return this._json.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingSample.prototype, "additionalFields", {
        /**
         * Get additional fields.
         * @returns {{ [key: BillField]: number }}
         */
        get: function () {
            return this._json.additional_fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingSample.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {BillingSampleJson}
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the string representation of this class.
     * @returns {string}
     */
    BillingSample.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return BillingSample;
}());
exports.BillingSample = BillingSample;
