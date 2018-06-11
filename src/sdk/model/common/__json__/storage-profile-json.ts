export interface StorageProfileJson {
  uuid: string;
  vdc_uuid: string;
  name: string;
  enabled: boolean;
  default_profile: boolean;
  unit: string;
  limit: number;
  storage_used_in_mb: number;
}
