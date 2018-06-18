import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { TestConfiguration } from '../../../../../__tests__/configuration';
import { Iland } from '../../../iland';
import { User } from '../../user/user';
import { InventoryEntity } from '../../user/inventory-entity/inventory-entity';
import { CloudTenant } from '../cloud-tenant';
import { VccPerfSample } from '../vcc-perf-sample/vcc-perf-sample';
import { WanAccelerator } from '../wan-accelerator/wan-accelerator';
import { WanAcceleratorJson } from '../wan-accelerator/__json__/wan-accelerator-json';
import { CloudTenantBackupHistory } from '../cloud-tenant-backup-history/cloud-tenant-backup-history';

let auth: IlandDirectGrantAuthProvider;
let tenant: InventoryEntity;

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
      const tenants = inventory.getEntitiesByType('VCC_BACKUP_TENANT');
      expect(tenants).toBeDefined();
      if (tenants && tenants.length > 0) {
        expect(tenants.length).toBeGreaterThan(0);
        tenant = tenants[0];
      } else {
        fail('failed to get inventory tenants for tenant integration tests');
      }
    });
  });
});

test('Can get Cloud Tenant and verify properties', async() => {
  if (!tenant) {
    fail('failed to get inventory tenants for tenant integration tests');
    return;
  }
  return CloudTenant.getCloudTenant(tenant.uuid).then(function(cloudTenant) {
    const rawData = cloudTenant.json;
    expect(cloudTenant).toBeDefined();
    expect(cloudTenant.entityType).toBeDefined();
    expect(cloudTenant.entityType).toEqual('VCC_BACKUP_TENANT');
    expect(cloudTenant.uid).toBeDefined();
    expect(cloudTenant.uid).toBe(rawData.uid);
    expect(cloudTenant.enabled).toBeDefined();
    expect(cloudTenant.enabled).toBe(rawData.enabled);
    expect(cloudTenant.lastResult).toBeDefined();
    expect(cloudTenant.lastResult).toBe(rawData.last_result);
    expect(cloudTenant.lastActive).toBeDefined();
    expect(cloudTenant.lastActive).toBe(rawData.last_active);
    expect(cloudTenant.throttlingEnabled).toBeDefined();
    expect(cloudTenant.throttlingEnabled).toBe(rawData.throttling_enabled);
    expect(cloudTenant.throttlingSpeedUnit).toBeDefined();
    expect(cloudTenant.throttlingSpeedUnit).toBe(rawData.throttling_speed_unit);
    expect(cloudTenant.throttlingSpeedLimit).toBeDefined();
    expect(cloudTenant.throttlingSpeedLimit).toBe(rawData.throttling_speed_limit);
    expect(cloudTenant.publicIpCount).toBeDefined();
    expect(cloudTenant.publicIpCount).toBe(rawData.public_ip_count);
    expect(cloudTenant.backupCount).toBeDefined();
    expect(cloudTenant.backupCount).toBe(rawData.backup_count);
    expect(cloudTenant.crmNumber).toBeDefined();
    expect(cloudTenant.crmNumber).toBe(rawData.crm);
    expect(cloudTenant.ownerName).toBeDefined();
    expect(cloudTenant.ownerName).toBe(rawData.owner_name);
    expect(cloudTenant.contractUuid).toBeDefined();
    expect(cloudTenant.contractUuid).toBe(rawData.contract_uuid);
    expect(cloudTenant.locationId).toBeDefined();
    expect(cloudTenant.locationId).toBe(rawData.location_id);
    expect(cloudTenant.endPoint).toBeDefined();
    expect(cloudTenant.endPoint).toBe(rawData.endpoint);
    expect(cloudTenant.toString().length).toBeGreaterThan(0);
    expect(cloudTenant.json).toBeDefined();
    expect(cloudTenant.resources).toBeDefined();
    const cloudTenantResourceList = cloudTenant.resources;
    expect(cloudTenantResourceList[0].toString().length).toBeGreaterThan(0);
    expect(cloudTenantResourceList[0].json).toBeDefined();
    expect(cloudTenantResourceList[0].repository).toBeDefined();
    const cloudRepository = cloudTenantResourceList[0].repository;
    const cloudRepositoryRaw = cloudRepository.json;
    expect(cloudRepository.toString().length).toBeGreaterThan(0);
    expect(cloudRepository.displayName).toBeDefined();
    expect(cloudRepository.displayName).toBe(cloudRepositoryRaw.display_name);
    expect(cloudRepository.quota).toBeDefined();
    expect(cloudRepository.quota).toBe(cloudRepositoryRaw.quota);
    expect(cloudRepository.usedQuota).toBeDefined();
    expect(cloudRepository.usedQuota).toBe(cloudRepositoryRaw.used_quota);
    expect(cloudRepository.wanAcceleratorUuid).toBeDefined();
    expect(cloudRepository.wanAcceleratorUuid).toBe(cloudRepositoryRaw.wan_accelerator_uuid);
    expect(cloudRepository.wanAccelerator).toBeDefined();
    let wanAccelerator: WanAccelerator;
    if (cloudRepository.wanAccelerator !== null) {
      wanAccelerator = cloudRepository.wanAccelerator;
    } else {
      const wanJson: WanAcceleratorJson = {
        name: 'name',
        description: 'description',
        out_of_date: false,
        version: '1',
        capacity: 500,
        traffic_port: 1234,
        connection_count: 5,
        cache_path: 'some-path'
      };
      wanAccelerator = new WanAccelerator(wanJson);
    }
    const wanAcceleratorRaw = wanAccelerator.json;
    expect(wanAccelerator.toString().length).toBeGreaterThan(0);
    expect(wanAccelerator.name).toBeDefined();
    expect(wanAccelerator.name).toBe(wanAcceleratorRaw.name);
    expect(wanAccelerator.description).toBeDefined();
    expect(wanAccelerator.description).toBe(wanAcceleratorRaw.description);
    expect(wanAccelerator.outOfDate).toBeDefined();
    expect(wanAccelerator.outOfDate).toBe(wanAcceleratorRaw.out_of_date);
    expect(wanAccelerator.version).toBeDefined();
    expect(wanAccelerator.version).toBe(wanAcceleratorRaw.version);
    expect(wanAccelerator.capacity).toBeDefined();
    expect(wanAccelerator.capacity).toBe(wanAcceleratorRaw.capacity);
    expect(wanAccelerator.trafficPort).toBeDefined();
    expect(wanAccelerator.trafficPort).toBe(wanAcceleratorRaw.traffic_port);
    expect(wanAccelerator.connectionCount).toBeDefined();
    expect(wanAccelerator.connectionCount).toBe(wanAcceleratorRaw.connection_count);
    expect(wanAccelerator.cachePath).toBeDefined();
    expect(wanAccelerator.cachePath).toBe(wanAcceleratorRaw.cache_path);
  });
});

