import { EntityDomainType } from './entity-domain';
import { PermissionType } from './permission-type';

/**
 * Interface for Policy JSON properties.
 */
export interface PolicyJson {
  entity_uuid: string;
  domain: EntityDomainType;
  type: PolicyType;
  permissions: Array<PermissionType>;
}

export type PolicyType = 'ADMIN' | 'READ_ONLY' | 'CUSTOM';
