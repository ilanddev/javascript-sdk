import { BackupRunJson } from './backup-run-json';
import { CopyRunJson } from './copy-run-json';

/**
 * Backup Group Run JSON.
 */
export interface BackupGroupRunJson {
  uid: string;
  backup_run: BackupRunJson;
  copy_runs: Array<CopyRunJson>;
  backup_group_uid: string;
  backup_group_name: string;
  org_uuid: string;
  vdc_uuid: string;
  company_id: string;
  location_id: string;
}
