import { CloudRepositoryJson, CloudTenantJson, CloudTenantResourceJson } from '../__json__/cloud-tenant-json';

export const MockCloudRepository: CloudRepositoryJson = {
  display_name: 'test-repository-name',
  quota: 17500,
  used_quota: 3700,
  wan_accelerator_uuid: null,
  wan_accelerator: null
};

export const MockCloudTenantResourceJson: CloudTenantResourceJson = {
  repository: MockCloudRepository
};

export const MockVeeamResource = {
  resources: [MockCloudTenantResourceJson]
};

export const MockCloudTenantJson: CloudTenantJson = {
  name: 'mockCloudTenantJson',
  uuid: 'mock-uuid',
  deleted: false,
  deleted_date: null,
  updated_date: 1499693404432,
  uid: 'mock-uid',
  enabled: true,
  resources: MockVeeamResource,
  last_result: 'Success',
  last_active: 1499693404432,
  throttling_enabled: false,
  throttling_speed_limit: 1,
  throttling_speed_unit: 'MBps',
  public_ip_count: 0,
  crm: 'crm-number',
  owner_name: 'test owner',
  contract_uuid: 'test-uuid',
  location_id: 'test-location-id',
  endpoint: 'test-endpoint',
  backup_count: 2
};
