"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Capabilities update request.
 */
var VmCapabilityUpdateRequest = (function () {
    function VmCapabilityUpdateRequest(_json) {
        this._json = _json;
    }
    Object.defineProperty(VmCapabilityUpdateRequest.prototype, "cpuHotAddEnabled", {
        /**
         * Get cpu hot add enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.cpu_hot_add_enabled;
        },
        /**
         * Set cpu hot add enabled.
         * @param {boolean} enabled
         */
        set: function (enabled) {
            this._json.cpu_hot_add_enabled = enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmCapabilityUpdateRequest.prototype, "memoryHotAddEnabled", {
        /**
         * Get memory hot add enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.memory_hot_add_enabled;
        },
        /**
         * Set memory hot add enabled.
         * @param {boolean} enabled
         */
        set: function (enabled) {
            this._json.memory_hot_add_enabled = enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmCapabilityUpdateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {VmCapabilityUpdateRequestJson}
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
    VmCapabilityUpdateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return VmCapabilityUpdateRequest;
}());
exports.VmCapabilityUpdateRequest = VmCapabilityUpdateRequest;
