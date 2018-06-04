import { RecoveryGroupDescriptorJson } from './recovery-group-descriptor-json';

/**
 * Disaster recovery runbook create request JSON interface.
 */
export interface DisasterRecoveryRunbookCreateRequestJson {
  name: string;
  description: string;
  recovery_groups: Array<RecoveryGroupDescriptorJson>;
}
