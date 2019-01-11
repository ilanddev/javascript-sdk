"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * NetworkPerfSample class
 */
var NetworkPerfSample = (function () {
    function NetworkPerfSample(_json) {
        this._json = _json;
    }
    Object.defineProperty(NetworkPerfSample.prototype, "time", {
        /**
         * Get time
         * @returns {Date | null}
         */
        get: function () {
            return this._json.time ? new Date(this._json.time) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkPerfSample.prototype, "value", {
        /**
         * Get value
         * @returns {number | null}
         */
        get: function () {
            return this._json.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkPerfSample.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {NetworkPerfSampleJson}
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
    NetworkPerfSample.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return NetworkPerfSample;
}());
exports.NetworkPerfSample = NetworkPerfSample;
