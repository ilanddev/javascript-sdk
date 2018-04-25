import { EntityJson } from '../../json/entity';

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
  recovery_journal_used_storage_gb: number;
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

/**
 * Enumeration of possible environment types.
 */
export type EnvironmentType = 'VC_VPG' |
    'VC_VAPP' |
    'VCD_VAPP' |
    'PUBLIC_CLOUD' |
    'HYPERV';

/**
 * Enumeration of possible Active Process Stage types.
 */
export type ActiveProcessStage = 'IN_TEST' | 'STARTING' | 'STOPPING' | 'NONE';

/**
 * Enumeration of possible Vpg Priority types.
 */
export type VpgPriority = 'LOW' | 'MEDIUM' | 'HIGH';

/**
 * Enumeration of possible Vpg Sub Status types.
 */
export type VpgSubStatus = 'NONE' |
    'INITIAL_SYNC' |
    'CREATING' |
    'VOLUME_INITIAL_SYNC' |
    'SYNC' |
    'RECOVERY_POSSIBLE' |
    'DELTA_SYNC' |
    'NEEDS_CONFIGURATION' |
    'ERROR' |
    'EMPTY_PROTECTION_GROUP' |
    'DISCONNECTED_FROM_PEER_NO_RECOVERY_POINTS' |
    'FULL_SYNC' |
    'VOLUME_DELTA_SYNC' |
    'VOLUME_FULL_SYNC' |
    'FAILING_OVER_COMMITTING' |
    'FAILING_OVER_BEFORE_COMMIT' |
    'FAILING_OVER_ROLLING_BACK' |
    'PROMOTING' |
    'MOVING_COMMITTING' |
    'MOVING_BEFORE_COMMIT' |
    'MOVING_ROLLING_BACK' |
    'DELETING' |
    'PENDING_REMOVE' |
    'BITMAP_SYNC' |
    'DISCONNECTED_FROM_PEER' |
    'REPLICATION_PAUSED_USER_INITIATED' |
    'REPLICATION_PAUSED_SYSTEM_INITIATED' |
    'RECOVERY_STORAGE_PROFILE_ERROR' |
    'BACKUP' |
    'ROLLING_BACK' |
    'RECOVERY_STORAGE_ERROR' |
    'JOURNAL_STORAGE_ERROR' |
    'VM_NOT_PROTECTED_ERROR';

/**
 * Enumeration of possible Vpg Status types.
 */
export type VpgStatus = 'INITIALIZING' |
    'MEETING_SLA' |
    'NOT_MEETING_SLA' |
    'HISTORY_NOT_MEETING_SLA' |
    'RPO_NOT_MEETING_SLA' |
    'FAILING_OVER' |
    'MOVING' |
    'DELETING' |
    'RECOVERED';
