import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { TestConfiguration } from '../../../../../__tests__/configuration';
import { Iland } from '../../../iland';
import { User } from '../../user/user';
import { ApiError } from '../../../config/api-error';
import { Vdc } from '../vdc';
import { PerfSamplesRequest } from '../../mixins/perf-samples/perf-samples-request';
import { PerfCounterJson } from '../../mixins/perf-samples/__json__/perf-samples';
import { PerfSamplesRequestJson } from '../../mixins/perf-samples/__json__/perf-samples-request';
import { InventoryEntity } from '../../user/inventory-entity/inventory-entity';

let auth: IlandDirectGrantAuthProvider;
let inventoryVdc: InventoryEntity;

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
      const vdcs = inventory.getEntitiesByType('IAAS_VDC');
      expect(vdcs).toBeDefined();
      if (vdcs) {
        expect(vdcs.length).toBeGreaterThan(0);
        inventoryVdc = vdcs[0];
      } else {
        fail('failed to get inventory vDCs for vDC integration tests');
      }
    });
  });
});

test('Get a proper error when trying to retrieve non-existent vDC', async() => {
  try {
    await Vdc.getVdc('fake-uuid');
  } catch (err) {
    const apiError = err as ApiError;
    const raw = apiError.getJson();
    expect(apiError.getType()).toBe('UnknownError');
    expect(apiError.getMessage()).toBeDefined();
    expect(apiError.getDetailMessage()).toBe(raw.detail_message);
    expect(apiError.getMessage()).toBe(raw.message);
    expect(apiError.getType()).toBe(raw.type);
    expect(apiError.toString().length).toBeGreaterThan(0);
  }
});

test('Can get vDC and verify required properties', async() => {
  return Vdc.getVdc(inventoryVdc.uuid).then(function(vdc) {
    const raw = vdc.json;
    expect(vdc.name).toBeDefined();
    expect(vdc.name).toBe(raw.name);
    expect(vdc.uuid).toBe(inventoryVdc.uuid);
    expect(vdc.uuid).toBe(raw.uuid);
    expect(vdc.locationId).toBeDefined();
    expect(vdc.locationId).toBe(raw.location_id);
    expect(vdc.vcloudHref).toBeDefined();
    expect(vdc.vcloudHref).toBe(raw.vcloud_href);
    expect(vdc.orgUuid).toBeDefined();
    expect(vdc.orgUuid).toBe(raw.org_uuid);
    expect(vdc.description).toBeDefined();
    expect(vdc.description).toBe(raw.description);
    expect(vdc.toString().length).toBeGreaterThan(0);
    expect(vdc.deleted).toBe(false);
    expect(vdc.updatedDate).toBeDefined();
    expect(vdc.updatedDate.getTime()).toBeLessThan(new Date().getTime());
    expect(vdc.deletedDate).toBeNull();
    expect(vdc.entityType).toBe('IAAS_VDC');
    expect(vdc.enabled).toBeDefined();
    expect(vdc.enabled).toBe(raw.enabled);
    expect(vdc.vcenterMoref).toBeDefined();
    expect(vdc.vcenterMoref).toBe(raw.vcenter_moref);
    expect(vdc.vcenterName).toBeDefined();
    expect(vdc.vcenterName).toBe(raw.vcenter_name);
    expect(vdc.vcenterInstanceUuid).toBeDefined();
    expect(vdc.vcenterInstanceUuid).toBe(raw.vcenter_instance_uuid);
    expect(vdc.vcenterHref).toBeDefined();
    expect(vdc.vcenterHref).toBe(raw.vcenter_href);
    expect(vdc.allocationModel).toBeDefined();
    expect(vdc.allocationModel).toBe(raw.allocation_model);
    expect(vdc.reservedCpu).toBeDefined();
    expect(vdc.reservedCpu).toBe(raw.reserved_cpu);
    expect(vdc.reservedMemory).toBeDefined();
    expect(vdc.reservedMemory).toBe(raw.reserved_mem);
    expect(vdc.diskLimit).toBeDefined();
    expect(vdc.diskLimit).toBe(raw.disk_limit);
    expect(vdc.allocatedCpu).toBeDefined();
    expect(vdc.allocatedCpu).toBe(raw.alloc_cpu);
    expect(vdc.allocatedMemory).toBeDefined();
    expect(vdc.allocatedMemory).toBe(raw.alloc_mem);
    expect(vdc.maxHardwareVersion).toBeDefined();
    expect(vdc.maxHardwareVersion).toBe(raw.max_hardware_version);
    expect(vdc.networkQuota).toBeDefined();
    expect(vdc.networkQuota).toBe(raw.network_quota);
    expect(vdc.usedNetworkCount).toBeDefined();
    expect(vdc.usedNetworkCount).toBe(raw.used_network_count);
    expect(vdc.hasIaasBackups).toBeDefined();
    expect(vdc.hasIaasBackups).toBe(raw.has_iaas_backups);
    expect(vdc.hasIntegratedBackups).toBeDefined();
    expect(vdc.hasIntegratedBackups).toBe(raw.has_integrated_backups);
    return vdc;
  });
});

