import { EntityJson } from '../../common/__json__/entity-json';
import { CloudTenantResourceJson } from '../cloud-tenant-resource/__json__/cloud-tenant-resource-json';

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
  owner_name: string;
  contract_uuid: string;
  location_id: string;
  endpoint: string;
  backup_count: number;
  company_id: string;
}
