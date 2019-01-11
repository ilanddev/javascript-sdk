"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vpg_entities_1 = require("./vpg-entities");
/**
 * Vpg VM.
 */
var VpgVm = (function () {
    function VpgVm(_json) {
        this._json = _json;
    }
    Object.defineProperty(VpgVm.prototype, "location", {
        /**
         * Get location id for Vpg VM
         * @returns {string} location id
         */
        get: function () {
            return this._json.location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "orgUuid", {
        /**
         * Get org uuid for Vpg Vm
         * @returns {string} org uuid
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "vpgUuid", {
        /**
         * Get vpg uuid for Vpg VM
         * @returns {string} vpg uuid
         */
        get: function () {
            return this._json.vpg_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "uuid", {
        /**
         * Get uuid for Vpg VM
         * @returns {string} uuid
         */
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "vmName", {
        /**
         * Get VM name for Vpg Vm
         * @returns {string} vm name
         */
        get: function () {
            return this._json.vm_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "vmIdentifier", {
        /**
         * Get VM identifier for Vpg VM
         * @returns {string} vm identifier
         */
        get: function () {
            return this._json.vm_identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "orgName", {
        /**
         * Get org name for Vpg VM
         * @returns {string} org name
         */
        get: function () {
            return this._json.organization_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "actualRpo", {
        /**
         * Get actual rpo for Vpg VM
         * @returns {number} actual rpo
         */
        get: function () {
            return this._json.actual_rpo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "entities", {
        /**
         * Get entities for Vpg VM
         * @returns {VpgEntities} entites
         */
        get: function () {
            return new vpg_entities_1.VpgEntities(this._json.entities);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "status", {
        /**
         * Get status for Vpg VM
         * @returns {VpgStatus} status
         */
        get: function () {
            return this._json.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "subStatus", {
        /**
         * Get sub status for Vpg VM
         * @returns {VpgSubStatus} sub status
         */
        get: function () {
            return this._json.sub_status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "priority", {
        /**
         * Get priority for Vpg Vm
         * @returns {VpgPriority} priority
         */
        get: function () {
            return this._json.priority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "sourceSite", {
        /**
         * Get source site for Vpg VM
         * @returns {string} source site
         */
        get: function () {
            return this._json.source_site;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "targetSite", {
        /**
         * Get target site for Vpg VM
         * @returns {string} target site
         */
        get: function () {
            return this._json.target_site;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "lastTest", {
        /**
         * Get last test for Vpg VM
         * @returns {number} last test
         */
        get: function () {
            return this._json.last_test;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "provisionedStorageInMb", {
        /**
         * Get provisioned storage in mb for Vpg VM
         * @returns {number} provisioned storage in mb
         */
        get: function () {
            return this._json.provisioned_storage_in_mb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "usedStorageInPercent", {
        /**
         * Get used storage in percent for Vpg VM
         * @returns {number} used storage in percent
         */
        get: function () {
            return this._json.used_storage_in_mb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "iops", {
        /**
         * Get iops for Vpg VM
         * @returns {number} iops
         */
        get: function () {
            return this._json.iops;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgVm.prototype, "throughputInMb", {
        /**
         * Get throughput in mb for Vpg VM
         * @returns {number} throughput in mb
         */
        get: function () {
            return this._json.throughput_in_mb;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format
     * @returns {string}
     */
    VpgVm.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(VpgVm.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VpgVmJson} the API object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return VpgVm;
}());
exports.VpgVm = VpgVm;
