import { Entity } from '../common/entity';
import { VccPerfSample } from './vcc-perf-sample';
import {
  CloudRepositoryJson,
  CloudTenantBackupHistoryJson,
  CloudTenantJson,
  CloudTenantResourceJson,
  VccPerfSampleJson,
  WanAcceleratorJson
} from './__json__/cloud-tenant-json';
import { EntityType } from '../common/__json__/entity-type';
import { Iland } from '../../iland';
import { PerfIntervalType } from './__json__/perf-interval-type';
import { UpdateTenantContractRequest } from './upgrade-tenant-contract-request';

/**
 * Wan Accelerator.
 */
export class WanAccelerator {

  constructor(private _json: WanAcceleratorJson) {
  }

  /**
   * Gets the name of the Wan Accelerator
   * @returns {string} name
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Gets the description of the Wan Accelerator
   * @returns {string} description
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Gets the is ouf of date of the Wan Accelerator
   * @returns {boolean} is out of date
   */
  get outOfDate(): boolean {
    return this._json.out_of_date;
  }

  /**
   * Gets the version of the Wan Accelerator
   * @returns {string} version
   */
  get version(): string {
    return this._json.version;
  }

  /**
   * Gets the capacity of the Wan Accelerator
   * @returns {number} capacity
   */
  get capacity(): number {
    return this._json.capacity;
  }

  /**
   * Gets the traffic port of the Wan Accelerator
   * @returns {number} port
   */
  get trafficPort(): number {
    return this._json.traffic_port;
  }

  /**
   * Gets the connection count of the Wan Accelerator
   * @returns {number} count
   */
  get connectionCount(): number {
    return this._json.connection_count;
  }

  /**
   * Gets the cache path of the Wan Accelerator
   * @returns {string} cache path
   */
  get cachePath(): string {
    return this._json.cache_path;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {WanAcceleratorJson} the API __json__ object
   */
  get json(): WanAcceleratorJson {
    return Object.assign({}, this._json);
  }
}

/**
 * Cloud Repository.
 */
export class CloudRepository {

  constructor(private _json: CloudRepositoryJson) {
  }

  /**
   * Gets the display name for the Cloud Repository
   * @returns {string} display name
   */
  get displayName(): string {
    return this._json.display_name;
  }

  /**
   * Gets the quota for the Cloud Repository
   * @returns {number} quota
   */
  get quota(): number {
    return this._json.quota;
  }

  /**
   * Gets the used quota for the Cloud Repository
   * @returns {number} used quota
   */
  get usedQuota(): number {
    return this._json.used_quota;
  }

  /**
   * Gets the Wan Accelerator uuid for the Cloud Repository
   * @returns {string} wan accelerator uuid
   */
  get wanAcceleratorUuid(): string | null {
    return this._json.wan_accelerator_uuid;
  }

  /**
   * Gets the Wan Accelerator object for the Cloud Repository
   * @returns {WanAccelerator} wan accelerator
   */
  get wanAccelerator(): WanAccelerator | null {
    return (this._json.wan_accelerator ? new WanAccelerator(this._json.wan_accelerator) : null);
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {CloudRepositoryJson} the API __json__ object
   */
  get json(): CloudRepositoryJson {
    return Object.assign({}, this._json);
  }
}

/**
 * Cloud Tenant Resource.
 */
export class CloudTenantResource {

  constructor(private _json: CloudTenantResourceJson) {
  }

  /**
   * Gets a CloudRepository object
   * @returns {CloudRepository} cloud repository object
   */
  get repository(): CloudRepository {
    return new CloudRepository(this._json.repository);
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {CloudTenantResourceJson} the API __json__ object
   */
  get json(): CloudTenantResourceJson {
    return Object.assign({}, this._json);
  }
}

/**
 * Cloud Tenant Backup History.
 */
export class CloudTenantBackupHistory {

  constructor(private _json: CloudTenantBackupHistoryJson) {
  }

  get lastResult(): string {
    return this._json.last_result;
  }

  get lastActive(): number {
    return this._json.last_active;
  }

  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  get json(): CloudTenantBackupHistoryJson {
    return Object.assign({}, this._json);
  }
}

/**
 * Cloud Tenant.
 */
export class CloudTenant extends Entity {

  constructor(private _json: CloudTenantJson) {
    super(_json);
  }

  /**
   * Gets a Cloud Tenant by UUID.
   * @param {string} uuid
   * @returns {Promise<CloudTenant>} promise that resolves with the Cloud Tenant
   */
  static async getCloudTenant(uuid: string): Promise<any> {
    return Iland.getHttp().get(`/vcc-backup-tenants/${uuid}`).then((response) => {
      const json = response.data as CloudTenantJson;
      return new CloudTenant(json);
    });
  }

