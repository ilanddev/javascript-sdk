import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { TestConfiguration } from '../../../../../__tests__/configuration';
import { Iland } from '../../../iland';
import { User } from '../../user/user';
import { InventoryEntity } from '../../user/inventory-entity/inventory-entity';
import { BaCompany } from '../ba-company';
import { BaCompanyJson } from '../__json__/ba-company';
import { BaBackupResource } from '../ba-backup-resource';
import { BaBackupRepository } from '../ba-backup-repository';
import { BaBackupResourceJson } from '../__json__/ba-backup-resource';
import { BaWanAccelerator } from '../ba-wan-accelerator';
import { BaWanAcceleratorJson } from '../__json__/ba-wan-accelerator';
import { VacPerfSample } from '../vac-perf-sample';
import { VacPerfSampleJson } from '../__json__/vac-perf-sample';
import { BaCompanyBackupHistory } from '../ba-company-backup-history';
import { BaCompanyBackupHistoryJson } from '../__json__/ba-company-backup-history';

let auth: IlandDirectGrantAuthProvider;
let tenant: InventoryEntity | undefined;
let tenants: InventoryEntity[];

beforeAll(async() => {
  auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  Iland.init(auth);
  return User.getCurrentUser().then(async function(user) {
    return user.getInventory().then(function(inventories) {
      if (inventories.length === 0) {
        throw Error('no company inventories returned for test user, cant perform test.');
      }
      const inventory = inventories[0];
      tenants = inventory.getEntitiesByType('VCC_BACKUP_TENANT');
      expect(tenants).toBeDefined();
      if (tenants && tenants.length > 0) {
        // tenant ilandVACtesting1 is the only one that has backup history.
        tenant = tenants.find(t =>
          t.uuid === 'sin01.ilandcloud.com:urn:vac:tenant:345eaabc-ecf8-4400-a89a-4051881efbe8');
      } else {
        fail('failed to get inventory tenants for tenant integration tests');
      }
    });
  });
});

