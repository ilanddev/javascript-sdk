import { VmBackupStatusJson } from './vm-backup-status-json';

/**
 * VM backup status detail JSON.
 */
export interface VmBackupStatusDetailJson extends VmBackupStatusJson {
  has_advanced_backups: boolean;
}