  get entityType(): EntityType {
    return 'VCC_BACKUP_TENANT';
  }

  /**
   * Gets the uid of the Cloud Tenant.
   * @returns {string} id value
   */
  get uid(): string {
    return this._json.uid;
  }

  /**
   * Indicates whether the Cloud Tenant is enabled.
   * @returns {boolean} value
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Gets the resources of the Cloud Tenant.
   * @returns {CloudTenantResource[]} resources
   */
  get resources(): Array<CloudTenantResource> {
    return this._json.resources.resources.map((it) => new CloudTenantResource(it));
  }

  /**
   * Get the last result of the Cloud Tenant.
   * @returns {string} last result
   */
  get lastResult(): string {
    return this._json.last_result;
  }

  /**
   * Gets the last active of the Cloud Tenant.
   * @returns {number} value
   */
  get lastActive(): number {
    return this._json.last_active;
  }

  /**
   * Gets the throttling enabled value of the Cloud Tenant.
   * @returns {boolean} value
   */
  get throttlingEnabled(): boolean {
    return this._json.throttling_enabled;
  }

  /**
   * Gets the throttling speed limit of the Cloud Tenant.
   * @returns {number} speed limit
   */
  get throttlingSpeedLimit(): number {
    return this._json.throttling_speed_limit;
  }

  /**
   * Gets the throttling speed unit of the Cloud Tenant.
   * @returns {string} speed unit
   */
  get throttlingSpeedUnit(): string {
    return this._json.throttling_speed_unit;
  }

  /**
   * Gets the public IP count of the Cloud Tenant.
   * @returns {number} public ip count
   */
  get publicIpCount(): number {
    return this._json.public_ip_count;
  }

  /**
   * Gets the backup count of the Cloud Tenant.
   * @returns {number} backup count
   */
  get backupCount(): number {
    return this._json.backup_count;
  }

  /**
   * Gets the crm number of the Cloud Tenant.
   * @returns {string} value
   */
  get crmNumber(): string {
    return this._json.crm;
  }

  /**
   * Gets the owner name of the Cloud Tenant.
   * @returns {string} owner name
   */
  get ownerName(): string {
    return this._json.owner_name;
  }

  /**
   * Gets the contract uuid for the Cloud Tenant.
   * @returns {string} contract uuid
   */
  get contractUuid(): string {
    return this._json.contract_uuid;
  }

  /**
   * Gets the location id of the Cloud Tenant.
   * @returns {string} location id
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the end point of the Cloud Tenant.
   * @returns {string} end point
   */
  get endPoint(): string {
    return this._json.endpoint;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {CloudTenantJson} the API __json__ object
   */
  get json(): CloudTenantJson {
    return Object.assign({}, this._json);
  }

  /**
   * Gets the storage usage for the Cloud Tenant
   * @param {number} start
   * @param {number} end
   * @param {number} limit
   * @param {PerfIntervalType} interval
   * @returns {Promise<VccPerfSample[]>} array of Vcc Perf Samples
   */
  async getStorageUsageFor(start: number, end: number, limit: number,
                           interval: PerfIntervalType): Promise<Array<VccPerfSample>> {
    return Iland.getHttp().get(`/vcc-backup-tenants/${this.uuid}/storage-usage`, {
      params: {
        start: start,
        end: end,
        limit: limit,
        interval: interval
      }
    }).then((response) => {
      const samples = response.data.data as Array<VccPerfSampleJson>;
      return samples.map((sample) => new VccPerfSample(sample));
    });
  }

  /**
   * Upgrades the contract for the Cloud Tenant
   * @param {UpdateTenantContractRequest} contract
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async upgradeTenantContract(updateContractRequest: UpdateTenantContractRequest): Promise<any> {
    return Iland.getHttp().post(`/vcc-backup-tenants/${this.uuid}/actions/upgrade-contract`,
        updateContractRequest.json);
  }

  /**
   * Get the backup history for the Cloud Tenant
   * @param {number} offset
   * @param {number} limit
   * @returns {Promise<CloudTenantBackupHistory[]>} array of Cloud Tenant Backup History objects
   */
  async getBackupHistoryFor(offset?: number, limit?: number): Promise<Array<CloudTenantBackupHistory>> {
    return Iland.getHttp().get(`/vcc-backup-tenants/${this.uuid}/backup-history`, {
      params: {
        offset: offset,
        limit: limit
      }
    }).then((response) => {
      const json = response.data.data as Array<CloudTenantBackupHistoryJson>;
      return json.map((backupHistoryJson) => new CloudTenantBackupHistory(backupHistoryJson));
    });
  }
}
