import { ReplicationPeriodicity } from './replication-periodicity';
import { ArchivalExternalTargetJson } from './archival-external-target-json';

/**
 * Snapshot Archival Policy JSON.
 */
export interface SnapshotArchivalCopyPolicyJson {
  copy_partial: boolean;
  days_to_keep: number;
  multiplier: number;
  periodicity: ReplicationPeriodicity;
  target: ArchivalExternalTargetJson;
}
