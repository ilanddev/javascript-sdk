import { OrgIntegratedBackupStatusJson } from './org-integrated-backup-status-json';

/**
 * Company Location Integrated Backup Status JSON.
 */
export interface CompanyLocationIntegratedBackupStatusJson {
  company_id: string;
  location_id: string;
  org_statuses: Array<OrgIntegratedBackupStatusJson>;
}
