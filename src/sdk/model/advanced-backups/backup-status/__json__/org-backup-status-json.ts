import { VdcBackupStatusJson } from './vdc-backup-status-json';

/**
 * Org Backup Status JSON.
 */
export interface OrgBackupStatusJson {
  uuid: string;
  child_vdc_statuses: Array<VdcBackupStatusJson>;
}
