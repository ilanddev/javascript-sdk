import { PolicyJson } from './policy';

/**
 * Role Creation Request JSON properties.
 */
export interface RoleCreationRequestJson {
  company_id: string;
  name: string;
  description: string;
  policies: Array<PolicyJson>;
}
