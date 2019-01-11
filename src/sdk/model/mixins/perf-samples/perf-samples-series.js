"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var perf_counter_1 = require("./perf-counter");
var perf_sample_1 = require("./perf-sample");
/**
 * Perf Sample Series class.
 */
var PerfSamplesSeries = (function () {
    function PerfSamplesSeries(_json) {
        this._json = _json;
    }
    Object.defineProperty(PerfSamplesSeries.prototype, "uuid", {
        /**
         * Returns the uuid of the entity that belongs to current sample series
         * @returns {string}
         */
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesSeries.prototype, "summary", {
        /**
         * Returns the summary for the current sample series
         * @returns {string}
         */
        get: function () {
            return this._json.summary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesSeries.prototype, "group", {
        /**
         * Returns the group of the current sample series
         * @returns {string}
         */
        get: function () {
            return this._json.group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesSeries.prototype, "name", {
        /**
         * Returns the name of the current sample series
         * @returns {string}
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesSeries.prototype, "type", {
        /**
         * Returns the type of the current sample series
         * @returns {string}
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesSeries.prototype, "counter", {
        /**
         * Returns the counter of the current sample series
         * @returns {PerfCounter}
         */
        get: function () {
            return new perf_counter_1.PerfCounter({
                group: this._json.group,
                name: this._json.name,
                type: this._json.type
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesSeries.prototype, "interval", {
        /**
         * Returns the interval of the current sample series
         * @returns {number}
         */
        get: function () {
            return this._json.interval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesSeries.prototype, "unit", {
        /**
         * Returns the unit for samples of the current series
         * @returns {string}
         */
        get: function () {
            return this._json.unit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfSamplesSeries.prototype, "samples", {
        /**
         * Returns samples of the current series
         * @returns {Array<PerfSample>}
         */
        get: function () {
            return this._json.samples.map(function (s) { return new perf_sample_1.PerfSample(s); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    PerfSamplesSeries.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(PerfSamplesSeries.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {PerfSampleSerieJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return PerfSamplesSeries;
}());
exports.PerfSamplesSeries = PerfSamplesSeries;