test('Can get hourly storage usage for Cloud Tenant', async() => {
  if (!tenant) {
    fail('failed to get inventory tenants for tenant integration tests');
    return undefined;
  }
  const date = new Date();
  const endTime = date.getTime();
  const startTime = new Date(date.setDate(date.getDate() - 1)).getTime();
  return CloudTenant.getCloudTenant(tenant.uuid).then(async function(cloudTenant) {
    return cloudTenant.getStorageUsageFor(startTime, endTime, null, 'HOUR')
      .then(function(perfSamples: Array<VccPerfSample>) {
        expect(perfSamples).toBeDefined();
        if (perfSamples.length > 0) {
          const perfSample: VccPerfSample = perfSamples[0];
          const rawPerfSample = perfSample.json;
          expect(perfSample.usedQuota).toBeDefined();
          expect(perfSample.usedQuota).toBe(rawPerfSample.used_quota);
          expect(perfSample.quota).toBeDefined();
          expect(perfSample.quota).toBe(rawPerfSample.quota);
          expect(perfSample.timeStamp).toBeDefined();
          expect(perfSample.timeStamp).toBe(rawPerfSample.time);
          expect(perfSample.toString().length).toBeGreaterThan(0);
        }
      });
  });
});

test('Can get backup history for Cloud Tenant', async() => {
  if (!tenant) {
    fail('failed to get inventory tenants for tenant integration tests');
    return undefined;
  }
  return CloudTenant.getCloudTenant(tenant.uuid).then(async function(cloudTenant) {
    return cloudTenant.getBackupHistoryFor(null, null)
      .then(function(backupHistoryList: Array<CloudTenantBackupHistory>) {
        expect(backupHistoryList).toBeDefined();
        const backupHistory: CloudTenantBackupHistory = backupHistoryList[0];
        const rawBackupHistory = backupHistory.json;
        expect(backupHistory.lastActive).toBeDefined();
        expect(backupHistory.lastActive).toBe(rawBackupHistory.last_active);
        expect(backupHistory.lastResult).toBeDefined();
        expect(backupHistory.lastResult).toBe(rawBackupHistory.last_result);
        expect(backupHistory.toString().length).toBeGreaterThan(0);
      });
  });
});
