/**
 * Nessus Host API JSON interface.
 */
export interface NessusHostJson {
  host_id: number;
  host_index: string;
  host_name: number;
  progress: string;
  critical: number;
  high: number;
  medium: number;
  low: number;
  info: number;
  total_checks_considered: number;
  num_checks_considered: number;
  scan_progress_total: number;
  scan_progress_current: number;
  score: number;
}
