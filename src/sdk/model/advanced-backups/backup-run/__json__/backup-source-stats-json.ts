/**
 * Backup Source Stats JSON.
 */
export interface BackupSourceStatsJson {
  admitted_time?: number;
  end_time?: number;
  start_time: number;
  time_taken_millis?: number;
  total_bytes_read_from_source: number;
  total_bytes_to_read_from_source: number;
  total_logical_backup_size_bytes: number;
  total_physical_backup_size_bytes: number;
  total_source_size_bytes: number;
}
