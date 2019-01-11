"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Capabilities
 */
var Capabilities = (function () {
    function Capabilities(firstParam, memoryHotAddEnabled) {
        if (typeof firstParam === 'boolean') {
            // Parameters constructor
            this._json = {
                cpu_hot_add_enabled: firstParam,
                memory_hot_add_enabled: memoryHotAddEnabled
            };
        }
        else if (firstParam instanceof Capabilities) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(Capabilities.prototype, "cpuHotAddEnabled", {
        /**
         * Returns true if CPU hot add is enabled
         * @returns {boolean}
         */
        get: function () {
            return this._json.cpu_hot_add_enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Capabilities.prototype, "memoryHotAddEnabled", {
        /**
         * Returns true if Memory hot add is enabled
         * @returns {boolean}
         */
        get: function () {
            return this._json.memory_hot_add_enabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Capabilities.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Capabilities.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {BootOptionsJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return Capabilities;
}());
exports.Capabilities = Capabilities;
