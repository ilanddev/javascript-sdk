import { ShutdownPolicy } from '../../../vpg/vpg-failover/__json__/vpg-failover-shutdown-policy-type';

export interface DisasterRecoveryRunbookExecuteJson {
  shutdown_policy: ShutdownPolicy;
}
