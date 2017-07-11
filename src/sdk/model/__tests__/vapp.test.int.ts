import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { TestConfiguration } from '../../../../__tests__/configuration';
import { Iland } from '../../iland';
import { User } from '../user';
import { InventoryEntity } from '../inventory';
import { ApiError } from '../../api-error';
import { Vapp } from '../vapp';

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
    return user.getInventory().then(function(inventory) {
      let vapps = inventory.getEntitiesByType('VAPP');
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
    let raw = vapp.getJson();
    expect(vapp.getName()).toBeDefined();
    expect(vapp.getName()).toBe(raw.name);
    expect(vapp.getUuid()).toBe(inventoryVapp.uuid);
    expect(vapp.getUuid()).toBe(raw.uuid);
    expect(vapp.getLocationId()).toBeDefined();
    expect(vapp.getLocationId()).toBe(raw.location_id);
    expect(vapp.getVdcUuid()).toBeDefined();
    expect(vapp.getVdcUuid()).toBe(raw.vdc_uuid);
    expect(vapp.getVcloudHref()).toBeDefined();
    expect(vapp.getVcloudHref()).toBe(raw.vcloud_href);
    expect(vapp.getStorageProfiles()).toBeDefined();
    expect(vapp.getStorageProfiles().length).toBeGreaterThan(0);
    expect(vapp.getStorageProfiles()).toBe(raw.storage_profiles);
    expect(vapp.getPowerStatus()).toBeDefined();
    expect(vapp.getOrgUuid()).toBeDefined();
    expect(vapp.getOrgUuid()).toBe(raw.org_uuid);
    expect(vapp.getDescription()).toBeDefined();
    expect(vapp.getDescription()).toBe(raw.description);
    expect(vapp.isDeployed()).toBeDefined();
    expect(vapp.isDeployed()).toBe(raw.deployed);
    expect(vapp.toString().length).toBeGreaterThan(0);
    expect(vapp.isDeleted()).toBe(false);
    expect(vapp.getUpdatedDate()).toBeDefined();
    expect(vapp.getUpdatedDate().getTime()).toBeLessThan(new Date().getTime());
    expect(vapp.getDeletedDate()).toBeNull();
    expect(vapp.getEntityType()).toBe('VAPP');
    expect(vapp.getRuntimeLease()).toBeDefined();
    expect(vapp.getRuntimeLease()).toBe(raw.runtime_lease);
    expect(vapp.getStorageLease()).toBeDefined();
    expect(vapp.getStorageLease()).toBe(raw.storage_lease);
    if (vapp.getStorageLeaseExpirationDate() === null) {
      expect(vapp.getStorageLeaseExpirationDate()).toBeNull();
    } else {
      expect(vapp.getStorageLeaseExpirationDate()!.getTime()).toBe(raw.storage_expire);
    }
    if (vapp.getRuntimeLeaseExpirationDate() === null) {
      expect(vapp.getRuntimeLeaseExpirationDate()).toBeNull();
    } else {
      expect(vapp.getRuntimeLeaseExpirationDate()!.getTime()).toBe(raw.runtime_expire);
    }
    expect(vapp.getCreationDate()).toBeDefined();
    expect(vapp.getCreationDate().getTime()).toBe(raw.created_date);
    expect(vapp.isExpired()).toBe(raw.is_expired);
    return vapp;
  });
});

test('Can refresh vApp', async() => {
  return Vapp.getVapp(inventoryVapp.uuid).then(async function(vapp) {
    expect(vapp.getUuid()).toBe(inventoryVapp.uuid);
    return vapp.refresh().then(function(refreshed) {
      expect(refreshed.getUuid()).toBe(inventoryVapp.uuid);
    });
  });
});