test('Can get BaCompany and verify properties', async() => {
  if (!tenant) {
    fail('failed to get inventory tenants for tenant integration tests');
    return;
  }
  return BaCompany.getVacCompany(tenant.uuid).then((tenant) => {
    const rawData: BaCompanyJson = tenant.json;
    expect(tenant).toBeDefined();
    expect(tenant.entityType).toBeDefined();
    expect(tenant.entityType).toEqual('VCC_BACKUP_TENANT');
    expect(tenant.uuid).toBeDefined();
    expect(tenant.uuid).toBe(rawData.uuid);
    expect(tenant.companyId).toBeDefined();
    expect(tenant.companyId).toBe(rawData.company_id);
    expect(tenant.ownerName).toBeDefined();
    expect(tenant.ownerName).toBe(rawData.owner_name);
    expect(tenant.contractUuid).toBeDefined();
    expect(tenant.contractUuid).toBe(rawData.contract_uuid);
    expect(tenant.locationId).toBeDefined();
    expect(tenant.locationId).toBe(rawData.location_id);
    expect(tenant.isEnabled).toBeDefined();
    expect(tenant.isEnabled).toBe(rawData.is_enabled);
    expect(tenant.lastResult).toBeDefined();
    expect(tenant.lastResult).toBe(rawData.last_result);
    expect(tenant.lastActive).toBeDefined();
    expect(tenant.lastActive ? tenant.lastActive.getTime() : null)
      .toBe(rawData.last_active ? (new Date(rawData.last_active)).getTime() : null);
    expect(tenant.bandwidthThrottlingEnabled).toBeDefined();
    expect(tenant.bandwidthThrottlingEnabled).toBe(rawData.bandwidth_throttling_enabled);
    expect(tenant.crm).toBeDefined();
    expect(tenant.crm).toBe(rawData.crm);
    expect(tenant.instanceUid).toBeDefined();
    expect(tenant.instanceUid).toBe(rawData.instance_uid);
    expect(tenant.cloudConnectAgentUid).toBeDefined();
    expect(tenant.cloudConnectAgentUid).toBe(rawData.cloud_connect_agent_uid);
    expect(tenant.siteName).toBeDefined();
    expect(tenant.siteName).toBe(rawData.site_name);
    expect(tenant.vcdOrganizationUid).toBeDefined();
    expect(tenant.vcdOrganizationUid).toBe(rawData.vcd_organization_uid);
    expect(tenant.tenantType).toBeDefined();
    expect(tenant.tenantType).toBe(rawData.tenant_type);
    expect(tenant.firstName).toBeDefined();
    expect(tenant.firstName).toBe(rawData.first_name);
    expect(tenant.lastName).toBeDefined();
    expect(tenant.lastName).toBe(rawData.last_name);
    expect(tenant.userName).toBeDefined();
    expect(tenant.userName).toBe(rawData.user_name);
    expect(tenant.emailAddress).toBeDefined();
    expect(tenant.emailAddress).toBe(rawData.email_address);
    expect(tenant.taxId).toBeDefined();
    expect(tenant.taxId).toBe(rawData.tax_id);
    expect(tenant.telephone).toBeDefined();
    expect(tenant.telephone).toBe(rawData.telephone);
    expect(tenant.street).toBeDefined();
    expect(tenant.street).toBe(rawData.street);
    expect(tenant.usState).toBeDefined();
    expect(tenant.usState).toBe(rawData.us_state);
    expect(tenant.zipCode).toBeDefined();
    expect(tenant.zipCode).toBe(rawData.zip_code);
    expect(tenant.notes).toBeDefined();
    expect(tenant.notes).toBe(rawData.notes);
    expect(tenant.backupProtectionEnabled).toBeDefined();
    expect(tenant.backupProtectionEnabled).toBe(rawData.backup_protection_enabled);
    expect(tenant.backupProtectionPeriod).toBeDefined();
    expect(tenant.backupProtectionPeriod).toBe(rawData.backup_protection_period);
    expect(tenant.networkFailoverResourcesEnabled).toBeDefined();
    expect(tenant.networkFailoverResourcesEnabled).toBe(rawData.network_failover_resources_enabled);
    expect(tenant.numberOfPublicIp).toBeDefined();
    expect(tenant.numberOfPublicIp).toBe(rawData.number_of_public_ip);
    expect(tenant.publicIpEnabled).toBeDefined();
    expect(tenant.publicIpEnabled).toBe(rawData.public_ip_enabled);
    expect(tenant.maxConcurrentTasks).toBeDefined();
    expect(tenant.maxConcurrentTasks).toBe(rawData.max_concurrent_tasks);
    expect(tenant.allowedBandwidth).toBeDefined();
    expect(tenant.allowedBandwidth).toBe(rawData.allowed_bandwidth);
    expect(tenant.allowedBandwidthUnits).toBeDefined();
    expect(tenant.allowedBandwidthUnits).toBe(rawData.allowed_bandwidth_units);
    expect(tenant.gatewayFailoverEnabled).toBeDefined();
    expect(tenant.gatewayFailoverEnabled).toBe(rawData.gateway_failover_enabled);
    expect(tenant.vmsBackedUp).toBeDefined();
    expect(tenant.vmsBackedUp).toBe(rawData.vms_backed_up);
    expect(tenant.vmsReplicated).toBeDefined();
    expect(tenant.vmsReplicated).toBe(rawData.vms_replicated);
    expect(tenant.vmsBackedUpToCloud).toBeDefined();
    expect(tenant.vmsBackedUpToCloud).toBe(rawData.vms_backed_up_to_cloud);
    expect(tenant.managedPhysicalWorkstations).toBeDefined();
    expect(tenant.managedPhysicalWorkstations).toBe(rawData.managed_physical_workstations);
    expect(tenant.managedCloudWorkstations).toBeDefined();
    expect(tenant.managedCloudWorkstations).toBe(rawData.managed_cloud_workstations);
    expect(tenant.managedPhysicalServers).toBeDefined();
    expect(tenant.managedPhysicalServers).toBe(rawData.managed_physical_servers);
    expect(tenant.managedCloudServers).toBeDefined();
    expect(tenant.managedCloudServers).toBe(rawData.managed_cloud_servers);
    expect(tenant.expirationEnabled).toBeDefined();
    expect(tenant.expirationEnabled).toBe(rawData.expiration_enabled);
    expect(tenant.expirationDate).toBeDefined();
    expect(tenant.expirationDate ? tenant.expirationDate.getTime() : null)
      .toBe(rawData.expiration_date ? (new Date(rawData.expiration_date)).getTime() : null);
    expect(tenant.totalStorageQuota).toBeDefined();
    expect(tenant.totalStorageQuota).toBe(rawData.total_storage_quota);
    expect(tenant.usedStorageQuota).toBeDefined();
    expect(tenant.usedStorageQuota).toBe(rawData.used_storage_quota);
    expect(tenant.endpoint).toBeDefined();
    expect(tenant.endpoint).toBe(rawData.endpoint);
    expect(tenant.toString().length).toBeGreaterThan(0);
    expect(tenant.json).toBeDefined();
    expect(tenant.backupResources).toBeDefined();
    if (tenant.backupResources) {
      const tenantResourceList: BaBackupResource[] = tenant.backupResources;
      const tenantResource: BaBackupResource = tenantResourceList[0];
      const tenantResourceRaw: BaBackupResourceJson = tenantResource.json;
      expect(tenantResource.toString().length).toBeGreaterThan(0);
      expect(tenantResource.json).toBeDefined();
      expect(tenantResource.cloudRepositoryName).toBeDefined();
      expect(tenantResource.cloudRepositoryName).toBe(tenantResourceRaw.cloud_repository_name);
      expect(tenantResource.storageQuota).toBeDefined();
      expect(tenantResource.storageQuota).toBe(tenantResourceRaw.storage_quota);
      expect(tenantResource.vmsQuota).toBeDefined();
      expect(tenantResource.vmsQuota).toBe(tenantResourceRaw.vms_quota);
      expect(tenantResource.workstationsQuota).toBeDefined();
      expect(tenantResource.workstationsQuota).toBe(tenantResourceRaw.workstations_quota);
      expect(tenantResource.trafficQuota).toBeDefined();
      expect(tenantResource.trafficQuota).toBe(tenantResourceRaw.traffic_quota);
      expect(tenantResource.wanAccelerationEnabled).toBeDefined();
      expect(tenantResource.wanAccelerationEnabled).toBe(tenantResourceRaw.wan_acceleration_enabled);
      expect(tenantResource.usedStorageQuota).toBeDefined();
      expect(tenantResource.usedStorageQuota).toBe(tenantResourceRaw.used_storage_quota);
      expect(tenantResource.usedTrafficQuota).toBeDefined();
      expect(tenantResource.usedTrafficQuota).toBe(tenantResourceRaw.used_traffic_quota);
      expect(tenantResource.intervalStartTime).toBeDefined();
      expect(tenantResource.intervalStartTime ? tenantResource.intervalStartTime.getTime() : null)
        .toBe(tenantResourceRaw.interval_start_time ?
          (new Date(tenantResourceRaw.interval_start_time)).getTime() : null);
      expect(tenantResource.intervalEndTime).toBeDefined();
      expect(tenantResource.intervalEndTime ? tenantResource.intervalEndTime.getTime() : null)
        .toBe(tenantResourceRaw.interval_end_time ?
          (new Date(tenantResourceRaw.interval_end_time)).getTime() : null);

      expect(tenantResource.wanAccelerator).toBeDefined();
      let wanAccelerator: BaWanAccelerator;
      if (tenantResource.wanAccelerator !== null) {
        wanAccelerator = tenantResource.wanAccelerator;
      } else {
        const wanJson: BaWanAcceleratorJson = {
          id: 'test-id',
          name: 'name',
          cloud_connect_agent_uid: 'agent-uid',
          is_clients_accelerator: false
        };
        wanAccelerator = new BaWanAccelerator(wanJson);
      }
      const wanAcceleratorRaw = wanAccelerator.json;
      expect(wanAccelerator.id).toBeDefined();
      expect(wanAccelerator.id).toBe(wanAcceleratorRaw.id);
      expect(wanAccelerator.name).toBeDefined();
      expect(wanAccelerator.name).toBe(wanAcceleratorRaw.name);
      expect(wanAccelerator.cloudConnectAgentUid).toBeDefined();
      expect(wanAccelerator.cloudConnectAgentUid).toBe(wanAcceleratorRaw.cloud_connect_agent_uid);
      expect(wanAccelerator.isClientsAccelerator).toBeDefined();
      expect(wanAccelerator.isClientsAccelerator).toBe(wanAcceleratorRaw.is_clients_accelerator);
      expect(tenantResource.backupRepository).toBeDefined();

      if (tenantResource.backupRepository) {
        const cloudRepository: BaBackupRepository = tenantResource.backupRepository;
        const cloudRepositoryRaw = cloudRepository.json;
        expect(cloudRepository.toString().length).toBeGreaterThan(0);
        expect(cloudRepository.name).toBeDefined();
        expect(cloudRepository.name).toBe(cloudRepositoryRaw.name);
        expect(cloudRepository.repositoryUid).toBeDefined();
        expect(cloudRepository.repositoryUid).toBe(cloudRepositoryRaw.repository_uid);
        expect(cloudRepository.serverName).toBeDefined();
        expect(cloudRepository.serverName).toBe(cloudRepositoryRaw.server_name);
        expect(cloudRepository.companyName).toBeDefined();
        expect(cloudRepository.companyName).toBe(cloudRepositoryRaw.company_name);
        expect(cloudRepository.locationName).toBeDefined();
        expect(cloudRepository.locationName).toBe(cloudRepositoryRaw.location_name);
        expect(cloudRepository.capacity).toBeDefined();
        expect(cloudRepository.capacity).toBe(cloudRepositoryRaw.capacity);
        expect(cloudRepository.freeSpace).toBeDefined();
        expect(cloudRepository.freeSpace).toBe(cloudRepositoryRaw.free_space);
        expect(cloudRepository.backupSize).toBeDefined();
        expect(cloudRepository.backupSize).toBe(cloudRepositoryRaw.backup_size);
        expect(cloudRepository.healthState).toBeDefined();
        expect(cloudRepository.healthState).toBe(cloudRepositoryRaw.health_state);
        expect(cloudRepository.backupServerId).toBeDefined();
        expect(cloudRepository.backupServerId).toBe(cloudRepositoryRaw.backup_server_id);
        expect(cloudRepository.isServiceProviderRepository).toBeDefined();
        expect(cloudRepository.isServiceProviderRepository).toBe(cloudRepositoryRaw.is_service_provider_repository);
      }
    }
  });
});

