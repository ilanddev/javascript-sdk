import { OrgBackupStatusJson } from './org-backup-status-json';

/**
 * Company Location Backup Status JSON.
 */
export interface CompanyLocationBackupStatusJson {
  location_id: string;
  company_id: string;
  child_org_statuses: Array<OrgBackupStatusJson>;
}
