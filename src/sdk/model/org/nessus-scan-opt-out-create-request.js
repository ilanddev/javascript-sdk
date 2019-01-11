"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Nessus Scan Opt Out Create Request.
 */
/* istanbul ignore next: autogenerated */
var NessusScanOptOutCreateRequest = (function () {
    function NessusScanOptOutCreateRequest(firstParam, exclusions) {
        if (typeof firstParam === 'boolean') {
            // Parameters constructor
            this._json = {
                opt_out: firstParam,
                exclusions: exclusions
            };
        }
        else if (firstParam instanceof NessusScanOptOutCreateRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(NessusScanOptOutCreateRequest.prototype, "optOut", {
        /**
         * Get opt out.
         * @returns {boolean}
         */
        get: function () {
            return this._json.opt_out;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NessusScanOptOutCreateRequest.prototype, "exclusions", {
        /**
         * Get exclusions.
         * @returns {Array<string>}
         */
        get: function () {
            return this._json.exclusions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NessusScanOptOutCreateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {NessusScanOptOutCreateRequestJson}
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
    NessusScanOptOutCreateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return NessusScanOptOutCreateRequest;
}());
exports.NessusScanOptOutCreateRequest = NessusScanOptOutCreateRequest;
