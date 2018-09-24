import { EntityJson } from '../../common/__json__/entity-json';
import { EnvironmentType } from './vpg-environment-type';
import { VpgSubStatus } from './vpg-sub-status-type';
import { VpgStatus } from './vpg-status-type';
import { VpgPriority } from './vpg-priority-type';
import { ActiveProcessStage } from './vpg-active-process-stage';

/**
 * Interface for Vpg JSON properties.
 */
export interface VpgJson extends EntityJson {
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
  recovery_journal_used_storage_in_mb: number;
}

/**
 * Interface for Service Profile JSON properties.
 */
export interface ServiceProfileJson {
  uuid: string;
  location: string;
  service_profile_identifier: string;
  service_profile_name: string;
  description: string;
  history: number;
  max_journal_size_in_percent: number;
  rpo: number;
  test_interval: number;
}

/**
 * Interface for Vpg VM JSON properties.
 */
export interface VpgVmJson {
  location: string;
  org_uuid: string;
  vpg_uuid: string;
  uuid: string;
  vm_name: string;
  vm_identifier: string;
  organization_name: string;
  actual_rpo: number;
  entities: VpgEntitiesJson;
  status: VpgStatus;
  sub_status: VpgSubStatus;
  priority: VpgPriority;
  source_site: string;
  target_site: string;
  last_test: number;
  provisioned_storage_in_mb: number;
  used_storage_in_mb: number;
  iops: number;
  throughput_in_mb: number;
}

/**
 * Interace for Vpg Entities JSON properties.
 */
export interface VpgEntitiesJson {
  source: EnvironmentType;
  target: EnvironmentType;
}
