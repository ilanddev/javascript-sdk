import { SecurityTagObjectPagingParamsJson } from './security-tag-object-paging-params-json';
import { SecurityTagObjectJson } from './security-tag-object-json';

/**
 * Security Tag Object List JSON
 */
export interface SecurityTagObjectListJson {
  current_page_parameters: SecurityTagObjectPagingParamsJson;
  next_page_parameters: SecurityTagObjectPagingParamsJson;
  total_records: number;
  last_page: boolean;
  data: Array<SecurityTagObjectJson>;
}
