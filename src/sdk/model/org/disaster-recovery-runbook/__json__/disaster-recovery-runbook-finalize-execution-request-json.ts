import { CommitPolicy } from '../../../vpg/vpg-failover/__json__/vpg-failover-commit-policy-type';

export interface DisasterRecoveryRunbookFinalizeExecutionRequestJson {
  parent_runbook_task_uuid: string;
  finalize_recovery_params: { [key: string]: CommitPolicy };
}
