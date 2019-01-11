"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Network Mapping
 */
var NetworkMapping = (function () {
    function NetworkMapping(_json) {
        this._json = _json;
    }
    Object.defineProperty(NetworkMapping.prototype, "sourceNetwork", {
        /**
         * Get source network for Network Mapping
         * @returns {string} source network
         */
        get: function () {
            return this._json.source_network;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkMapping.prototype, "failoverMoveTargetNetwork", {
        /**
         * Get failover move target network for Network Mapping
         * @returns {string} failover move target network
         */
        get: function () {
            return this._json.failover_move_target_network;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkMapping.prototype, "failoverTestTargetNetwork", {
        /**
         * Get failover test target network for Network Mapping
         * @returns {string} failover test target network
         */
        get: function () {
            return this._json.failover_test_target_network;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkMapping.prototype, "reverseConfigFailoverTestNetwork", {
        /**
         * Get reverse configuration failover test network for Network Mapping
         * @returns {string} reverse configuration failover test network
         */
        get: function () {
            return this._json.reverse_configuration_failover_test_network;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format
     * @returns {string}
     */
    NetworkMapping.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(NetworkMapping.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {NetworkMappingJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return NetworkMapping;
}());
exports.NetworkMapping = NetworkMapping;
/**
 * Boot Order Settings
 */
var BootOrderSettings = (function () {
    function BootOrderSettings(_json) {
        this._json = _json;
    }
    Object.defineProperty(BootOrderSettings.prototype, "name", {
        /**
         * Get name for Boot Order Settings
         * @returns {string} name
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootOrderSettings.prototype, "vmsInGroup", {
        /**
         * Get VMs in group for Boot Order Settings
         * @returns {string} VMs in group
         */
        get: function () {
            return this._json.vms_in_group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootOrderSettings.prototype, "startupDelay", {
        /**
         * Get startup delay for Boot Order Settings
         * @returns {string} startup delay
         */
        get: function () {
            return this._json.startup_delay;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format
     * @returns {string}
     */
    BootOrderSettings.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(BootOrderSettings.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {BootOrderSettingsJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return BootOrderSettings;
}());
exports.BootOrderSettings = BootOrderSettings;
/**
 * Vm Recovery Settings
 */
var VmRecoverySettings = (function () {
    function VmRecoverySettings(_json) {
        this._json = _json;
    }
    Object.defineProperty(VmRecoverySettings.prototype, "name", {
        /**
         * Get name for Vm Recovery Settings
         * @returns {string} name
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmRecoverySettings.prototype, "recoveryHost", {
        /**
         * Get recovery hosts for Vm Recovery Settings
         * @returns {string} recovery hosts
         */
        get: function () {
            return this._json.recovery_host;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmRecoverySettings.prototype, "recoveryNetworks", {
        /**
         * Get recovery networks for Vm Recovery Settings
         * @returns {Map<string, string>} recovery networks
         */
        get: function () {
            return this._json.recovery_networks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmRecoverySettings.prototype, "recoveryDatastores", {
        /**
         * Get recovery data stores for Vm Recovery Settings
         * @returns {Map<string, string>} recovery data stores
         */
        get: function () {
            return this._json.recovery_datastores;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmRecoverySettings.prototype, "recoveryFolder", {
        /**
         * Get recovery folder for Vm Recovery Settings
         * @returns {string} recovery folder
         */
        get: function () {
            return this._json.recovery_folder;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format
     * @returns {string}
     */
    VmRecoverySettings.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(VmRecoverySettings.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VmRecoverySettingsJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return VmRecoverySettings;
}());
exports.VmRecoverySettings = VmRecoverySettings;
/**
 * Detailed Recovery Step
 */
var DetailedRecoveryStep = (function () {
    function DetailedRecoveryStep(_json) {
        this._json = _json;
    }
    Object.defineProperty(DetailedRecoveryStep.prototype, "number", {
        /**
         * Get number for Detailed Recovery Step
         * @returns {string} number
         */
        get: function () {
            return this._json.number;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailedRecoveryStep.prototype, "description", {
        /**
         * Get description for Detailed Recovery Step
         * @returns {string} description
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailedRecoveryStep.prototype, "result", {
        /**
         * Get result for Detailed Recovery Step
         * @returns {string} result
         */
        get: function () {
            return this._json.result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailedRecoveryStep.prototype, "startTime", {
        /**
         * Get start time for Detailed Recovery Step
         * @returns {string} start time
         */
        get: function () {
            return this._json.start_time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailedRecoveryStep.prototype, "endTime", {
        /**
         * Get end time for Detailed Recovery Step
         * @returns {string} end time
         */
        get: function () {
            return this._json.end_time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailedRecoveryStep.prototype, "executionTime", {
        /**
         * Get execution time for Detailed Recovery Step
         * @returns {string} execution time
         */
        get: function () {
            return this._json.execution_time;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format
     * @returns {string}
     */
    DetailedRecoveryStep.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(DetailedRecoveryStep.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {DetailedRecoveryStepJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return DetailedRecoveryStep;
}());
exports.DetailedRecoveryStep = DetailedRecoveryStep;
/**
 * Vpg Failover Report Data
 */
var VpgFailoverReportData = (function () {
    function VpgFailoverReportData(_json) {
        this._json = _json;
    }
    Object.defineProperty(VpgFailoverReportData.prototype, "vpgName", {
        /**
         * Get Vpg name for Vpg Failover Report Data
         * @returns {string} Vpg name
         */
        get: function () {
            return this._json.vpg_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "reportGenerationDate", {
        /**
         * Get report generation date for Vpg Failover Report Data
         * @returns {string} report generation date
         */
        get: function () {
            return this._json.report_generation_date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "operationName", {
        /**
         * Get operation name for Vpg Failover Report Data
         * @returns {string} operation name
         */
        get: function () {
            return this._json.operation_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "pointInTime", {
        /**
         * Get point in time for Vpg Failover Report Data
         * @returns {string} point in time
         */
        get: function () {
            return this._json.point_in_time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "startTime", {
        /**
         * Get start time for Vpg Failover Report Data
         * @returns {string} start time
         */
        get: function () {
            return this._json.start_time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "endTime", {
        /**
         * Get end time for Vpg Failover Report Data
         * @returns {string} end time
         */
        get: function () {
            return this._json.end_time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "rto", {
        /**
         * Get rto for Vpg Failover Report Data
         * @returns {string} rto
         */
        get: function () {
            return this._json.rto;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "operationResult", {
        /**
         * Get operation result for Vpg Failover Report Data
         * @returns {string} operation result
         */
        get: function () {
            return this._json.operation_result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "userNotes", {
        /**
         * Get user notes for Vpg Failover Report Data
         * @returns {string} user notes
         */
        get: function () {
            return this._json.user_notes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "protectedSite", {
        /**
         * Get protected site for Vpg Failover Report Data
         * @returns {string} protected site
         */
        get: function () {
            return this._json.protected_site;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "recoverySite", {
        /**
         * Get recovery site for Vpg Failover Report Data
         * @returns {string} recovery site
         */
        get: function () {
            return this._json.recovery_site;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "defaultRecoveryHost", {
        /**
         * Get default recovery host for Vpg Failover Report Data
         * @returns {string} default recovery host
         */
        get: function () {
            return this._json.default_recovery_host;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "defaultRecoveryDatastore", {
        /**
         * Get default recovery data store for Vpg Failover Report Data
         * @returns {string} default recovery data store
         */
        get: function () {
            return this._json.default_recovery_datastore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "defaulFailoverMoveNetwork", {
        /**
         * Get default failover move network for Vpg Failover Report Data
         * @returns {string} default failover move network
         */
        get: function () {
            return this._json.default_failover_move_network;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "recoveryOrg", {
        /**
         * Get recovery organization for Vpg Failover Report Data
         * @returns {string} recovery org
         */
        get: function () {
            return this._json.recovery_organization;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "recoveryVdc", {
        /**
         * Get recovery Vdc for Vpg Failover Report Data
         * @returns {string} recovery Vdc
         */
        get: function () {
            return this._json.recovery_vdc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "guestCustomization", {
        /**
         * Get guest customization for Vpg Failover Report Data
         * @returns {string} guest customization
         */
        get: function () {
            return this._json.guest_customization;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "defaultTestRecoveryNetwork", {
        /**
         * Get default test recovery network for Vpg Failover Report Data
         * @returns {string} default test recovery network
         */
        get: function () {
            return this._json.default_test_recovery_network;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "defaultRecoveryFolder", {
        /**
         * Get default recovery folder for Vpg Failover Report Data
         * @returns {string} default recovery folder
         */
        get: function () {
            return this._json.default_recovery_folder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "postRecoveryScript", {
        /**
         * Get post recovery script for Vpg Failover Report Data
         * @returns {string} post recovery script
         */
        get: function () {
            return this._json.post_recovery_script;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "bootOrderSettingsMessage", {
        /**
         * Get boot order settings message for Vpg Failover Report Data
         * @returns {string} boot order settings message
         */
        get: function () {
            return this._json.boot_order_settings_message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "networkMappings", {
        /**
         * Get network mappings for Vpg Failover Report Data
         * @returns {Array<NetworkMapping>} network mappings
         */
        get: function () {
            return this._json.network_mappings.map(function (net) { return new NetworkMapping(net); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "bootOrderSettings", {
        /**
         * Get boot order settings for Vpg Failover Report Data
         * @returns {Array<BootOrderSettings>} boot order settings
         */
        get: function () {
            return this._json.boot_order_settings.map(function (boot) { return new BootOrderSettings(boot); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "vmRecoverySettings", {
        /**
         * Get VM recovery settings for Vpg Failover Report Data
         * @returns {Array<VmRecoverySettings>} VM recovery settings
         */
        get: function () {
            return this._json.vm_recovery_settings.map(function (vm) { return new VmRecoverySettings(vm); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportData.prototype, "detailedRecoveryStepList", {
        /**
         * Get detailed recovery step list for Vpg Failover Report Data
         * @returns {Array<DetailedRecoveryStep>} detailed recovery step list
         */
        get: function () {
            return this._json.detailed_recovery_step_list.map(function (step) { return new DetailedRecoveryStep(step); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format
     * @returns {string}
     */
    VpgFailoverReportData.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(VpgFailoverReportData.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VpgFailoverReportDataJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return VpgFailoverReportData;
}());
exports.VpgFailoverReportData = VpgFailoverReportData;
/**
 * Vpg Failover Report Details
 */
var VpgFailoverReportDetails = (function () {
    function VpgFailoverReportDetails(_json) {
        this._json = _json;
    }
    Object.defineProperty(VpgFailoverReportDetails.prototype, "locationId", {
        /**
         * Get location id for Vpg Failover Report Details
         * @returns {string} location id
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportDetails.prototype, "taskUuid", {
        /**
         * Get task uuid for Vpg Failover Report Details
         * @returns {string} task uuid
         */
        get: function () {
            return this._json.task_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportDetails.prototype, "taskCompleteTimestamp", {
        /**
         * Get task complete timestamp for Vpg Failover Report Details
         * @returns {number} timestamp
         */
        get: function () {
            return this._json.task_complete_timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportDetails.prototype, "status", {
        /**
         * Get status for Vpg Failover Report Details
         * @returns {Status} status
         */
        get: function () {
            return this._json.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgFailoverReportDetails.prototype, "data", {
        /**
         * Get data for Vpg Failover Report Details
         * @returns {VpgFailoverReportData} data
         */
        get: function () {
            return new VpgFailoverReportData(this._json.data);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format
     * @returns {string}
     */
    VpgFailoverReportDetails.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(VpgFailoverReportDetails.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VpgFailoverReportDetailsJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return VpgFailoverReportDetails;
}());
exports.VpgFailoverReportDetails = VpgFailoverReportDetails;
