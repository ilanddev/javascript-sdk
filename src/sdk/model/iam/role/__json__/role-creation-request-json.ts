import { PolicyJson } from '../../policy/__json__/policy-json';

/**
 * Role Creation Request JSON properties.
 */
export interface RoleCreationRequestJson {
  company_id: string;
  name: string;
  description: string;
  policies: Array<PolicyJson>;
}
