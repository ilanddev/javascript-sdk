import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { TestConfiguration } from '../../../../__tests__/configuration';
import { Iland } from '../../iland';
import { User } from '../user';
import { ApiError } from '../../api-error';
import { Vapp } from '../vapp';
import { InventoryEntity } from '../company-inventory';

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
      let vapps = inventory.getEntitiesByType('ILAND_CLOUD_VAPP');
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
    let raw = apiError.getJson();
    expect(apiError.getType()).toBe('UnauthorizedError');
    expect(apiError.getMessage()).toBeDefined();
    expect(apiError.getDetailMessage()).toBe(raw.detail_message);
    expect(apiError.getMessage()).toBe(raw.message);
    expect(apiError.getType()).toBe(raw.type);
    expect(apiError.toString().length).toBeGreaterThan(0);
  }
});

test('Can get vApp and verify required properties', async() => {
  return Vapp.getVapp(inventoryVapp.uuid).then(function(vapp) {
    let raw = vapp.json;
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
    expect(vapp.entityType).toBe('VAPP');
    expect(vapp.runtimeLease).toBeDefined();
    expect(vapp.runtimeLease).toBe(raw.runtime_lease);
    expect(vapp.storageLease).toBeDefined();
    expect(vapp.storageLease).toBe(raw.storage_lease);
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

test('Can refresh vApp', async() => {
  return Vapp.getVapp(inventoryVapp.uuid).then(async function(vapp) {
    expect(vapp.uuid).toBe(inventoryVapp.uuid);
    return vapp.refresh().then(function(refreshed) {
      expect(refreshed.uuid).toBe(inventoryVapp.uuid);
    });
  });
});
