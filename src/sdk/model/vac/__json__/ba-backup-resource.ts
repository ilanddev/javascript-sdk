import { BaBackupRepositoryJson } from './ba-backup-repository';
import { BaWanAcceleratorJson } from './ba-wan-accelerator';

export interface BaBackupResourceJson {
  id: string;
  cloud_repository_name: string;
  storage_quota: number;
  vms_quota: number;
  workstations_quota: number;
  traffic_quota: number;
  wan_acceleration_enabled: boolean;
  used_storage_quota: number;
  used_traffic_quota: number;
  interval_start_time: number | null;
  interval_end_time: number | null;
  backup_repository: BaBackupRepositoryJson | null;
  wan_accelerator: BaWanAcceleratorJson | null;
}
