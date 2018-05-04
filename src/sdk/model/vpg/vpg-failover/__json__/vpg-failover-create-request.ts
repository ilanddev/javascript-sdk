import { CommitPolicy } from './vpg-failover-commit-policy-type';
import { ShutdownPolicy } from './vpg-failover-shutdown-policy-type';

/**
 * Vpg Failover Create Request JSON properties.
 */
export interface VpgFailoverCreateRequestJson {
  checkpoint_identifier: string;
  commit_policy: CommitPolicy;
  shutdown_policy: ShutdownPolicy;
  time_to_wait_before_shutdown_in_sec: number;
  commit_value: number;
}
