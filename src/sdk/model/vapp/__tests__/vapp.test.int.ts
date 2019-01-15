import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { TestConfiguration } from '../../../../../__tests__/configuration';
import { Iland } from '../../../iland';
import { User } from '../../user/user';
import { ApiError } from '../../../config/api-error';
import { Vapp } from '../vapp';
import { InventoryEntity } from '../../user/inventory-entity/inventory-entity';
import { PerfSamplesRequest } from '../../mixins/perf-samples/perf-samples-request';
import { PerfCounterJson } from '../../mixins/perf-samples/__json__/perf-samples';
import { PerfSamplesRequestJson } from '../../mixins/perf-samples/__json__/perf-samples-request';

let auth: IlandDirectGrantAuthProvider;
let inventoryVapp: InventoryEntity;

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
      const vapps = inventory.getEntitiesByType('IAAS_VAPP');
      expect(vapps).toBeDefined();
      if (vapps) {
        expect(vapps.length).toBeGreaterThan(0);
        inventoryVapp = vapps[0];
      } else {
        fail('failed to get inventory vapps for vapp integration tests');
      }
    });
  });
});

test('Get a proper error when trying to retrieve non-existent vApp', async() => {
  try {
    await Vapp.getVapp('fake-uuid');
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

test('Can get vApp and verify required properties', async() => {
  return Vapp.getVapp(inventoryVapp.uuid).then(function(vapp) {
    const raw = vapp.json;
    expect(vapp.name).toBeDefined();
    expect(vapp.name).toBe(raw.name);
    expect(vapp.uuid).toBe(inventoryVapp.uuid);
    expect(vapp.uuid).toBe(raw.uuid);
    expect(vapp.locationId).toBeDefined();
    expect(vapp.locationId).toBe(raw.location_id);
    expect(vapp.vdcUuid).toBeDefined();
    expect(vapp.vdcUuid).toBe(raw.vdc_uuid);
    expect(vapp.vcloudHref).toBeDefined();
    expect(vapp.vcloudHref).toBe(raw.vcloud_href);
    expect(vapp.storageProfiles).toBeDefined();
    expect(vapp.storageProfiles).toBeDefined();
    expect(vapp.storageProfiles).toBe(raw.storage_profiles);
    expect(vapp.powerStatus).toBeDefined();
    expect(vapp.orgUuid).toBeDefined();
    expect(vapp.orgUuid).toBe(raw.org_uuid);
    expect(vapp.description).toBeDefined();
    expect(vapp.description).toBe(raw.description);
    expect(vapp.deployed).toBeDefined();
    expect(vapp.deployed).toBe(raw.deployed);
    expect(vapp.toString().length).toBeGreaterThan(0);
    expect(vapp.deleted).toBe(false);
    expect(vapp.updatedDate).toBeDefined();
    expect(vapp.updatedDate.getTime()).toBeLessThan(new Date().getTime());
    expect(vapp.deletedDate).toBeNull();
    expect(vapp.entityType).toBe('IAAS_VAPP');
    expect(vapp.runtimeLease).toBeDefined();
    expect(vapp.runtimeLease).toBe(raw.runtime_lease_in_seconds);
    expect(vapp.storageLease).toBeDefined();
    expect(vapp.storageLease).toBe(raw.storage_lease_in_seconds);
    expect(vapp.allocationModel).toBeDefined();
    expect(vapp.allocationModel).toBe(raw.allocation_model);
    if (vapp.storageLeaseExpirationDate === null) {
      expect(vapp.storageLeaseExpirationDate).toBeNull();
    } else {
      expect(vapp.storageLeaseExpirationDate!.getTime()).toBe(raw.storage_expire);
    }
    if (vapp.runtimeLeaseExpirationDate === null) {
      expect(vapp.runtimeLeaseExpirationDate).toBeNull();
    } else {
      expect(vapp.runtimeLeaseExpirationDate!.getTime()).toBe(raw.runtime_expire);
    }
    expect(vapp.creationDate).toBeDefined();
    expect(vapp.creationDate.getTime()).toBe(raw.created_date);
    expect(vapp.expired).toBe(raw.is_expired);
    return vapp;
  });
});

test('Can get billing', async() => {
  return Vapp.getVapp(inventoryVapp.uuid).then(async(vapp) => {
    expect(vapp.uuid).toBe(inventoryVapp.uuid);
    const now = new Date();
    const thisMonth = now.getMonth() + 1;
    const thisYear = now.getFullYear();
    return vapp.getBilling(thisYear, thisMonth).then((bill) => {
      expect(bill).toBeDefined();
    });
  });
});

test('Can get current billing', async() => {
  return Vapp.getVapp(inventoryVapp.uuid).then(async(vapp) => {
    expect(vapp.uuid).toBe(inventoryVapp.uuid);
    return vapp.getCurrentBilling().then((bill) => {
      expect(bill).toBeDefined();
    });
  });
});

test('Can refresh vApp', async() => {
  return Vapp.getVapp(inventoryVapp.uuid).then(async function(vapp) {
    expect(vapp.uuid).toBe(inventoryVapp.uuid);
    return vapp.refresh().then(function(refreshed) {
      expect(refreshed.uuid).toBe(inventoryVapp.uuid);
    });
  });
});

test('Can get perf counters', async() => {
  return Vapp.getVapp(inventoryVapp.uuid).then(async(vapp) => {
    expect(vapp.uuid).toBe(inventoryVapp.uuid);
    return vapp.getPerfCounters().then((response) => {
      expect(response).toBeDefined();
      expect(response.length).toBeGreaterThan(0);
    });
  });
});

test('Can get perf samples', async() => {
  return Vapp.getVapp(inventoryVapp.uuid).then(async(vapp) => {
    expect(vapp.uuid).toBe(inventoryVapp.uuid);
    return vapp.getPerfCounters().then(async(counters) => {
      expect(counters).toBeDefined();
      expect(counters.length).toBeGreaterThan(0);
      const request = new PerfSamplesRequest({counter: counters[0] as PerfCounterJson} as PerfSamplesRequestJson);
      return vapp.getPerfSamples(request).then(async(perfSamplesSerie) => {
        expect(perfSamplesSerie).toBeDefined();
      });
    });
  });
});