test('Can get hourly storage usage for BaCompany', async() => {
  if (!tenant) {
    fail('failed to get inventory tenants for tenant integration tests');
    return undefined;
  }
  const date = new Date();
  const endTime = date.getTime();
  const startTime = new Date(date.setDate(date.getDate() - 1)).getTime();
  return BaCompany.getVacCompany(tenant.uuid).then(async(tenant) => {
    return tenant.getStorageUsage(startTime, endTime, 'HOUR', 100)
      .then((perfSamples: Array<VacPerfSample>) => {
        expect(perfSamples).toBeDefined();
        if (perfSamples.length > 0) {
          const perfSample: VacPerfSample = perfSamples[0];
          const rawPerfSample: VacPerfSampleJson = perfSample.json;
          expect(perfSample.usedQuota).toBeDefined();
          expect(perfSample.usedQuota).toBe(rawPerfSample.used_quota);
          expect(perfSample.quota).toBeDefined();
          expect(perfSample.quota).toBe(rawPerfSample.quota);
          expect(perfSample.time).toBeDefined();
          expect(perfSample.time ? perfSample.time.getTime() : null)
            .toBe(rawPerfSample.time ? (new Date(rawPerfSample.time)).getTime() : null);
          expect(perfSample.toString().length).toBeGreaterThan(0);
        }
      });
  });
});

test('Can get backup history for BaCompany', async() => {
  if (!tenant) {
    fail('failed to get inventory tenants for tenant integration tests');
    return undefined;
  }
  return BaCompany.getVacCompany(tenant.uuid).then(async(tenant) => {
    return tenant.getBackupHistory()
      .then((backupHistoryList: Array<BaCompanyBackupHistory>) => {
        expect(backupHistoryList).toBeDefined();
        if (backupHistoryList.length > 0) {
          const backupHistory: BaCompanyBackupHistory = backupHistoryList[0];
          const rawBackupHistory: BaCompanyBackupHistoryJson = backupHistory.json;
          expect(backupHistory.lastActive).toBeDefined();
          expect(backupHistory.lastActive ? backupHistory.lastActive.getTime() : null)
            .toBe(rawBackupHistory.last_active ? (new Date(rawBackupHistory.last_active)).getTime() : null);
          expect(backupHistory.lastResult).toBeDefined();
          expect(backupHistory.lastResult).toBe(rawBackupHistory.last_result);
          expect(backupHistory.toString().length).toBeGreaterThan(0);
        }
      });
  });
});
