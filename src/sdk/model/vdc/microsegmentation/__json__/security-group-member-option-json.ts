import { SecurityGroupMemberOptionPropertyJson } from './security-group-member-option-property-json';

/**
 * Security Group Member Option JSON
 */
export interface SecurityGroupMemberOptionJson {
  type: string;
  name: string;
  properties: Array<SecurityGroupMemberOptionPropertyJson>;
}
