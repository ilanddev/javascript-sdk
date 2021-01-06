import { BackupGroupPriority } from './backup-group-priority';
import { BackupGroupQosType } from './backup-group-qos-type';
import { ProtectionSourceJson } from './protection-source-json';
import { BackupGroupDiskUnitJson } from './backup-group-disk-unit-json';
import { BackupGroupIndexingPolicyJson } from './backup-group-indexing-policy-json';
import { TimeOfDayJson } from './time-of-day-json';
import { BackupSummaryStatsJson } from '../../backup-run/__json__/backup-summary-stats-json';
import { BackupGroupRunJson } from '../../backup-run/__json__/backup-group-run-json';
import { BackupPolicyJson } from '../../backup-policy/__json__/backup-policy-json';

/**
 * Backup Group JSON.
 */
export interface BackupGroupJson {
  company_id: string;
  uid: string;
  location_id: string;
  name: string;
  creation_time: number;
  modified_time: number;
  description: string;
  end_time: number;
  active: boolean;
  deleted: boolean;
  paused: boolean;
  excluded_disks: Array<BackupGroupDiskUnitJson>;
  fallback_to_crash_consistent: boolean;
  skip_physical_rdm_disks: boolean;
  full_protection_sla_time_mins: number;
  incremental_protection_sla_time_mins: number;
  indexing_policy: BackupGroupIndexingPolicyJson;
  policy_id: string;
  policy_applied_time: number;
  priority: BackupGroupPriority;
  qos_type: BackupGroupQosType;
  excluded_sources: Array<ProtectionSourceJson>;
  protected_sources: Array<ProtectionSourceJson>;
  start_time: TimeOfDayJson;
  timezone: string;
  org_uuid: string;
  vdc_uuid: string;
  abort_in_blackout_period: boolean;
  continue_on_quiesce_failure: boolean;
  quiesce: boolean;
  summary_stats: BackupSummaryStatsJson;
  last_run: BackupGroupRunJson;
  backup_policy: BackupPolicyJson;
}
