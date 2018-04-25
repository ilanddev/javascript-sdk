import {
    BootOrderSettingsJson, DetailedRecoveryStepJson, NetworkMappingJson, Status, VmRecoverySettingsJson,
    VpgFailoverReportDataJson,
    VpgFailoverReportDetailsJson
} from './json/vpg-failover-report-detail';

/**
 * Network Mapping
 */
export class NetworkMapping {

  constructor(private _json: NetworkMappingJson) {}

  /**
   * Get source network for Network Mapping
   * @returns {string} source network
   */
  get sourceNetwork(): string {
    return this._json.source_network;
  }

  /**
   * Get failover move target network for Network Mapping
   * @returns {string} failover move target network
   */
  get failoverMoveTargetNetwork(): string {
    return this._json.failover_move_target_network;
  }

  /**
   * Get failover test target network for Network Mapping
   * @returns {string} failover test target network
   */
  get failoverTestTargetNetwork(): string {
    return this._json.failover_test_target_network;
  }

  /**
   * Get reverse configuration failover test network for Network Mapping
   * @returns {string} reverse configuration failover test network
   */
  get reverseConfigFailoverTestNetwork(): string {
    return this._json.reverse_configuration_failover_test_network;
  }

  /**
   * JSON format
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {NetworkMappingJson} the API json object
   */
  get json(): NetworkMappingJson {
    return Object.assign({}, this._json);
  }
}

/**
 * Boot Order Settings
 */
export class BootOrderSettings {

  constructor(private _json: BootOrderSettingsJson) {}

  /**
   * Get name for Boot Order Settings
   * @returns {string} name
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get VMs in group for Boot Order Settings
   * @returns {string} VMs in group
   */
  get vmsInGroup(): string {
    return this._json.vms_in_group;
  }

  /**
   * Get startup delay for Boot Order Settings
   * @returns {string} startup delay
   */
  get startupDelay(): string {
    return this._json.startup_delay;
  }
  /**
   * JSON format
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {BootOrderSettingsJson} the API json object
   */
  get json(): BootOrderSettingsJson {
    return Object.assign({}, this._json);
  }
}

/**
 * Vm Recovery Settings
 */
export class VmRecoverySettings {

  constructor(private _json: VmRecoverySettingsJson) {}

  /**
   * Get name for Vm Recovery Settings
   * @returns {string} name
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get recovery hosts for Vm Recovery Settings
   * @returns {string} recovery hosts
   */
  get recoveryHost(): string {
    return this._json.recovery_host;
  }

  /**
   * Get recovery networks for Vm Recovery Settings
   * @returns {Map<string, string>} recovery networks
   */
  get recoveryNetworks(): Map<string, string> {
    return this._json.recovery_networks;
  }

  /**
   * Get recovery data stores for Vm Recovery Settings
   * @returns {Map<string, string>} recovery data stores
   */
  get recoveryDatastores(): Map<string, string> {
    return this._json.recovery_datastores;
  }

  /**
   * Get recovery folder for Vm Recovery Settings
   * @returns {string} recovery folder
   */
  get recoveryFolder(): string {
    return this._json.recovery_folder;
  }

  /**
   * JSON format
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VmRecoverySettingsJson} the API json object
   */
  get json(): VmRecoverySettingsJson {
    return Object.assign({}, this._json);
  }
}

/**
 * Detailed Recovery Step
 */
export class DetailedRecoveryStep {

  constructor(private _json: DetailedRecoveryStepJson) {}

  /**
   * Get number for Detailed Recovery Step
   * @returns {string} number
   */
  get number(): string {
    return this._json.number;
  }

  /**
   * Get description for Detailed Recovery Step
   * @returns {string} description
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get result for Detailed Recovery Step
   * @returns {string} result
   */
  get result(): string {
    return this._json.result;
  }

  /**
   * Get start time for Detailed Recovery Step
   * @returns {string} start time
   */
  get startTime(): string {
    return this._json.start_time;
  }

  /**
   * Get end time for Detailed Recovery Step
   * @returns {string} end time
   */
  get endTime(): string {
    return this._json.end_time;
  }

  /**
   * Get execution time for Detailed Recovery Step
   * @returns {string} execution time
   */
  get executionTime(): string {
    return this._json.execution_time;
  }

  /**
   * JSON format
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {DetailedRecoveryStepJson} the API json object
   */
  get json(): DetailedRecoveryStepJson {
    return Object.assign({}, this._json);
  }
}

/**
 * Vpg Failover Report Data
 */
export class VpgFailoverReportData {

  constructor(private _json: VpgFailoverReportDataJson) {}

  /**
   * Get Vpg name for Vpg Failover Report Data
   * @returns {string} Vpg name
   */
  get vpgName(): string {
    return this._json.vpg_name;
  }

  /**
   * Get report generation date for Vpg Failover Report Data
   * @returns {string} report generation date
   */
  get reportGenerationDate(): string {
    return this._json.report_generation_date;
  }

  /**
   * Get operation name for Vpg Failover Report Data
   * @returns {string} operation name
   */
  get operationName(): string {
    return this._json.operation_name;
  }

  /**
   * Get point in time for Vpg Failover Report Data
   * @returns {string} point in time
   */
  get pointInTime(): string {
    return this._json.point_in_time;
  }

  /**
   * Get start time for Vpg Failover Report Data
   * @returns {string} start time
   */
  get startTime(): string {
    return this._json.start_time;
  }

