import { CloudTenantBackupHistoryJson } from './__json__/cloud-tenant-backup-history-json';

/**
 * Cloud Tenant Backup History.
 */
export class CloudTenantBackupHistory {

  constructor(private _json: CloudTenantBackupHistoryJson) {
  }

  /**
   * Get last result
   * @returns {string}
   */
  get lastResult(): string {
    return this._json.last_result;
  }

  /**
   * Get last active
   * @returns {number}
   */
  get lastActive(): number {
    return this._json.last_active;
  }

  /**
   * Get the string representation of the class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Get the JSON representation of this class.
   * @returns {CloudTenantBackupHistoryJson}
   */
  get json(): CloudTenantBackupHistoryJson {
    return Object.assign({}, this._json);
  }
}
