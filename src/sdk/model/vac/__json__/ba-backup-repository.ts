export type HealthState = 'OK' |
  'WARNING' |
  'ERROR' |
  'OTHER';

export interface BaBackupRepositoryJson {
  id: string;
  name: string;
  repository_uid: string;
  server_name: string;
  company_name: string;
  location_name: string;
  capacity: number;
  free_space: number;
  backup_size: number;
  health_state: HealthState;
  backup_server_id: number;
  is_service_provider_repository: boolean;
}
