"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dns Zone Create Request.
 */
var DnsZoneCreateRequest = (function () {
    function DnsZoneCreateRequest(firstParam) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                name: firstParam
            };
        }
        else if (firstParam instanceof DnsZoneCreateRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(DnsZoneCreateRequest.prototype, "name", {
        /**
         * Get name.
         * @returns {string}
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZoneCreateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {DnsZoneCreateRequestJson}
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
    DnsZoneCreateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return DnsZoneCreateRequest;
}());
exports.DnsZoneCreateRequest = DnsZoneCreateRequest;
