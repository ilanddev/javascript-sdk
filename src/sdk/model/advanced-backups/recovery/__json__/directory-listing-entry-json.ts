import { FStatInfoJson } from './f-stat-info-json';
import { DirEntryType } from './dir-entry-type-enum';

/**
 * Directory listing entry JSON.
 */
export interface DirectoryListingEntryJson {
  f_stat_info?: FStatInfoJson;
  name: string;
  type: DirEntryType;
  full_path: string;
}
