import { BaCompanyJson } from '../__json__/ba-company';
import { BaBackupResourceJson } from '../__json__/ba-backup-resource';
import { BaBackupRepositoryJson } from '../__json__/ba-backup-repository';
import { BaWanAcceleratorJson } from '../__json__/ba-wan-accelerator';

const startDate: Date = new Date();
const endDate: Date = startDate;
endDate.setDate(endDate.getDate() + 1);

export const MockCloudRepository: BaBackupRepositoryJson = {
  id: 'test-repository-id',
  name: 'test-repository-name',
  repository_uid: 'test-repository-uid',
  server_name: 'test-repository-server-name',
  company_name: 'test-repository-company-name',
  location_name: 'test-repository-location',
  capacity: 5000,
  free_space: 3000,
  backup_size: 200,
  health_state: 'OK',
  backup_server_id: 1003,
  is_service_provider_repository: false
};

export const MockWanAccelerator: BaWanAcceleratorJson = {
  id: 'test-wan-accelerator-id',
  name: 'test-wan-accelerator-name',
  cloud_connect_agent_uid: 'test-wan-accelerator-agent-uid',
  is_clients_accelerator: false
}

export const MockCloudTenantResourceJson: BaBackupResourceJson = {
  id: 'test-resource-id',
  cloud_repository_name: 'test-resource-name',
  storage_quota: 3700,
  vms_quota: 10,
  workstations_quota: 10,
  traffic_quota: 1000,
  wan_acceleration_enabled: false,
  used_storage_quota: 0,
  used_traffic_quota: 0,
  interval_start_time: startDate.getTime(),
  interval_end_time: endDate.getTime(),
  backup_repository: MockCloudRepository,
  wan_accelerator: MockWanAccelerator
};

export const MockCloudTenantJson: BaCompanyJson = {
  name: 'test-ba-company-name',
  crm: 'test-ba-company-crm',
  location_id: 'test-ba-company-location',
  contract_uuid: 'test-ba-company-contract-uuid',
  owner_name: 'test-ba-company-owner',
  backup_resources: [MockCloudTenantResourceJson],
  last_active: 0,
  last_result: '',
  uuid: 'test-ba-company-uuid',
  instance_uid: 'test-ba-company-instance-id',
  cloud_connect_agent_uid: '',
  site_name: '',
  vcd_organization_uid: '',
  tenant_type: '',
  description: '',
  title: '',
  first_name: '',
  last_name: '',
  user_name: '',
  email_address: '',
  is_enabled: true,
  tax_id: '',
  telephone: '',
  country: '',
  city: '',
  street: '',
  us_state: '',
  zip_code: '',
  domain: '',
  company_id: 'test-company',
  notes: '',
  backup_protection_enabled: true,
  backup_protection_period: 1,
  network_failover_resources_enabled: false,
  number_of_public_ip: 1,
  public_ip_enabled: true,
  max_concurrent_tasks: 10,
  bandwidth_throttling_enabled: true,
  allowed_bandwidth: 1000,
  allowed_bandwidth_units: 'GB',
  gateway_failover_enabled: false,
  vms_backed_up: 0,
  vms_replicated: 0,
  vms_backed_up_to_cloud: 0,
  managed_physical_workstations: 0,
  managed_cloud_workstations: 0,
  managed_physical_servers: 0,
  managed_cloud_servers: 0,
  expiration_enabled: false,
  expiration_date: 4101392535,
  total_storage_quota: 5000,
  used_storage_quota: 0,
  endpoint: '',
  deleted: false,
  deleted_date: null,
  updated_date: 1576784535,
};
