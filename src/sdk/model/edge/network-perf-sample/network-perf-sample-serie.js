"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var network_perf_sample_1 = require("./network-perf-sample");
/**
 * NetworkPerfSampleSerie class
 */
var NetworkPerfSampleSerie = (function () {
    function NetworkPerfSampleSerie(_json) {
        this._json = _json;
    }
    Object.defineProperty(NetworkPerfSampleSerie.prototype, "summary", {
        /**
         * Get summary
         * @returns {string | null}
         */
        get: function () {
            return this._json.summary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkPerfSampleSerie.prototype, "interval", {
        /**
         * Get interval
         * @returns {number}
         */
        get: function () {
            return this._json.interval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkPerfSampleSerie.prototype, "group", {
        /**
         * Get group
         * @returns {PerfGroupType | null}
         */
        get: function () {
            return this._json.group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkPerfSampleSerie.prototype, "name", {
        /**
         * Get name
         * @returns {string | null}
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkPerfSampleSerie.prototype, "type", {
        /**
         * Get type
         * @returns {PerfStatsType | null}
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkPerfSampleSerie.prototype, "unit", {
        /**
         * Get unit
         * @returns {string | null}
         */
        get: function () {
            return this._json.unit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkPerfSampleSerie.prototype, "samples", {
        /**
         * Get a list of network perf samples.
         * @returns {Array<NetworkPerfSample>}
         */
        get: function () {
            return this._json.samples.map(function (sample) { return new network_perf_sample_1.NetworkPerfSample(sample); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkPerfSampleSerie.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {NetworkPerfSampleSerieJson}
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
    NetworkPerfSampleSerie.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return NetworkPerfSampleSerie;
}());
exports.NetworkPerfSampleSerie = NetworkPerfSampleSerie;
