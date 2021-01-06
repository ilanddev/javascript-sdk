import { RunType } from '../../backup-policy/__json__/run-type';
import { StatusBackupRun } from './status-backup-run';
import { SourceBackupStatusJson } from './source-backup-status-json';
import { BackupRunStatsJson } from './backup-run-stats-json';

/**
 * Backup Run JSON.
 */
export interface BackupRunJson {
  error_message?: string;
  success_message?: string;
  metadata_deleted: boolean;
  quiesced: boolean;
  run_type: RunType;
  sla_violated?: boolean;
  snapshots_deleted: boolean;
  snapshots_deleted_time?: number;
  source_backup_status: Array<SourceBackupStatusJson>;
  stats: BackupRunStatsJson;
  status: StatusBackupRun;
  warnings: Array<string>;
}
