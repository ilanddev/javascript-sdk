import { SecurityGroupMemberJson } from './security-group-member-json';
import { DynamicMemberJson } from './dynamic-member-json';

/**
 * Security Group Update Request JSON
 */
export interface SecurityGroupUpdateRequestJson {
  object_id: string;
  name: string;
  description: string;
  scope: string;
  is_temporal: boolean;
  inheritance_allowed: boolean;
  included_member: Array<SecurityGroupMemberJson>;
  excluded_member: Array<SecurityGroupMemberJson>;
  dynamic_member: Array<DynamicMemberJson>;
}
