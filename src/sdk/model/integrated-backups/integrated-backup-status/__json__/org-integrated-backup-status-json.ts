import { IntegratedBackupStatus } from './integrated-backup-status';
import { VdcIntegratedBackupStatusJson } from './vdc-integrated-backup-status-json';

/**
 * Org Integrated Backup Status JSON.
 */
export interface OrgIntegratedBackupStatusJson {
  org_uuid: string;
  status: IntegratedBackupStatus;
  vdc_statuses: Array<VdcIntegratedBackupStatusJson>;
}
