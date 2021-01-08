import { TaskJson } from '../../../task/__json__/task-json';
import { BackupRestoreTaskJson } from './backup-restore-task-json';

/**
 * Backup restore task detail JSON.
 */
export interface BackupRestoreTaskDetailJson extends BackupRestoreTaskJson {
  task_uuid?: string;
  username?: string;
  user_full_name?: string;
}
