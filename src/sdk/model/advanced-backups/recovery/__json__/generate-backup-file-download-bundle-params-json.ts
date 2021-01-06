import { FilesAndFoldersInfoJson } from './files-and-folders-info-json';

/**
 * Generate backup file download bundle params JSON.
 */
export interface GenerateBackupFileDownloadBundleParamsJson {
  task_name: string;
  backup_run_uid: string;
  files_and_folders: Array<FilesAndFoldersInfoJson>;
}