test('Can get vDC summary', async() => {
  return Vdc.getVdc(inventoryVdc.uuid).then(async function(vdc) {
    return vdc.getSummary().then(function(vdcSummary) {
      const rawData = vdcSummary.json;
      expect(vdcSummary).toBeDefined();
      expect(vdcSummary.allocationCpu).toBeDefined();
      expect(vdcSummary.allocationCpu).toBe(rawData.allocation_cpu);
      expect(vdcSummary.allocationMemory).toBeDefined();
      expect(vdcSummary.allocationMemory).toBe(rawData.allocation_memory);
      expect(vdcSummary.configuredCpu).toBeDefined();
      expect(vdcSummary.configuredCpu).toBe(rawData.configured_cpu);
      expect(vdcSummary.configuredMemory).toBeDefined();
      expect(vdcSummary.configuredMemory).toBe(rawData.configured_memory);
      expect(vdcSummary.configuredDisk).toBeDefined();
      expect(vdcSummary.configuredDisk).toBe(rawData.configured_disk);
      expect(vdcSummary.numberOfVapps).toBeDefined();
      expect(vdcSummary.numberOfVapps).toBe(rawData.number_of_vapps);
      expect(vdcSummary.numberOfVms).toBeDefined();
      expect(vdcSummary.numberOfVms).toBe(rawData.number_of_vms);
      expect(vdcSummary.reservedCpu).toBeDefined();
      expect(vdcSummary.reservedCpu).toBe(rawData.reserved_cpu);
      expect(vdcSummary.reservedMem).toBeDefined();
      expect(vdcSummary.reservedMem).toBe(rawData.reserved_mem);
      expect(vdcSummary.consumedCpu).toBeDefined();
      expect(vdcSummary.consumedCpu).toBe(rawData.consumed_cpu);
      expect(vdcSummary.consumedMem).toBeDefined();
      expect(vdcSummary.consumedMem).toBe(rawData.consumed_mem);
      expect(vdcSummary.consumedDisk).toBeDefined();
      expect(vdcSummary.consumedDisk).toBe(rawData.consumed_disk);
      expect(vdcSummary.provisionedDisk).toBeDefined();
      expect(vdcSummary.provisionedDisk).toBe(rawData.provisioned_disk);
      expect(vdcSummary.toString().length).toBeGreaterThan(0);
    });
  });
});

test('Can refresh vDC', async() => {
  return Vdc.getVdc(inventoryVdc.uuid).then(async function(vdc) {
    expect(vdc.uuid).toBe(inventoryVdc.uuid);
    return vdc.refresh().then(function(refreshed) {
      expect(refreshed.uuid).toBe(inventoryVdc.uuid);
    });
  });
});

test('Can get perf counters', async() => {
  return Vdc.getVdc(inventoryVdc.uuid).then(async(vdc) => {
    expect(vdc.uuid).toBe(inventoryVdc.uuid);
    return vdc.getPerfCounters().then((response) => {
      expect(response).toBeDefined();
      expect(response.length).toBeGreaterThan(0);
    });
  });
});

test('Can get perf samples', async() => {
  return Vdc.getVdc(inventoryVdc.uuid).then(async(vdc) => {
    expect(vdc.uuid).toBe(inventoryVdc.uuid);
    return vdc.getPerfCounters().then(async(counters) => {
      expect(counters).toBeDefined();
      expect(counters.length).toBeGreaterThan(0);
      const request = new PerfSamplesRequest({counter: counters[0] as PerfCounterJson} as PerfSamplesRequestJson);
      return vdc.getPerfSamples(request).then(async(perfSamplesSerie) => {
        expect(perfSamplesSerie).toBeDefined();
      });
    });
  });
});
