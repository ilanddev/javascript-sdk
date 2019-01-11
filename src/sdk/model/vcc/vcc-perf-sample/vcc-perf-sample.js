"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Vcc Perf Sample.
 */
var VccPerfSample = (function () {
    function VccPerfSample(_json) {
        this._json = _json;
    }
    Object.defineProperty(VccPerfSample.prototype, "usedQuota", {
        /**
         * Gets the used quota for the Vcc Perf Sample
         * @returns {number}
         */
        get: function () {
            return this._json.used_quota;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VccPerfSample.prototype, "quota", {
        /**
         * Gets the quota for the Vcc Perf Sample
         * @returns {number}
         */
        get: function () {
            return this._json.quota;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VccPerfSample.prototype, "timeStamp", {
        /**
         * Gets the timestamp for the Vcc Perf Sample
         * @returns {number}
         */
        get: function () {
            return this._json.time;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    VccPerfSample.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(VccPerfSample.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VccPerfSampleJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return VccPerfSample;
}());
exports.VccPerfSample = VccPerfSample;
