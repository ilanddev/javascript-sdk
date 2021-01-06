import { ProtectionSourceJson } from '../../backup-group/__json__/protection-source-json';
import { CopyRunStatsJson } from './copy-run-stats-json';
import { StatusCopySnapshotTaskStatus } from './status-copy-snapshot-task-status';

/**
 * Copy Snapshot Task Status JSON.
 */
export interface CopySnapshotTaskStatusJson {
  error?: string;
  source: ProtectionSourceJson;
  stats: CopyRunStatsJson;
  status: StatusCopySnapshotTaskStatus;
  task_end_time?: number;
  task_start_time: number;
}
