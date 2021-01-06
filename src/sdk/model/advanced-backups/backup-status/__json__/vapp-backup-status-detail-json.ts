import { VappBackupStatusJson } from './vapp-backup-status-json';

/**
 * vApp backup status detail JSON.
 */
export interface VappBackupStatusDetailJson extends VappBackupStatusJson {
  has_advanced_backups: boolean;
}