  /**
   * Get end time for Vpg Failover Report Data
   * @returns {string} end time
   */
  get endTime(): string {
    return this._json.end_time;
  }

  /**
   * Get rto for Vpg Failover Report Data
   * @returns {string} rto
   */
  get rto(): string {
    return this._json.rto;
  }

  /**
   * Get operation result for Vpg Failover Report Data
   * @returns {string} operation result
   */
  get operationResult(): string {
    return this._json.operation_result;
  }

  /**
   * Get user notes for Vpg Failover Report Data
   * @returns {string} user notes
   */
  get userNotes(): string {
    return this._json.user_notes;
  }

  /**
   * Get protected site for Vpg Failover Report Data
   * @returns {string} protected site
   */
  get protectedSite(): string {
    return this._json.protected_site;
  }

  /**
   * Get recovery site for Vpg Failover Report Data
   * @returns {string} recovery site
   */
  get recoverySite(): string {
    return this._json.recovery_site;
  }

  /**
   * Get default recovery host for Vpg Failover Report Data
   * @returns {string} default recovery host
   */
  get defaultRecoveryHost(): string {
    return this._json.default_recovery_host;
  }

  /**
   * Get default recovery data store for Vpg Failover Report Data
   * @returns {string} default recovery data store
   */
  get defaultRecoveryDatastore(): string {
    return this._json.default_recovery_datastore;
  }

  /**
   * Get default failover move network for Vpg Failover Report Data
   * @returns {string} default failover move network
   */
  get defaulFailoverMoveNetwork(): string {
    return this._json.default_failover_move_network;
  }

  /**
   * Get recovery organization for Vpg Failover Report Data
   * @returns {string} recovery org
   */
  get recoveryOrg(): string {
    return this._json.recovery_organization;
  }

  /**
   * Get recovery Vdc for Vpg Failover Report Data
   * @returns {string} recovery Vdc
   */
  get recoveryVdc(): string {
    return this._json.recovery_vdc;
  }

  /**
   * Get guest customization for Vpg Failover Report Data
   * @returns {string} guest customization
   */
  get guestCustomization(): string {
    return this._json.guest_customization;
  }

  /**
   * Get default test recovery network for Vpg Failover Report Data
   * @returns {string} default test recovery network
   */
  get defaultTestRecoveryNetwork(): string {
    return this._json.default_test_recovery_network;
  }

  /**
   * Get default recovery folder for Vpg Failover Report Data
   * @returns {string} default recovery folder
   */
  get defaultRecoveryFolder(): string {
    return this._json.default_recovery_folder;
  }

  /**
   * Get post recovery script for Vpg Failover Report Data
   * @returns {string} post recovery script
   */
  get postRecoveryScript(): string {
    return this._json.post_recovery_script;
  }

  /**
   * Get boot order settings message for Vpg Failover Report Data
   * @returns {string} boot order settings message
   */
  get bootOrderSettingsMessage(): string {
    return this._json.boot_order_settings_message;
  }

  /**
   * Get network mappings for Vpg Failover Report Data
   * @returns {Array<NetworkMapping>} network mappings
   */
  get networkMappings(): Array<NetworkMapping> {
    return this._json.network_mappings.map((net) => new NetworkMapping(net));
  }

  /**
   * Get boot order settings for Vpg Failover Report Data
   * @returns {Array<BootOrderSettings>} boot order settings
   */
  get bootOrderSettings(): Array<BootOrderSettings> {
    return this._json.boot_order_settings.map((boot) => new BootOrderSettings(boot));
  }

  /**
   * Get VM recovery settings for Vpg Failover Report Data
   * @returns {Array<VmRecoverySettings>} VM recovery settings
   */
  get vmRecoverySettings(): Array<VmRecoverySettings> {
    return this._json.vm_recovery_settings.map((vm) => new VmRecoverySettings(vm));
  }

  /**
   * Get detailed recovery step list for Vpg Failover Report Data
   * @returns {Array<DetailedRecoveryStep>} detailed recovery step list
   */
  get detailedRecoveryStepList(): Array<DetailedRecoveryStep> {
    return this._json.detailed_recovery_step_list.map((step) => new DetailedRecoveryStep(step));
  }

  /**
   * JSON format
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VpgFailoverReportDataJson} the API json object
   */
  get json(): VpgFailoverReportDataJson {
    return Object.assign({}, this._json);
  }
}

/**
 * Vpg Failover Report Details
 */
export class VpgFailoverReportDetails {

  constructor(private _json: VpgFailoverReportDetailsJson) {}

  /**
   * Get location id for Vpg Failover Report Details
   * @returns {string} location id
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get task uuid for Vpg Failover Report Details
   * @returns {string} task uuid
   */
  get taskUuid(): string {
    return this._json.task_uuid;
  }

  /**
   * Get task complete timestamp for Vpg Failover Report Details
   * @returns {number} timestamp
   */
  get taskCompleteTimestamp(): number {
    return this._json.task_complete_timestamp;
  }

  /**
   * Get status for Vpg Failover Report Details
   * @returns {Status} status
   */
  get status(): Status {
    return this._json.status;
  }

  /**
   * Get data for Vpg Failover Report Details
   * @returns {VpgFailoverReportData} data
   */
  get data(): VpgFailoverReportData {
    return new VpgFailoverReportData(this._json.data);
  }

  /**
   * JSON format
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VpgFailoverReportDetailsJson} the API json object
   */
  get json(): VpgFailoverReportDetailsJson {
    return Object.assign({}, this._json);
  }
}
