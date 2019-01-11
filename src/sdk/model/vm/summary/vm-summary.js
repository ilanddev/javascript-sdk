"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Summary
 */
var VmSummary = (function () {
    function VmSummary(firstParam) {
        if (firstParam instanceof VmSummary) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(VmSummary.prototype, "reservedCpu", {
        /**
         * Returns reserved CPU.
         * @returns {number}
         */
        get: function () {
            return this._json.reserved_cpu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmSummary.prototype, "reservedMemory", {
        /**
         * Returns reserved memory.
         * @returns {number}
         */
        get: function () {
            return this._json.reserved_mem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmSummary.prototype, "consumedCpu", {
        /**
         * Returns consumed CPU.
         * @returns {number}
         */
        get: function () {
            return this._json.consumed_cpu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmSummary.prototype, "consumedMemory", {
        /**
         * Returns consumed memory.
         * @returns {number}
         */
        get: function () {
            return this._json.consumed_mem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmSummary.prototype, "consumedDisk", {
        /**
         * Returns consumed disk.
         * @returns {number}
         */
        get: function () {
            return this._json.consumed_disk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmSummary.prototype, "provisionedDisk", {
        /**
         * Returns provisioned disk.
         * @returns {number}
         */
        get: function () {
            return this._json.provisioned_disk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmSummary.prototype, "configuredDisk", {
        /**
         * Returns configured disk.
         * @returns {number}
         */
        get: function () {
            return this._json.configured_disk;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    VmSummary.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(VmSummary.prototype, "json", {
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
    return VmSummary;
}());
exports.VmSummary = VmSummary;
