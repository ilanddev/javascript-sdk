"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check DNS Zone.
 */
var CheckDnsZone = (function () {
    function CheckDnsZone(_json) {
        this._json = _json;
    }
    Object.defineProperty(CheckDnsZone.prototype, "valid", {
        /**
         * Get valid.
         * @returns {boolean}
         */
        get: function () {
            return this._json.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckDnsZone.prototype, "message", {
        /**
         * Get message.
         * @returns {string}
         */
        get: function () {
            return this._json.message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckDnsZone.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {CheckDnsZoneJson}
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
    CheckDnsZone.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return CheckDnsZone;
}());
exports.CheckDnsZone = CheckDnsZone;
