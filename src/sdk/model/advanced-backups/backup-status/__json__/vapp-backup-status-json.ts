import { BackupGroupStatusDescriptorJson } from './backup-group-status-descriptor-json';
import { VmBackupStatusJson } from './vm-backup-status-json';

/**
 * vApp Backup Status JSON.
 */
export interface VappBackupStatusJson {
  uuid: string;
  backup_groups: Array<BackupGroupStatusDescriptorJson>;
  child_vm_statuses: Array<VmBackupStatusJson>;
}
