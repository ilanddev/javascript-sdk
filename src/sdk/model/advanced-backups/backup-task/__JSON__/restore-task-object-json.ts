import { ProtectionSourceJson } from '../../backup-group/__json__/protection-source-json';

/**
 * Restore task object JSON.
 */
export interface RestoreTaskObjectJson {
  backup_run_uid: string;
  source: ProtectionSourceJson;
}
