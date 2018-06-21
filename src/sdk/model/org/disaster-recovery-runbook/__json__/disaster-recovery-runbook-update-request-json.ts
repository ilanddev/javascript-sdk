import { RecoveryGroupDescriptorJson } from './recovery-group-descriptor-json';

/**
 * Disaster recovery runbook create request JSON interface.
 */
export interface DisasterRecoveryRunbookUpdateRequestJson {
  name: string;
  description: string;
  recovery_groups: Array<RecoveryGroupDescriptorJson>;
}
