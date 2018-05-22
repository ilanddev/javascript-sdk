import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { TestConfiguration } from '../../../../../__tests__/configuration';
import { Iland } from '../../../iland';
import { User } from '../../user/user';
import { ApiError } from '../../../config/api-error';
import { Org } from '../org';
import { InventoryEntity } from '../../user/inventory-entity/inventory-entity';

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
      if (inventory.length === 0) {
        throw Error('no company inventories returned for test user, cant perform test.');
      }
      const orgs = inventory[0].getEntitiesByType('IAAS_ORGANIZATION');
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
    const raw = apiError.getJson();
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
    const raw = org.json;
    expect(org.name).toBeDefined();
    expect(org.name).toBe(raw.name);
    expect(org.uuid).toBe(inventoryOrg.uuid);
    expect(org.uuid).toBe(raw.uuid);
    expect(org.locationId).toBeDefined();
    expect(org.locationId).toBe(raw.location_id);
    expect(org.vcloudHref).toBeDefined();
    expect(org.vcloudHref).toBe(raw.vcloud_href);
    expect(org.description).toBeDefined();
    expect(org.description).toBe(raw.description);
    expect(org.toString().length).toBeGreaterThan(0);
    expect(org.deleted).toBe(false);
    expect(org.updatedDate).toBeDefined();
    expect(org.deletedDate).toBeNull();
    expect(org.entityType).toBe('IAAS_ORGANIZATION');
    expect(org.enabled).toBeDefined();
    expect(org.enabled).toBe(raw.enabled);
    expect(org.vappMaxRuntimeLease).toBeDefined();
    expect(org.vappMaxRuntimeLease).toBe(raw.vapp_max_runtime_lease);
    expect(org.vappMaxStorageLease).toBeDefined();
    expect(org.vappMaxStorageLease).toBe(raw.vapp_max_storage_lease);
    expect(org.vappTemplateMaxStorageLease).toBeDefined();
    expect(org.vappTemplateMaxStorageLease).toBe(raw.vapp_template_max_storage_lease);
    expect(org.vappDeletedOnStorageLeaseExpiration).toBeDefined();
    expect(org.vappDeletedOnStorageLeaseExpiration).toBe(raw.vapp_delete_on_storage_expire);
    expect(org.vappTemplateDeletedOnStorageLeaseExpiration).toBeDefined();
    expect(org.vappTemplateDeletedOnStorageLeaseExpiration).toBe(raw.vapp_template_delete_on_storage_expire);
    expect(org.zertoTarget).toBeDefined();
    expect(org.zertoTarget).toBe(raw.zerto_target);
    expect(org.fullName).toBeDefined();
    expect(org.fullName).toBe(raw.fullname);
    expect(org.companyId).toBeDefined();
    expect(org.companyId).toBe(raw.crm);
  });
});

test('Can refresh Org', async() => {
  return Org.getOrg(inventoryOrg.uuid).then(async function(org) {
    expect(org.uuid).toBe(inventoryOrg.uuid);
    return org.refresh().then(function(refreshed) {
      expect(refreshed.uuid).toBe(inventoryOrg.uuid);
    });
  });
});
