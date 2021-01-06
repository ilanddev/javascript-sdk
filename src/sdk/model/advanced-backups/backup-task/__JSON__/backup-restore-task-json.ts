import { RestoreTaskType } from './restore-task-type';
import { RestoreTaskStatus } from './restore-task-status-enum';
import { RestoreTaskObjectJson } from './restore-task-object-json';
import { RestoreTaskObjectStateJson } from './restore-task-object-state-json';
import { VmRecoveryOptionsJson } from './vm-recovery-options-json';

/**
 * Backup restore task JSON.
 */
export interface BackupRestoreTaskJson {
  task_name: string;
  location_id: string;
  company_id: string;
  org_uuid: string;
  vdc_uuid: string;
  uid: string;
  backup_group_uid: string;
  start_time: number;
  end_time?: number;
  type: RestoreTaskType;
  status: RestoreTaskStatus;
  error_message?: string;
  objects: Array<RestoreTaskObjectJson>;
  object_states: Array<RestoreTaskObjectStateJson>;
  vm_recovery_options?: VmRecoveryOptionsJson;
}
