/**
 * Copy Run Stats JSON.
 */
export interface CopyRunStatsJson {
  end_time?: number;
  is_incremental?: boolean;
  logical_bytes_transferred: number;
  logical_size_bytes: number;
  logical_transfer_rate_bps: number;
  physical_bytes_transferred: number;
  start_time?: number;
}
