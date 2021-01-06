/**
 * List backup snapshot files and folders filters JSON.
 */
export interface ListBackupSnapshotFilesAndFoldersFiltersJson {
  attempt_number?: number;
  pagination_cookie?: string;
  max_entries?: number;
  stat_file_entries?: boolean;
  browser_index_data?: boolean;
}
