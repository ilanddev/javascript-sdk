import { FileType } from './file-type-enum';

/**
 * Search vDC recoverable files and folders filters JSON.
 * The request params are required to be in camelCase vs snake_case.
 */
export interface SearchVdcRecoverableFilesAndFoldersFiltersJson {
  startTime?: number;
  endTime?: number;
  search?: string;
  backupGroupUids?: Array<string>;
  backupRunUids?: Array<string>;
  vmUuids?: Array<string>;
  fileType: FileType;
}
