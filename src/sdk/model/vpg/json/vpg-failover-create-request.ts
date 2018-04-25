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

/**
 * Enumeration of possible commit policy types
 */
export type CommitPolicy = 'ROLLBACK' | 'COMMIT' | 'NONE';

/**
 * Enumeration of possible shutdown policy types
 */
export type ShutdownPolicy = 'NONE' | 'SHUTDOWN' | 'FORCE_SHUTDOWN';
