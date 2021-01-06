import { RestoreTaskObjectStatus } from './restore-task-object-status-enum';
import { ProtectionSourceJson } from '../../backup-group/__json__/protection-source-json';

/**
 * Restore task object state JSON.
 */
export interface RestoreTaskObjectStateJson {
  status: RestoreTaskObjectStatus;
  error?: string;
  source: ProtectionSourceJson;
}
