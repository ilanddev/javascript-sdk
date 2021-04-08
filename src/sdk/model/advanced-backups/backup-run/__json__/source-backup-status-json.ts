import { ProtectionSourceJson } from '../../backup-group/__json__/protection-source-json';
import { BackupSourceStatsJson } from './backup-source-stats-json';
import { StatusSourceBackupStatus } from './status-source-backup-status';

/**
 * Source Backup Status JSON.
 */
export interface SourceBackupStatusJson {
  error?: string;
  is_full_backup: boolean;
  num_restarts: number;
  quiesced: boolean;
  sla_violated: boolean;
  source: ProtectionSourceJson;
  stats: BackupSourceStatsJson;
  status: StatusSourceBackupStatus;
  warnings: Array<string>;
}
