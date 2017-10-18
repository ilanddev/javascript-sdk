import { PolicyJson } from './policy';

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

export type RoleType = 'CUSTOM' | 'BUILT_IN';

// TODO
export type EntityDomain = 'ORG';