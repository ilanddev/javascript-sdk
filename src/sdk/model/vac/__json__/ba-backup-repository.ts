export interface BaBackupRepositoryJson {
  id: string;
  name: string;
  repository_uid: string;
  server_name: string;
  company_name: string;
  location_name: string;
  capacity: number;
  capacity_units: string;
  free_space: number;
  free_space_units: string;
  backup_size: number;
  backup_size_units: string;
  health_state: string;
  backup_server_id: number;
  is_service_provider_repository: boolean;
}
