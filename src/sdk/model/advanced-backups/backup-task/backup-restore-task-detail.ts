import { BackupRestoreTask } from './backup-restore-task';
import { Task } from '../../task/task';
import { BackupRestoreTaskDetailJson } from './__JSON__/backup-restore-task-detail-json';

/**
 * Backup restore task detail.
 */
/* istanbul ignore next: autogenerated */
export class BackupRestoreTaskDetail extends BackupRestoreTask {

  constructor(private _json: BackupRestoreTaskDetailJson) {
    super(_json);
  }

  /**
   * Get the UUID of the associated iland task.
   * @returns {string | null}
   */
  get taskUuid(): string | null {
    return this._json.task_uuid ? this._json.task_uuid : null;
  }

  /**
   * Get the full name of the user who initiated the restore operation.
   * @returns {string | null}
   */
  get userFullName(): string | null {
    return this._json.user_full_name ? this._json.user_full_name : null;
  }

  /**
   * Get the username of the user who initiated the restore operation.
   * @returns {string | null}
   */
  get username(): string | null {
    return this._json.username ? this._json.username : null;
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupRestoreTaskDetailJson}
   */
  get json(): BackupRestoreTaskDetailJson {
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
