import { EntityJson } from '../../common/__json__/entity-json';

/**
 * Interface for Cloud Tenant JSON properties.
 */
export interface CloudTenantJson extends EntityJson {
  uid: string;
  enabled: boolean;
  resources: { [resources: string]: Array<CloudTenantResourceJson> };
  last_result: string;
  last_active: number;
  throttling_enabled: boolean;
  throttling_speed_limit: number;
  throttling_speed_unit: string;
  public_ip_count: number;
  crm: string;
  owner_name: string;
  contract_uuid: string;
  location_id: string;
  endpoint: string;
  backup_count: number;
}

/**
 * Interface for CloudTenantResource JSON properties.
 */
export interface CloudTenantResourceJson {
  repository: CloudRepositoryJson;
}

/**
 * Interface for CloudRepository JSON properties.
 */
export interface CloudRepositoryJson {
  display_name: string;
  quota: number;
  used_quota: number;
  wan_accelerator_uuid: string | null;
  wan_accelerator: WanAcceleratorJson | null;
}

/**
 * Interface for WanAccelerator JSON properties.
 */
export interface WanAcceleratorJson {
  name: string;
  description: string;
  out_of_date: boolean;
  version: string;
  capacity: number;
  traffic_port: number;
  connection_count: number;
  cache_path: string;
}

/**
 * Interface for Vcc Perf Sample Json properties.
 */
export interface VccPerfSampleJson {
  used_quota: number;
  quota: number;
  time: number;
}

/**
 * Interface for an Upgrade Tenant Contract Request
 */
export interface UpgradeTenantContractRequestJson {
  additional_storage_in_gb: number;
}

/**
 * Interface for Cloud Tenant Backup History Json properties.
 */
export interface CloudTenantBackupHistoryJson {
  last_result: string;
  last_active: number;
}
