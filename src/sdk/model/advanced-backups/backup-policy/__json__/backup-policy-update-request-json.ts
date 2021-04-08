import { BlackoutPeriodJson } from './blackout-period-json';
import { ExtendedRetentionPolicyJson } from './extended-retention-policy-json';
import { SchedulingPolicyJson } from './scheduling-policy-json';
import { SnapshotArchivalCopyPolicyJson } from './snapshot-archival-copy-policy-json';
import { SnapshotReplicationCopyPolicyJson } from './snapshot-replication-copy-policy-json';

/**
 * Backup Policy Update Request JSON.
 */
export interface BackupPolicyUpdateRequestJson {
  blackout_periods: Array<BlackoutPeriodJson>;
  days_to_keep: number;
  days_to_keep_log: number;
  description: string;
  extended_retention_policies: Array<ExtendedRetentionPolicyJson>;
  full_scheduling_policy: SchedulingPolicyJson;
  incremental_scheduling_policy: SchedulingPolicyJson;
  log_scheduling_policy: SchedulingPolicyJson;
  name: string;
  retries: number;
  retry_interval_mins: number;
  skip_interval_mins: number;
  snapshot_archival_copy_policies: Array<SnapshotArchivalCopyPolicyJson>;
  snapshot_replication_copy_policies: Array<SnapshotReplicationCopyPolicyJson>;
}
