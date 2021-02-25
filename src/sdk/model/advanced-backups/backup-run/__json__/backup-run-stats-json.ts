/**
 * Backup Run Stats JSON.
 */
export interface BackupRunStatsJson {
  admitted_time?: number;
  end_time?: number;
  num_canceled_tasks: number;
  num_failed_tasks: number;
  num_successful_tasks: number;
  start_time_millis: number;
  start_time_usecs: number; // deprecated
  time_taken_millis?: number;
  total_bytes_read_from_source: number;
  total_bytes_to_read_from_source: number;
  total_logical_backup_size_bytes: number;
  total_physical_backup_size_bytes: number;
  total_source_size_bytes: number;
}
