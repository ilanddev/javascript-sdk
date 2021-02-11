import { IntegratedBackupStatus } from './integrated-backup-status';
import { VmIntegratedBackupStatusJson } from './vm-integrated-backup-status-json';

/**
 * vApp Integrated Backup Status JSON.
 */
export interface VappIntegratedBackupStatusJson {
  vapp_uuid: string;
  status: IntegratedBackupStatus;
  vm_statuses: Array<VmIntegratedBackupStatusJson>;
}
