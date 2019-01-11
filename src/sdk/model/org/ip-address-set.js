"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IP Address Set.
 */
var IpAddressSet = (function () {
    function IpAddressSet(_json) {
        this._json = _json;
    }
    Object.defineProperty(IpAddressSet.prototype, "ips", {
        /**
         * Get ips.
         * @returns {Array<string>}
         */
        get: function () {
            return this._json.ips;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpAddressSet.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {IpAddressSetJson}
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
    IpAddressSet.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return IpAddressSet;
}());
exports.IpAddressSet = IpAddressSet;
