"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Guest Tools
 */
var GuestTools = (function () {
    function GuestTools(firstParam) {
        if (firstParam instanceof GuestTools) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(GuestTools.prototype, "status", {
        /**
         * Returns guest tools status
         * @returns {string}
         */
        get: function () {
            return this._json.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestTools.prototype, "runningStatus", {
        /**
         * Returns guest tools running status
         * @returns {string}
         */
        get: function () {
            return this._json.running_status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestTools.prototype, "version", {
        /**
         * Returns guest tools version
         * @returns {string}
         */
        get: function () {
            return this._json.version;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    GuestTools.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(GuestTools.prototype, "json", {
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
    return GuestTools;
}());
exports.GuestTools = GuestTools;
