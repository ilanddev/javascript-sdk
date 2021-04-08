import { VmSnapshotRefJson } from './vm-snapshot-ref-json';
import { AlternateVappParamsJson } from './alternate-vapp-params-json';

/**
 * Restore VM Backups in vDC params JSON.
 */
export interface RestoreVmBackupsInVdcParamsJson {
  snapshot_refs: Array<VmSnapshotRefJson>;
  task_name: string;
  alternate_vapp?: AlternateVappParamsJson;
  powered_on: boolean;
  prefix: string;
  suffix: string;
  continue_on_error: boolean;
}
