import { IntegratedBackupStatus } from './integrated-backup-status';

/**
 * VM Integrated Backup Status JSON.
 */
export interface VmIntegratedBackupStatusJson {
  vm_uuid: string;
  status: IntegratedBackupStatus;
}
