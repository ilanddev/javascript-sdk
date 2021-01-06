import { BackupRestoreTask } from './backup-restore-task';
import { BackupRestoreTaskListJson } from './__JSON__/backup-restore-task-list-json';

/**
 * Backup restore task list.
 */
/* istanbul ignore next: autogenerated */
export class BackupRestoreTaskList {

  constructor(private _json: BackupRestoreTaskListJson) {
  }

  /**
   * Get data.
   * @returns {Array<BackupRestoreTask>}
   */
  get data(): Array<BackupRestoreTask> {
    return this._json.data.map(it => new BackupRestoreTask(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupRestoreTaskListJson}
   */
  get json(): BackupRestoreTaskListJson {
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
