"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PerfCounter = (function () {
    function PerfCounter(firstParam, name, type) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                group: firstParam,
                name: name,
                type: type
            };
        }
        else if (firstParam instanceof PerfCounter) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(PerfCounter.prototype, "group", {
        /**
         * Returns group of current counter
         * @returns {string}
         */
        get: function () {
            return this._json.group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfCounter.prototype, "name", {
        /**
         * Returns name of current counter
         * @returns {string}
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerfCounter.prototype, "type", {
        /**
         * Returns type of current counter
         * @returns {string}
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    PerfCounter.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(PerfCounter.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {PerfCounterJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return PerfCounter;
}());
exports.PerfCounter = PerfCounter;
