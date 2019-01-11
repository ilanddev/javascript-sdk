"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Cpu Update Request.
 */
var VmCpuCountUpdateRequest = (function () {
    function VmCpuCountUpdateRequest(_json) {
        this._json = _json;
    }
    Object.defineProperty(VmCpuCountUpdateRequest.prototype, "numberOfCpus", {
        /**
         * Get number of cpus.
         * @returns {number}
         */
        get: function () {
            return this._json.number_of_cpus;
        },
        /**
         * Set number of cpus.
         * @param {number} count
         */
        set: function (count) {
            this._json.number_of_cpus = count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmCpuCountUpdateRequest.prototype, "coresPerSocket", {
        /**
         * Get cores per socket.
         * @returns {number}
         */
        get: function () {
            return this._json.cores_per_socket;
        },
        /**
         * Set cores per socket.
         * @param {number} count
         */
        set: function (count) {
            this._json.cores_per_socket = count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmCpuCountUpdateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {VmCpuCountUpdateRequestJson}
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
    VmCpuCountUpdateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return VmCpuCountUpdateRequest;
}());
exports.VmCpuCountUpdateRequest = VmCpuCountUpdateRequest;
