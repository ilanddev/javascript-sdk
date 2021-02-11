import { VmIntegratedBackupStatusJson } from './vm-integrated-backup-status-json';

/**
 * VM Integrated Backup Status Detail JSON.
 */
export interface VmIntegratedBackupStatusDetailJson extends VmIntegratedBackupStatusJson {
  has_integrated_backups: boolean;
}
