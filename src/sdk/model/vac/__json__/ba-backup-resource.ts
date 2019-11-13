import { BaBackupRepositoryJson } from './ba-backup-repository';
import { BaWanAcceleratorJson } from './ba-wan-accelerator';

export interface BaBackupResourceJson {
  id: string;
  cloud_repository_name: string;
  storage_quota: number;
  storage_quota_units: string;
  vms_quota: number;
  workstations_quota: number;
  traffic_quota: number;
  traffic_quota_units: string;
  wan_acceleration_enabled: boolean;
  used_storage_quota: number;
  used_storage_quota_units: string;
  used_traffic_quota: number;
  used_traffic_quota_units: string;
  interval_start_time: string;
  interval_end_time: string;
  backup_repository: BaBackupRepositoryJson;
  wan_accelerator: BaWanAcceleratorJson;
}
