import { BackupSummaryStatsJson } from './backup-summary-stats-json';

/**
 * Backup Group Summary Stats JSON.
 */
export interface BackupGroupSummaryStatsJson {
  backup_group_uid: string;
  stats: BackupSummaryStatsJson;
}
