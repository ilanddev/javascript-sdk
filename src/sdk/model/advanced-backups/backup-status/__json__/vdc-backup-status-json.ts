import { BackupGroupStatusDescriptorJson } from './backup-group-status-descriptor-json';
import { VappBackupStatusJson } from './vapp-backup-status-json';

/**
 * vDC Backup Status JSON.
 */
export interface VdcBackupStatusJson {
  uuid: string;
  backup_groups: Array<BackupGroupStatusDescriptorJson>;
  child_vapp_statuses: Array<VappBackupStatusJson>;
}
