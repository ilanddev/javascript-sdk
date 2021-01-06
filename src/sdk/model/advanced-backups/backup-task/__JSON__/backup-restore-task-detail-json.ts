import { TaskJson } from '../../../task/__json__/task-json';
import { BackupRestoreTaskJson } from './backup-restore-task-json';

/**
 * Backup restore task detail JSON.
 */
export interface BackupRestoreTaskDetailJson extends BackupRestoreTaskJson {
  task_detail?: TaskJson;
}
