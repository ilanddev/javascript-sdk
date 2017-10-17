import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { TestConfiguration } from '../../../../__tests__/configuration';
import { Iland } from '../../iland';
import { User } from '../user';
import { InventoryEntity } from '../inventory';
import { ApiError } from '../../api-error';
import { Org } from '../org';

let auth: IlandDirectGrantAuthProvider;
let inventoryOrg: InventoryEntity;

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
      let orgs = inventory.getEntitiesByType('ORG');
      expect(orgs).toBeDefined();
      if (orgs) {
        expect(orgs.length).toBeGreaterThan(0);
        inventoryOrg = orgs[0];
      } else {
        fail('failed to get inventory Orgs for org integration tests');
      }
    });
  });
});

test('Get a proper error when trying to retrieve non-existent Org', async() => {
  try {
    await Org.getOrg('fake-uuid');
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

test('Can get Org and verify required properties', async() => {
  return Org.getOrg(inventoryOrg.uuid).then(function(org) {
    let raw = org.getJson();
    expect(org.getName()).toBeDefined();
    expect(org.getName()).toBe(raw.name);
    expect(org.getUuid()).toBe(inventoryOrg.uuid);
    expect(org.getUuid()).toBe(raw.uuid);
    expect(org.getLocationId()).toBeDefined();
    expect(org.getLocationId()).toBe(raw.location_id);
    expect(org.getVcloudHref()).toBeDefined();
    expect(org.getVcloudHref()).toBe(raw.vcloud_href);
    expect(org.getDescription()).toBeDefined();
    expect(org.getDescription()).toBe(raw.description);
    expect(org.toString().length).toBeGreaterThan(0);
    expect(org.isDeleted()).toBe(false);
    expect(org.getUpdatedDate()).toBeDefined();
    expect(org.getDeletedDate()).toBeNull();
    expect(org.getEntityType()).toBe('ORG');
    expect(org.isEnabled()).toBeDefined();
    expect(org.isEnabled()).toBe(raw.enabled);
    expect(org.getVappMaxRuntimeLease()).toBeDefined();
    expect(org.getVappMaxRuntimeLease()).toBe(raw.vapp_max_runtime_lease);
    expect(org.getVappMaxStorageLease()).toBeDefined();
    expect(org.getVappMaxStorageLease()).toBe(raw.vapp_max_storage_lease);
    expect(org.getVappTemplateMaxStorageLease()).toBeDefined();
    expect(org.getVappTemplateMaxStorageLease()).toBe(raw.vapp_template_max_storage_lease);
    expect(org.isVappDeletedOnStorageLeaseExpiration()).toBeDefined();
    expect(org.isVappDeletedOnStorageLeaseExpiration()).toBe(raw.vapp_delete_on_storage_expire);
    expect(org.isVappTemplateDeletedOnStorageLeaseExpiration()).toBeDefined();
    expect(org.isVappTemplateDeletedOnStorageLeaseExpiration()).toBe(raw.vapp_template_delete_on_storage_expire);
    expect(org.isZertoTarget()).toBeDefined();
    expect(org.isZertoTarget()).toBe(raw.zerto_target);
    expect(org.getFullName()).toBeDefined();
    expect(org.getFullName()).toBe(raw.fullname);
    expect(org.getCompanyId()).toBeDefined();
    expect(org.getCompanyId()).toBe(raw.crm);
  });
});

test('Can refresh Org', async() => {
  return Org.getOrg(inventoryOrg.uuid).then(async function(org) {
    expect(org.getUuid()).toBe(inventoryOrg.uuid);
    return org.refresh().then(function(refreshed) {
      expect(refreshed.getUuid()).toBe(inventoryOrg.uuid);
    });
  });
});
