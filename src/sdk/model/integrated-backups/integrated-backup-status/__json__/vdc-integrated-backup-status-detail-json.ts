import { VdcIntegratedBackupStatusJson } from './vdc-integrated-backup-status-json';

/**
 * Vdc Integrated Backup Status Detail JSON.
 */
export interface VdcIntegratedBackupStatusDetailJson extends VdcIntegratedBackupStatusJson {
  has_integrated_backups: boolean;
}
