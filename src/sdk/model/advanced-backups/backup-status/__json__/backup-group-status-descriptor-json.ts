import { BackupConfigStatus } from './backup-config-status';

/**
 * Backup Group Status Descriptor JSON.
 */
export interface BackupGroupStatusDescriptorJson {
  name: string;
  uid: string;
  backup_status: BackupConfigStatus;
}
