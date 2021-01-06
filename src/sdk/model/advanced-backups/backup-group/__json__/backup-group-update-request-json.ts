import { BackupGroupPriority } from './backup-group-priority';
import { BackupGroupQosType } from './backup-group-qos-type';
import { BackupGroupDiskUnitJson } from './backup-group-disk-unit-json';
import { BackupGroupIndexingPolicyJson } from './backup-group-indexing-policy-json';
import { BackupGroupSourceRefJson } from './backup-group-source-ref-json';
import { TimeOfDayJson } from './time-of-day-json';

/**
 * Backup Group Update Request JSON.
 */
export interface BackupGroupUpdateRequestJson {
  name: string;
  description: string;
  end_time: number;
  excluded_disks: Array<BackupGroupDiskUnitJson>;
  fallback_to_crash_consistent: boolean;
  skip_physical_rdm_disks: boolean;
  full_protection_sla_time_mins: number;
  incremental_protection_sla_time_mins: number;
  indexing_policy: BackupGroupIndexingPolicyJson;
  policy_id: string;
  priority: BackupGroupPriority;
  qos_type: BackupGroupQosType;
  excluded_sources: Array<BackupGroupSourceRefJson>;
  protected_sources: Array<BackupGroupSourceRefJson>;
  start_time: TimeOfDayJson;
  timezone: string;
  abort_in_blackout_period: boolean;
  continue_on_quiesce_failure: boolean;
  quiesce: boolean;
}
