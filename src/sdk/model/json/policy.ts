import { Permission } from './permission';
import { EntityDomain } from './role';

/**
 * Interface for Policy JSON properties.
 */
export interface PolicyJson {
  entity_uuid: string;
  domain: EntityDomain;
  type: PolicyType;
  permissions: Array<Permission>;
}

export type PolicyType = 'ADMIN' | 'READ_ONLY' | 'CUSTOM';