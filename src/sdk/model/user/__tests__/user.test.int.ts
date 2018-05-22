import { Iland } from '../../../iland';
import { User } from '../user';
import { TestConfiguration } from '../../../../../__tests__/configuration';
import { IlandDirectGrantAuthProvider } from '../../../auth/index';

let auth;

beforeAll(() => {
  auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  Iland.init(auth);
});

test('Can get current user and verify required properties', async() => {
  return User.getCurrentUser().then(function(user) {
    const raw = user.json;
    expect(user.username).toEqual(TestConfiguration.getUsername());
    expect(user.createdDate).toBeDefined();
    expect(user.createdDate.getTime()).toBe(raw.created_date);
    expect(user.email).toBeDefined();
    expect(user.email).toBe(raw.email);
    expect(user.deletedDate).toBeNull();
    expect(user.fullName).toBeDefined();
    expect(user.fullName.length).toBeGreaterThan(1);
    expect(user.fullName).toBe(raw.fullname);
    expect(user.deleted).toBe(false);
    expect(user.locked).toBe(false);
    expect(user.userType).toEqual('CUSTOMER');
    expect(user.toString()).toContain(user.username);
    expect(user.address).toBe(raw.address);
    expect(user.email).toBe(raw.email);
    expect(user.city).toBe(raw.city);
    expect(user.company).toBe(raw.company);
    expect(user.country).toBe(raw.country);
    expect(user.phoneNumber).toBe(raw.phone);
    expect(user.state).toBe(raw.state);
    expect(user.zip).toBe(raw.zip);
  });
});

test('Can get current user and verify required properties', async() => {
  return User.getCurrentUser().then(async function(user) {
    return user.getInventory().then(inventories => {
      if (inventories.length === 0) {
        throw Error('no company inventories returned for test user, cant perform test.');
      }
      const inventory = inventories[0];
      const vms = inventory.getEntitiesByType('IAAS_VM');
      expect(vms).toBeDefined();
      if (vms.length > 0) {
        expect(vms.length).toBeGreaterThan(0);
        for (const vm of vms) {
          expect(vm.uuid).toBeDefined();
          expect(inventory.getEntityByUuid(vm.uuid)).toBeDefined();
        }
      } else {
        throw new Error('no vms in inventory');
      }
    });
  });
});

test('Test user refresh', async() => {
  return User.getCurrentUser().then(async function(user) {
    return user.refresh().then(function(user) {
      expect(user.username).toEqual(TestConfiguration.getUsername());
      expect(user.createdDate).toBeDefined();
      expect(user.email).toBeDefined();
      expect(user.deletedDate).toBeNull();
      expect(user.fullName).toBeDefined();
      expect(user.fullName.length).toBeGreaterThan(1);
      expect(user.deleted).toBe(false);
      expect(user.locked).toBe(false);
      expect(user.userType).toEqual('CUSTOMER');
      expect(user.toString()).toContain(user.username);
    });
  });
});

test('Properly get user inventory for company', async() => {
  return User.getCurrentUser().then(async(user) => {
    return user.getCompanies().then(async(companies) => {
      return user.getInventoryInCompany(companies[0].uuid).then((companyInventory) => {
        expect(companyInventory.companyId).toBe(companies[0].uuid);
      });
    });
  });
});

test('Properly throw an error if we try to get user inventory for an unknown company', async() => {
  return User.getCurrentUser().then(async(user) => {
    return user.getInventoryInCompany('fake').catch((e) => {
      expect(e.toString()).toEqual('Error: No inventory found for company with id=fake.');
    });
  });
});
