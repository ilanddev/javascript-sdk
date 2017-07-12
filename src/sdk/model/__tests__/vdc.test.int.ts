import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { TestConfiguration } from '../../../../__tests__/configuration';
import { Iland } from '../../iland';
import { User } from '../user';
import { InventoryEntity } from '../inventory';
import { ApiError } from '../../api-error';
import { Vdc } from '../vdc';

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
    return user.getInventory().then(function(inventory) {
      let vdcs = inventory.getEntitiesByType('VDC');
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
    let raw = apiError.getJson();
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
    let raw = vdc.getJson();
    expect(vdc.getName()).toBeDefined();
    expect(vdc.getName()).toBe(raw.name);
    expect(vdc.getUuid()).toBe(inventoryVdc.uuid);
    expect(vdc.getUuid()).toBe(raw.uuid);
    expect(vdc.getLocationId()).toBeDefined();
    expect(vdc.getLocationId()).toBe(raw.location_id);
    expect(vdc.getVcloudHref()).toBeDefined();
    expect(vdc.getVcloudHref()).toBe(raw.vcloud_href);
    expect(vdc.getOrgUuid()).toBeDefined();
    expect(vdc.getOrgUuid()).toBe(raw.org_uuid);
    expect(vdc.getDescription()).toBeDefined();
    expect(vdc.getDescription()).toBe(raw.description);
    expect(vdc.toString().length).toBeGreaterThan(0);
    expect(vdc.isDeleted()).toBe(false);
    expect(vdc.getUpdatedDate()).toBeDefined();
    expect(vdc.getUpdatedDate().getTime()).toBeLessThan(new Date().getTime());
    expect(vdc.getDeletedDate()).toBeNull();
    expect(vdc.getEntityType()).toBe('VDC');
    expect(vdc.isEnabled()).toBeDefined();
    expect(vdc.isEnabled()).toBe(raw.enabled);
    expect(vdc.getVcenterMoref()).toBeDefined();
    expect(vdc.getVcenterMoref()).toBe(raw.vcenter_moref);
    expect(vdc.getVcenterName()).toBeDefined();
    expect(vdc.getVcenterName()).toBe(raw.vcenter_name);
    expect(vdc.getVcenterInstanceUuid()).toBeDefined();
    expect(vdc.getVcenterInstanceUuid()).toBe(raw.vcenter_instance_uuid);
    expect(vdc.getVcenterHref()).toBeDefined();
    expect(vdc.getVcenterHref()).toBe(raw.vcenter_href);
    expect(vdc.getAllocationModel()).toBeDefined();
    expect(vdc.getAllocationModel()).toBe(raw.allocation_model);
    expect(vdc.getReservedCpu()).toBeDefined();
    expect(vdc.getReservedCpu()).toBe(raw.reserved_cpu);
    expect(vdc.getReservedMemory()).toBeDefined();
    expect(vdc.getReservedMemory()).toBe(raw.reserved_mem);
    expect(vdc.getDiskLimit()).toBeDefined();
    expect(vdc.getDiskLimit()).toBe(raw.disk_limit);
    expect(vdc.getAllocatedCpu()).toBeDefined();
    expect(vdc.getAllocatedCpu()).toBe(raw.alloc_cpu);
    expect(vdc.getAllocatedMemory()).toBeDefined();
    expect(vdc.getAllocatedMemory()).toBe(raw.alloc_mem);
    expect(vdc.getMaxHardwareVersion()).toBeDefined();
    expect(vdc.getMaxHardwareVersion()).toBe(raw.max_hdw_version);
    expect(vdc.getNetworkQuota()).toBeDefined();
    expect(vdc.getNetworkQuota()).toBe(raw.network_quota);
    expect(vdc.getUsedNetworkCount()).toBeDefined();
    expect(vdc.getUsedNetworkCount()).toBe(raw.used_network_count);
    return vdc;
  });
});

test('Can refresh vDC', async() => {
  return Vdc.getVdc(inventoryVdc.uuid).then(async function(vdc) {
    expect(vdc.getUuid()).toBe(inventoryVdc.uuid);
    return vdc.refresh().then(function(refreshed) {
      expect(refreshed.getUuid()).toBe(inventoryVdc.uuid);
    });
  });
});
