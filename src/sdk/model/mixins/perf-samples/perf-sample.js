"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Perf Sample class.
 */
var PerfSample = (function () {
    function PerfSample(firstParam, value) {
        if (typeof firstParam === 'number') {
            // Parameters constructor
            this._json = {
                time: firstParam,
                value: value
            };
        }
        else if (firstParam instanceof PerfSample) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(PerfSample.prototype, "date", {
        /**
         * Returns the date of the current sample
         * @returns {Date}
         */
        get: function () {
            return new Date(this._json.time);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSample.prototype, "timestamp", {
        /**
         * Returns the timestamp of the current sample
         * @returns {number}
         */
        get: function () {
            return this._json.time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSample.prototype, "value", {
        /**
         * Returns the value of the current sample
         * @returns {number}
         */
        get: function () {
            return this._json.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    PerfSample.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(PerfSample.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {PerfSampleJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return PerfSample;
}());
exports.PerfSample = PerfSample;
