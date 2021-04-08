import { BackupGroupStatusDescriptorJson } from './backup-group-status-descriptor-json';

/**
 * VM Backup Status JSON.
 */
export interface VmBackupStatusJson {
  uuid: string;
  backup_groups: Array<BackupGroupStatusDescriptorJson>;
}
