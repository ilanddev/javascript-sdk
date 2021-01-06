import { FileType } from './file-type-enum';

/**
 * Search VM recoverable files and folders JSON.
 */
export interface SearchVmRecoverableFilesAndFoldersFiltersJson {
  start_time?: number;
  end_time?: number;
  search?: string;
  backup_group_uids?: Array<string>;
  file_type?: FileType;
}
