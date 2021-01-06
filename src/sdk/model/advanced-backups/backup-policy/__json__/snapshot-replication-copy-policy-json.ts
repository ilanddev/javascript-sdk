import { ReplicationPeriodicity } from './replication-periodicity';
import { ReplicationTargetSettingsJson } from './replication-target-settings-json';

/**
 * Snapshot Replication Copy Policy JSON.
 */
export interface SnapshotReplicationCopyPolicyJson {
  copy_partial: boolean;
  days_to_keep: number;
  multiplier: number;
  periodicity: ReplicationPeriodicity;
  target: ReplicationTargetSettingsJson;
}
