import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { TestConfiguration } from '../../../../__tests__/configuration';
import { Iland } from '../../iland';
import { User } from '../user';
import { ApiError } from '../../api-error';
import { Vdc } from '../vdc';
import { InventoryEntity } from '../company-inventory';

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
      const vdcs = inventory.getEntitiesByType('ILAND_CLOUD_VDC');
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
    expect(apiError.getType()).toBe('UnauthorizedError');
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
    expect(vdc.entityType).toBe('VDC');
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
    expect(vdc.maxHardwareVersion).toBe(raw.max_hdw_version);
    expect(vdc.networkQuota).toBeDefined();
    expect(vdc.networkQuota).toBe(raw.network_quota);
    expect(vdc.usedNetworkCount).toBeDefined();
    expect(vdc.usedNetworkCount).toBe(raw.used_network_count);
    return vdc;
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
