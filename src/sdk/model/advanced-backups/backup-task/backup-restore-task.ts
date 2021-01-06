import { RestoreTaskStatus } from './__JSON__/restore-task-status-enum';
import { RestoreTaskType } from './__JSON__/restore-task-type';
import { BackupRestoreTaskJson } from './__JSON__/backup-restore-task-json';
import { RestoreTaskObject } from './restore-task-object';
import { RestoreTaskObjectState } from './restore-task-object-state';
import { VmRecoveryOptions } from './vm-recovery-options';

/**
 * Backup restore task.
 */
/* istanbul ignore next: autogenerated */
export class BackupRestoreTask {

  constructor(private _backupRestoreTaskJson: BackupRestoreTaskJson) {
  }

  /**
   * Get task name.
   * @returns {string}
   */
  get taskName(): string {
    return this._backupRestoreTaskJson.task_name;
  }

  /**
   * Get location id.
   * @returns {string}
   */
  get locationId(): string {
    return this._backupRestoreTaskJson.location_id;
  }

  /**
   * Get company id.
   * @returns {string}
   */
  get companyId(): string {
    return this._backupRestoreTaskJson.company_id;
  }

  /**
   * Get org uuid.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._backupRestoreTaskJson.org_uuid;
  }

  /**
   * Get vdc uuid.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._backupRestoreTaskJson.vdc_uuid;
  }

  /**
   * Get uid.
   * @returns {string}
   */
  get uid(): string {
    return this._backupRestoreTaskJson.uid;
  }

  /**
   * Get the UID of the associated backup group.
   * @returns {string}
   */
  get backupGroupUid(): string {
    return this._backupRestoreTaskJson.backup_group_uid;
  }

  /**
   * Get start time.
   * @returns {number}
   */
  get startTime(): number {
    return this._backupRestoreTaskJson.start_time;
  }

  /**
   * Get end time.
   * @returns {number | null}
   */
  get endTime(): number | null {
    return this._backupRestoreTaskJson.end_time || null;
  }

  /**
   * Get type.
   * @returns {RestoreTaskType}
   */
  get type(): RestoreTaskType {
    return this._backupRestoreTaskJson.type;
  }

  /**
   * Get status.
   * @returns {RestoreTaskStatus}
   */
  get status(): RestoreTaskStatus {
    return this._backupRestoreTaskJson.status;
  }

  /**
   * Get error message.
   * @returns {string | null}
   */
  get errorMessage(): string | null {
    return this._backupRestoreTaskJson.error_message || null;
  }

  /**
   * Get objects.
   * @returns {Array<RestoreTaskObject>}
   */
  get objects(): Array<RestoreTaskObject> {
    return this._backupRestoreTaskJson.objects.map(it => new RestoreTaskObject(it));
  }

  /**
   * Get object states.
   * @returns {Array<RestoreTaskObjectState>}
   */
  get objectStates(): Array<RestoreTaskObjectState> {
    return this._backupRestoreTaskJson.object_states.map(it => new RestoreTaskObjectState(it));
  }

  /**
   * Get the VM recovery options that were selected for the restore.
   * Only applicable if the type of task is {RestoreTaskType.RESTORE_VMS}.
   */
  get vmRecoveryOptions(): VmRecoveryOptions | null {
    return this._backupRestoreTaskJson.vm_recovery_options ?
      new VmRecoveryOptions(this._backupRestoreTaskJson.vm_recovery_options) : null;
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupRestoreTaskJson}
   */
  get json(): BackupRestoreTaskJson {
    return Object.assign({}, this._backupRestoreTaskJson);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._backupRestoreTaskJson, undefined, 2);
  }
}
