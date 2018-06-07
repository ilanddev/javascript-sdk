import { ServiceProfileJson, VpgEntitiesJson, VpgVmJson } from './vpg';
import { ActiveProcessStage } from './vpg-active-process-stage';
import { VpgStatus } from './vpg-status-type';
import { VpgSubStatus } from './vpg-sub-status-type';
import { VpgPriority } from './vpg-priority-type';

/**
 * Expanded VPG JSON interface.
 */
export interface ExpandedVpgJson {
  service_profile: ServiceProfileJson;
  vms: Array<VpgVmJson>;
  org_uuid: string;
  location_id: string;
  service_profile_uuid: string;
  vpg_identifier: string;
  vpg_name: string;
  organization_name: string;
  actual_rpo: number;
  entities: VpgEntitiesJson;
  status: VpgStatus;
  sub_status: VpgSubStatus;
  priority: VpgPriority;
  vms_count: number;
  last_test: number;
  source_site: string;
  target_site: string;
  provisioned_storage_in_mb: number;
  used_storage_in_mb: number;
  iops: number;
  throughput_in_mb: number;
  service_profile_identifier: string;
  backup_enabled: boolean;
  recovery_site_identifier: string;
  protected_site_identifier: string;
  active_process_stage: ActiveProcessStage;
  recovery_journal_used_storage_gb: number;
  uuid: string;
  name: string;
  deleted: boolean;
  deleted_date: number;
  updated_date: number;
}
