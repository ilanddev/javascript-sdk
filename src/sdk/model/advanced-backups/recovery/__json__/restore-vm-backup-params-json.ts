import { AlternateVappParamsJson } from './alternate-vapp-params-json';

/**
 * Restore VM Backup Params JSON.
 */
export interface RestoreVmBackupParamsJson {
  backup_run_uid: string;
  task_name: string;
  alternate_vapp?: AlternateVappParamsJson;
  powered_on: boolean;
  prefix: string;
  suffix: string;
  continue_on_error: boolean;
}
