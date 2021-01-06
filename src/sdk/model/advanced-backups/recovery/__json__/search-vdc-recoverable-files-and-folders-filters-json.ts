import { FileType } from './file-type-enum';

/**
 * Search vDC recoverable files and folders JSON.
 */
export interface SearchVdcRecoverableFilesAndFoldersFiltersJson {
  start_time?: number;
  end_time?: number;
  search?: string;
  backup_group_uids?: Array<string>;
  vm_uuids?: Array<string>;
  file_type: FileType;
}
