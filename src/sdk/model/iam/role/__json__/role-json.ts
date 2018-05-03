import { PolicyJson } from '../../policy/__json__/policy-json';
import { RoleType } from './role-type';

/**
 * Interface for Role JSON properties.
 */
export interface RoleJson {
  uuid: string;
  company_id: string;
  name: string;
  description: string;
  policies: Array<PolicyJson>;
  type: RoleType;
}
