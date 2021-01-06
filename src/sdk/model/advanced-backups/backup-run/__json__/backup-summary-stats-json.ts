/**
 * Backup Summary Stats JSON.
 */
export interface BackupSummaryStatsJson {
  num_canceled_runs: number;
  num_failed_runs: number;
  num_sla_violations: number;
  num_successful_runs: number;
  num_running_runs: number;
  average_run_time_millis: number;
  fastest_run_time_millis: number;
  slowest_run_time_millis: number;
  total_bytes_read_from_source: number;
  total_logical_backup_size_bytes: number;
  total_physical_backup_size_bytes: number;
}
