import { VappIntegratedBackupStatusJson } from './vapp-integrated-backup-status-json';

/**
 * vApp Integrated Backup Status Detail JSON.
 */
export interface VappIntegratedBackupStatusDetailJson extends VappIntegratedBackupStatusJson {
  has_integrated_backups: boolean;
}
