import { BackupRestorePointJson } from './json/backup-restore-point';

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
    return new Date(this._json.timestamp);
  }

  /**
   * Gets the name of the backup server that the restore point is stored on.
   * @returns {string} the name of the backup server
   */
  get backupServerName(): string {
    return this._json.backup_server_name;
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
