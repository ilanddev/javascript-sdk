"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var perf_counter_1 = require("./perf-counter");
/**
 * Perf Sample Request class.
 */
var PerfSamplesRequest = (function () {
    function PerfSamplesRequest(firstParam, start, end, interval, limit) {
        if (firstParam instanceof perf_counter_1.PerfCounter) {
            // Parameters constructor
            this._json = {
                counter: firstParam.json,
                start: start,
                end: end,
                interval: interval,
                limit: limit
            };
        }
        else if (firstParam instanceof PerfSamplesRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(PerfSamplesRequest.prototype, "counter", {
        /**
         * Returns the perf counter for current request
         * @returns {PerfCounter}
         */
        get: function () {
            return new perf_counter_1.PerfCounter(this._json.counter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesRequest.prototype, "start", {
        /**
         * Returns the start timestamp for current request
         * @returns {number}
         */
        get: function () {
            return this._json.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesRequest.prototype, "startDate", {
        /**
         * Returns the start date for current request
         * @returns {Date}
         */
        get: function () {
            return new Date(this._json.start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesRequest.prototype, "end", {
        /**
         * Returns the end timestamp for current request
         * @returns {number}
         */
        get: function () {
            return this._json.end;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesRequest.prototype, "endDate", {
        /**
         * Returns the end date for current request
         * @returns {Date}
         */
        get: function () {
            return new Date(this._json.end);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesRequest.prototype, "interval", {
        /**
         * Returns the interval for current request
         * @returns {number}
         */
        get: function () {
            return this._json.interval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesRequest.prototype, "limit", {
        /**
         * Returns the limit for current request
         * @returns {number}
         */
        get: function () {
            return this._json.limit;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    PerfSamplesRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(PerfSamplesRequest.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {PerfSamplesRequestJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return PerfSamplesRequest;
}());
exports.PerfSamplesRequest = PerfSamplesRequest;
