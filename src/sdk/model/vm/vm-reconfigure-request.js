"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vm_cpu_count_update_request_1 = require("./vm-cpu-count-update-request");
var vm_memory_size_update_request_1 = require("./vm-memory-size-update-request");
var guest_customization_update_request_1 = require("./guest-customization/guest-customization-update-request");
var VmReconfigureRequest = (function () {
    function VmReconfigureRequest(firstParam, description, cpuSpec, memorySpec, diskSpec, guestCustomizationSection, nestedHypervisorEnabled) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                name: firstParam,
                description: description,
                cpu_spec: cpuSpec,
                memory_spec: memorySpec,
                disk_spec: diskSpec,
                guest_customization_section: guestCustomizationSection,
                nested_hypervisor_enabled: nestedHypervisorEnabled
            };
        }
        else if (firstParam instanceof VmReconfigureRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(VmReconfigureRequest.prototype, "name", {
        /**
         * Get name.
         * @returns {string}
         */
        get: function () {
            return this._json.name;
        },
        /**
         * Set name.
         * @param {string} name
         */
        set: function (name) {
            this._json.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmReconfigureRequest.prototype, "description", {
        /**
         * Get description.
         * @returns {string}
         */
        get: function () {
            return this._json.description;
        },
        /**
         * Set description.
         * @param {string} description
         */
        set: function (description) {
            this._json.description = description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmReconfigureRequest.prototype, "cpuSpec", {
        /**
         * Get cpu spec.
         * @returns {VmCpuCountUpdateRequest}
         */
        get: function () {
            return this._json.cpu_spec ? new vm_cpu_count_update_request_1.VmCpuCountUpdateRequest(this._json.cpu_spec) : this._json.cpu_spec;
        },
        /**
         * Set cpu spec.
         * @param {VmCpuCountUpdateRequest} cpuSpec
         */
        set: function (cpuSpec) {
            this._json.cpu_spec = cpuSpec ? cpuSpec.json : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmReconfigureRequest.prototype, "memorySpec", {
        /**
         * Get memory spec.
         * @returns {VmMemorySizeUpdateRequest}
         */
        get: function () {
            return this._json.memory_spec ? new vm_memory_size_update_request_1.VmMemorySizeUpdateRequest(this._json.memory_spec) : this._json.memory_spec;
        },
        /**
         * Set memory spec.
         * @param {VmMemorySizeUpdateRequest} spec
         */
        set: function (spec) {
            this._json.memory_spec = spec ? spec.json : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmReconfigureRequest.prototype, "diskSpec", {
        /**
         * Get disk spec.
         * @returns {Array<VmDiskRequestJson>}
         */
        get: function () {
            return this._json.disk_spec;
        },
        /**
         * Set disk spec.
         * @param {Array<VmDiskRequestJson>} spec
         */
        set: function (spec) {
            this._json.disk_spec = spec;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmReconfigureRequest.prototype, "guestCustomizationSection", {
        /**
         * Get guest customization section.
         * @returns {GuestCustomizationUpdateRequest}
         */
        get: function () {
            return this._json.guest_customization_section ?
                new guest_customization_update_request_1.GuestCustomizationUpdateRequest(this._json.guest_customization_section) :
                this._json.guest_customization_section;
        },
        /**
         * Set guest customization section.
         * @param {GuestCustomizationUpdateRequest} request
         */
        set: function (request) {
            this._json.guest_customization_section = request ? request.json : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmReconfigureRequest.prototype, "nestedHypervisorEnabled", {
        /**
         * Get nested hypervisor enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.nested_hypervisor_enabled;
        },
        /**
         * Set nested hypervisor enabled.
         * @param {boolean} enabled
         */
        set: function (enabled) {
            this._json.nested_hypervisor_enabled = enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmReconfigureRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {VmReconfigureRequestJson}
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
    VmReconfigureRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return VmReconfigureRequest;
}());
exports.VmReconfigureRequest = VmReconfigureRequest;
