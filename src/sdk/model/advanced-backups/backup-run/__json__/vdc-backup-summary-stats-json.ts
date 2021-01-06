import { BackupSummaryStatsJson } from './backup-summary-stats-json';
import { BackupGroupSummaryStatsJson } from './backup-group-summary-stats-json';

/**
 * vDC Backup Summary Stats JSON.
 */
export interface VdcBackupSummaryStatsJson {
  vdc_uuid: string;
  stats: BackupSummaryStatsJson;
  backup_group_stats: Array<BackupGroupSummaryStatsJson>;
}
