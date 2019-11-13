import { BaBackupResourceJson } from './ba-backup-resource';

export interface BaCompanyJson {
  name: string;
  crm: string;
  location_id: string;
  contract_uuid: string;
  owner_name: string;
  backup_resources: Array<BaBackupResourceJson>;
  last_active: number;
  last_result: string;
  id: string;
  instance_uid: string;
  cloud_connect_agent_uid: string;
  site_name: string;
  vcd_organization_uid: string;
  tenant_type: string;
  description: string;
  title: string;
  first_name: string;
  last_name: string;
  user_name: string;
  email_address: string;
  is_enabled: boolean;
  tax_id: string;
  telephone: string;
  country: string;
  city: string;
  street: string;
  up_state: string;
  zip_code: string;
  domain: string;
  company_id: string;
  notes: string;
  backup_protection_enabled: boolean;
  backup_protection_period: number;
  network_failover_resources_enabled: boolean;
  number_of_public_ip: number;
  public_ip_enabled: boolean;
  max_concurrent_tasks: number;
  bandwidth_throttling_enabled: boolean;
  allowed_bandwidth: number;
  allowed_bandwidth_units: string;
  gateway_failover_enabled: boolean;
  vms_backed_up: number;
  vms_replicated: number;
  vms_backed_up_to_cloud: number;
  managed_physical_workstations: number;
  managed_cloud_workstations: number;
  managed_physical_servers: number;
  managed_cloud_servers: number;
  expiration_enabled: boolean;
  expiration_date: number;
}
