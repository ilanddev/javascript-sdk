import { ReplicationPeriodicity } from './replication-periodicity';
import { ReplicationTargetSettings } from '../replication-target-settings';

/**
 * Snapshot Replication Copy Policy JSON.
 */
export interface SnapshotReplicationCopyPolicyJson {
  copy_partial: boolean;
  days_to_keep: number;
  multiplier: number;
  periodicity: ReplicationPeriodicity;
  target: ReplicationTargetSettings;
}
