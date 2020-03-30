import { SecurityGroupMemberOptionPagingParamsJson } from './security-group-member-option-paging-params-json';
import { SecurityGroupMemberOptionJson } from './security-group-member-option-json';

/**
 * Security Group Member Option List JSON
 */
export interface SecurityGroupMemberOptionListJson {
  current_page_parameters: SecurityGroupMemberOptionPagingParamsJson;
  next_page_parameters: SecurityGroupMemberOptionPagingParamsJson;
  total_records: number;
  last_page: boolean;
  data: Array<SecurityGroupMemberOptionJson>;
}
