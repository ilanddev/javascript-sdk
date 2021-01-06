/**
 * Snapshot Version JSON.
 */
export interface SnapshotVersionJson {
  backup_run_uid: string;
  start_time: number;
  delta_size_bytes: number;
  attempt_number: number;
  logical_size_bytes: number;
  app_consistent: boolean;
  full_backup: boolean;
}
