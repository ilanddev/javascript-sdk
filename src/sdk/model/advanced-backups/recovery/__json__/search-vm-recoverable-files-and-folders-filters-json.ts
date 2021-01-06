import { FileType } from './file-type-enum';

/**
 * Search VM recoverable files and folders filters JSON.
 * The request params are required to be in camelCase vs snake_case.
 */
export interface SearchVmRecoverableFilesAndFoldersFiltersJson {
  startTime?: number;
  endTime?: number;
  search?: string;
  backupGroupUids?: Array<string>;
  backupRunUids?: Array<string>;
  fileType?: FileType;
}
