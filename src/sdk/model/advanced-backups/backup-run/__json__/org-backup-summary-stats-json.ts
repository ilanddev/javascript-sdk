import { BackupSummaryStatsJson } from './backup-summary-stats-json';
import { VdcBackupSummaryStatsJson } from './vdc-backup-summary-stats-json';

/**
 * Org Backup Summary Stats JSON.
 */
export interface OrgBackupSummaryStatsJson {
  org_uuid: string;
  stats: BackupSummaryStatsJson;
  vdc_stats: Array<VdcBackupSummaryStatsJson>;
}
