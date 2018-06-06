import { RecoveryGroupDescriptorJson } from './recovery-group-descriptor-json';

/**
 * Disaster recovery runbook JSON API interface.
 */
export interface DisasterRecoveryRunbookJson {
  crm: string;
  location_id: string;
  org_uuid: string;
  description: string;
  created_date: number;
  last_test: number;
  recovery_groups: Array<RecoveryGroupDescriptorJson>;
  uuid: string;
  name: string;
  deleted: boolean;
  deleted_date: number;
  updated_date: number;
}
