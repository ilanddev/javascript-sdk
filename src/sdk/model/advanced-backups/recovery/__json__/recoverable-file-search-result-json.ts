import { FileSearchResultType } from './file-search-result-type-enum';

/**
 * Recoverable file search result. JSON.
 */
export interface RecoverableFileSearchResultJson {
  location_id: string;
  company_id: string;
  org_uuid: string;
  vdc_uuid: string;
  vapp_uuid: string;
  vm_uuid: string;
  filename: string;
  is_folder: boolean;
  backup_group_uid: string;
  type: FileSearchResultType;
  vm_name: string;
}
