import { Iland } from '../../iland';
import { User } from '../user';
import { TestConfiguration } from '../../../../tests/configuration';
import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';

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
    let raw = user.getJson();
    expect(user.getUsername()).toEqual(TestConfiguration.getUsername());
    expect(user.getCreatedDate()).toBeDefined();
    expect(user.getCreatedDate().getTime()).toBe(raw.created_date);
    expect(user.getCrm()).toBeDefined();
    expect(user.getCrm()).toBe(raw.crm);
    expect(user.getEmail()).toBeDefined();
    expect(user.getEmail()).toBe(raw.email);
    expect(user.getDeletedDate()).toBeNull();
    expect(user.getFullName()).toBeDefined();
    expect(user.getFullName().length).toBeGreaterThan(1);
    expect(user.getFullName()).toBe(raw.fullname);
    expect(user.isDeleted()).toBe(false);
    expect(user.isLocked()).toBe(false);
    expect(user.getUserType()).toEqual('CUSTOMER');
    expect(user.toString()).toContain(user.getUsername());
    expect(user.getAddress()).toBe(raw.address);
    expect(user.getEmail()).toBe(raw.email);
    expect(user.getCity()).toBe(raw.city);
    expect(user.getCompany()).toBe(raw.company);
    expect(user.getCountry()).toBe(raw.country);
    expect(user.getPhoneNumber()).toBe(raw.phone);
    expect(user.getState()).toBe(raw.state);
    expect(user.getZip()).toBe(raw.zip);
  });
});

test('Can get current user and verify required properties', async() => {
  return User.getCurrentUser().then(async function(user) {
    return user.getInventory().then(inventory => {
      let vms = inventory.getEntitiesByType('VM');
      expect(vms).toBeDefined();
      if (vms !== undefined) {
        expect(vms.length).toBeGreaterThan(0);
        for (let vm of vms) {
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
      expect(user.getUsername()).toEqual(TestConfiguration.getUsername());
      expect(user.getCreatedDate()).toBeDefined();
      expect(user.getCrm()).toBeDefined();
      expect(user.getEmail()).toBeDefined();
      expect(user.getDeletedDate()).toBeNull();
      expect(user.getFullName()).toBeDefined();
      expect(user.getFullName().length).toBeGreaterThan(1);
      expect(user.isDeleted()).toBe(false);
      expect(user.isLocked()).toBe(false);
      expect(user.getUserType()).toEqual('CUSTOMER');
      expect(user.toString()).toContain(user.getUsername());
    });
  });
});
