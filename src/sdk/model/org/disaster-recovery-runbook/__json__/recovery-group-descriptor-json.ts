import { RecoveryGroupType } from './recovery-group-type';

/**
 * Recovery group descriptor request JSON.
 */
export interface RecoveryGroupDescriptorJson {
  name: string;
  uuid: string;
  type: RecoveryGroupType;
  order_index: number;
}
