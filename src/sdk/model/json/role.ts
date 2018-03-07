import { PolicyJson } from './policy';
import { Policy } from '../policy';

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

export interface RoleInterface {
  policies: Array<Policy>;
  companyId: string;
  name: string;
  description: string;
  getPolicy(entityUuid: string): Policy | null;
  toString(): string;
}

export type RoleType = 'CUSTOM' | 'BUILT_IN';
