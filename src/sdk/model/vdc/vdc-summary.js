"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * vDC Summary.
 */
var VdcSummary = (function () {
    function VdcSummary(_json) {
        this._json = _json;
    }
    Object.defineProperty(VdcSummary.prototype, "numberOfVapps", {
        /**
         * Gets the number of vApps for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.number_of_vapps;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VdcSummary.prototype, "numberOfVms", {
        /**
         * Gets the number of VMs for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.number_of_vms;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VdcSummary.prototype, "allocationCpu", {
        /**
         * Gets the allocated cpu for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.allocation_cpu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VdcSummary.prototype, "allocationMemory", {
        /**
         * Gets the allocated memory for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.allocation_memory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VdcSummary.prototype, "configuredCpu", {
        /**
         * Gets the configured cpu for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.configured_cpu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VdcSummary.prototype, "configuredMemory", {
        /**
         * Gets the configured memory for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.configured_memory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VdcSummary.prototype, "configuredDisk", {
        /**
         * Gets the configured disk for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.configured_disk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VdcSummary.prototype, "reservedCpu", {
        /**
         * Gets the reserved cpu for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.reserved_cpu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VdcSummary.prototype, "reservedMem", {
        /**
         * Gets the reserved memory for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.reserved_mem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VdcSummary.prototype, "consumedCpu", {
        /**
         * Gets the consumed cpu for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.consumed_cpu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VdcSummary.prototype, "consumedMem", {
        /**
         * Gets the consumed memory for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.consumed_mem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VdcSummary.prototype, "consumedDisk", {
        /**
         * Gets the consumed disk for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.consumed_disk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VdcSummary.prototype, "provisionedDisk", {
        /**
         * Gets the provisioned disk for the vDC
         * @returns {number}
         */
        get: function () {
            return this._json.provisioned_disk;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    VdcSummary.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(VdcSummary.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VdcSummaryJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return VdcSummary;
}());
exports.VdcSummary = VdcSummary;
