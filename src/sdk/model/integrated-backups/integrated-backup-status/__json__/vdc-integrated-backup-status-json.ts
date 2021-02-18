import { IntegratedBackupStatus } from './integrated-backup-status';
import { VappIntegratedBackupStatusJson } from './vapp-integrated-backup-status-json';

/**
 * vDC Integrated Backup Status JSON.
 */
export interface VdcIntegratedBackupStatusJson {
  vdc_uuid: string;
  status: IntegratedBackupStatus;
  vapp_statuses: Array<VappIntegratedBackupStatusJson>;
}
