import { RunType } from './run-type';
import { ReplicationPeriodicity } from './replication-periodicity';

/**
 * Extended Retention Policy JSON.
 */
export interface ExtendedRetentionPolicyJson {
  backup_run_type: RunType;
  days_to_keep: number;
  multiplier: number;
  periodicity: ReplicationPeriodicity;
}
