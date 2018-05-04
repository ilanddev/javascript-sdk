import { PolicyType } from './policy-type';
import { EntityDomainType } from '../../../common/__json__/entity-domain-type';
import { PermissionType } from '../../permission/__json__/permission-type';

/**
 * Interface for Policy JSON properties.
 */
export interface PolicyJson {
  entity_uuid: string;
  domain: EntityDomainType;
  type: PolicyType;
  permissions: Array<PermissionType>;
}
