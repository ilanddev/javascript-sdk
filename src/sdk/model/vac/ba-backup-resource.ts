import { BaBackupResourceJson } from './__json__/ba-backup-resource';
import { BaBackupRepository } from './ba-backup-repository';
import { BaWanAccelerator } from './ba-wan-accelerator';

/* istanbul ignore next: autogenerated */
export class BaBackupResource {

  constructor(private _json: BaBackupResourceJson) {
  }

  /**
   * Get id.
   * @returns {string}
   */
  get id(): string {
    return this._json.id;
  }

  /**
   * Get cloud repository name.
   * @returns {string}
   */
  get cloudRepositoryName(): string {
    return this._json.cloud_repository_name;
  }

  /**
   * Get storage quota.
   * @returns {number}
   */
  get storageQuota(): number {
    return this._json.storage_quota;
  }

  /**
   * Get storage quota units.
   * @returns {string}
   */
  get storageQuotaUnits(): string {
    return this._json.storage_quota_units;
  }

  /**
   * Get vms quota.
   * @returns {number}
   */
  get vmsQuota(): number {
    return this._json.vms_quota;
  }

  /**
   * Get workstations quota.
   * @returns {number}
   */
  get workstationsQuota(): number {
    return this._json.workstations_quota;
  }

  /**
   * Get traffic quota.
   * @returns {number}
   */
  get trafficQuota(): number {
    return this._json.traffic_quota;
  }

  /**
   * Get traffic quota units.
   * @returns {string}
   */
  get trafficQuotaUnits(): string {
    return this._json.traffic_quota_units;
  }

  /**
   * Get wan acceleration enabled.
   * @returns {boolean}
   */
  get wanAccelerationEnabled(): boolean {
    return this._json.wan_acceleration_enabled;
  }

  /**
   * Get used storage quota.
   * @returns {number}
   */
  get usedStorageQuota(): number {
    return this._json.used_storage_quota;
  }

  /**
   * Get used storage quota units.
   * @returns {string}
   */
  get usedStorageQuotaUnits(): string {
    return this._json.used_storage_quota_units;
  }

  /**
   * Get used traffic quota.
   * @returns {number}
   */
  get usedTrafficQuota(): number {
    return this._json.used_traffic_quota;
  }

  /**
   * Get used traffic quota units.
   * @returns {string}
   */
  get usedTrafficQuotaUnits(): string {
    return this._json.used_traffic_quota_units;
  }

  /**
   * Get interval start time.
   * @returns {string}
   */
  get intervalStartTime(): string {
    return this._json.interval_start_time;
  }

  /**
   * Get interval end time.
   * @returns {string}
   */
  get intervalEndTime(): string {
    return this._json.interval_end_time;
  }

  /**
   * Get backup repository.
   * @returns {BaBackupRepository}
   */
  get backupRepository(): BaBackupRepository {
    return new BaBackupRepository(this._json.backup_repository);
  }

  /**
   * Get wan accelerator.
   * @returns {BaWanAccelerator}
   */
  get wanAccelerator(): BaWanAccelerator {
    return new BaWanAccelerator(this._json.wan_accelerator);
  }

  /**
   * Get the json representation of this class.
   * @returns {BaBackupResourceJson}
   */
  get json(): BaBackupResourceJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
