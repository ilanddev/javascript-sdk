"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IP Range.
 */
/* istanbul ignore next: autogenerated */
var IpRange = (function () {
    function IpRange(firstParam, end) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                start: firstParam,
                end: end
            };
        }
        else if (firstParam instanceof IpRange) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(IpRange.prototype, "start", {
        /**
         * Get start.
         * @returns {string}
         */
        get: function () {
            return this._json.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpRange.prototype, "end", {
        /**
         * Get end.
         * @returns {string}
         */
        get: function () {
            return this._json.end;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpRange.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {IpRangeJson}
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
    IpRange.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return IpRange;
}());
exports.IpRange = IpRange;
