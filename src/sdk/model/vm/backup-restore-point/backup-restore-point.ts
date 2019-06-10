import { BackupRestorePointJson, BackupRestorePointType } from './__json__/backup-restore-point-json';

/**
 * VM Backup Restore Point.
 */
export class BackupRestorePoint {

  constructor(private _json: BackupRestorePointJson) {
  }

  /**
   * Gets the name of the restore point.
   * @returns {string} the name
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Gets the timestamp of the backup restore point.
   * @returns {Date} date of the restore point
   */
  get timestamp(): Date {
    return new Date(this._json.time);
  }

  /**
   * Gets the Type for the restore point.
   * @returns {BackupRestorePointType}
   */
  get type(): BackupRestorePointType {
    return this._json.type;
  }

  /**
   * Gets the Job Name for the restore point.
   * @returns {string}
   */
  get jobName(): string {
    return this._json.job_name;
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
   * @returns {BackupRestorePointJson} the JSON representation
   */
  get json(): BackupRestorePointJson {
    return Object.assign({}, this._json);
  }

}
