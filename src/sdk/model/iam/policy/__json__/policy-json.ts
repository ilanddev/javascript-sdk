import { PolicyType } from './policy-type';
import { IamEntityType } from '../../../common/__json__/iam-entity-type';
import { PermissionType } from '../../permission/__json__/permission-type';

/**
 * Interface for Policy JSON properties.
 */
export interface PolicyJson {
  entity_uuid: string;
  domain: IamEntityType;
  type: PolicyType;
  permissions: Array<PermissionType>;
}
