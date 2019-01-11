"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Boot Options
 */
var BootOptions = (function () {
    function BootOptions(firstParam, isEnterBios) {
        if (typeof firstParam === 'number') {
            // Parameters constructor
            this._json = {
                boot_delay: firstParam,
                is_enter_bios: isEnterBios
            };
        }
        else if (firstParam instanceof BootOptions) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(BootOptions.prototype, "bootDelay", {
        /**
         * Returns boot delay
         * @returns {number}
         */
        get: function () {
            return this._json.boot_delay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootOptions.prototype, "isEnterBios", {
        /**
         * Returns true if "is enter bios" option is set to true
         * @returns {boolean}
         */
        get: function () {
            return this._json.is_enter_bios;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    BootOptions.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(BootOptions.prototype, "json", {
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
    return BootOptions;
}());
exports.BootOptions = BootOptions;
