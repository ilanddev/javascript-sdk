import { CopySnapshotTaskStatusJson } from './copy-snapshot-task-status-json';
import { CopyRunStatsJson } from './copy-run-stats-json';
import { StatusCopyRun } from './status-copy-run';
import { SnapshotTargetSettingsJson } from './snapshot-target-settings-json';

/**
 * Copy Run JSON.
 */
export interface CopyRunJson {
  copy_snapshot_tasks: Array<CopySnapshotTaskStatusJson>;
  error?: string;
  expiry_time?: number;
  run_start_time: number;
  stats?: CopyRunStatsJson;
  status: StatusCopyRun;
  target: SnapshotTargetSettingsJson;
}
