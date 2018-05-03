import { VpgPriority, VpgStatus, VpgSubStatus, VpgVmJson } from './json/vpg';
import { VpgEntities } from './vpg-entities';

/**
 * Vpg VM.
 */
export class VpgVm {

  constructor(private _json: VpgVmJson) {}

  /**
   * Get location id for Vpg VM
   * @returns {string} location id
   */
  get location(): string {
    return this._json.location;
  }

  /**
   * Get org uuid for Vpg Vm
   * @returns {string} org uuid
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get vpg uuid for Vpg VM
   * @returns {string} vpg uuid
   */
  get vpgUuid(): string {
    return this._json.vpg_uuid;
  }

  /**
   * Get uuid for Vpg VM
   * @returns {string} uuid
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get VM name for Vpg Vm
   * @returns {string} vm name
   */
  get vmName(): string {
    return this._json.vm_name;
  }

  /**
   * Get VM identifier for Vpg VM
   * @returns {string} vm identifier
   */
  get vmIdentifier(): string {
    return this._json.vm_identifier;
  }

  /**
   * Get org name for Vpg VM
   * @returns {string} org name
   */
  get orgName(): string {
    return this._json.organization_name;
  }

  /**
   * Get actual rpo for Vpg VM
   * @returns {number} actual rpo
   */
  get actualRpo(): number {
    return this._json.actual_rpo;
  }

  /**
   * Get entities for Vpg VM
   * @returns {VpgEntities} entites
   */
  get entities(): VpgEntities {
    return new VpgEntities(this._json.entities);
  }

  /**
   * Get status for Vpg VM
   * @returns {VpgStatus} status
   */
  get status(): VpgStatus {
    return this._json.status;
  }

  /**
   * Get sub status for Vpg VM
   * @returns {VpgSubStatus} sub status
   */
  get subStatus(): VpgSubStatus {
    return this._json.sub_status;
  }

  /**
   * Get priority for Vpg Vm
   * @returns {VpgPriority} priority
   */
  get priority(): VpgPriority {
    return this._json.priority;
  }

  /**
   * Get source site for Vpg VM
   * @returns {string} source site
   */
  get sourceSite(): string {
    return this._json.source_site;
  }

  /**
   * Get target site for Vpg VM
   * @returns {string} target site
   */
  get targetSite(): string {
    return this._json.target_site;
  }

  /**
   * Get last test for Vpg VM
   * @returns {number} last test
   */
  get lastTest(): number {
    return this._json.last_test;
  }

  /**
   * Get provisioned storage in mb for Vpg VM
   * @returns {number} provisioned storage in mb
   */
  get provisionedStorageInMb(): number {
    return this._json.provisioned_storage_in_mb;
  }

  /**
   * Get used storage in percent for Vpg VM
   * @returns {number} used storage in percent
   */
  get usedStorageInPercent(): number {
    return this._json.used_storage_in_mb;
  }

  /**
   * Get iops for Vpg VM
   * @returns {number} iops
   */
  get iops(): number {
    return this._json.iops;
  }

  /**
   * Get throughput in mb for Vpg VM
   * @returns {number} throughput in mb
   */
  get throughputInMb(): number {
    return this._json.throughput_in_mb;
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
   * @returns {VpgVmJson} the API object
   */
  get json(): VpgVmJson {
    return Object.assign({}, this._json);
  }
}
