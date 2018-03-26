import { Iland } from '../../iland';
import { User } from '../user';
import { TestConfiguration } from '../../../../__tests__/configuration';
import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { InventoryEntity } from 'src/sdk/model/company-inventory';
import { Company } from '../company';

let auth;
let companyEntity: InventoryEntity;

beforeAll(async() => {
  auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  Iland.init(auth);
  try {
    const user = await User.getCurrentUser();
    const inventories = await user.getInventory();
    if (inventories.length === 0) {
      fail('no company inventories returned for test user, cant perform test.');
    } else {
      const inventory = inventories[0];
      const companies = inventory.getEntitiesByType('COMPANY');
      if (companies === undefined || companies.length === 0) {
        fail('no companies found in user inventory, couldn\'t perform integration tests');
      } else {
        companyEntity = companies[0];
      }
    }
  } catch (err) {
    fail('an error occurred while attempting to get test company. ' + err);
  }
});

test('Can get company roles', async() => {
  return Company.getCompany(companyEntity.uuid).then(async function(company) {
    return company.getRoles().then(async function(roles) {
      expect(roles).toBeDefined();
      expect(roles.length).toBeGreaterThan(0);
      for (const role of roles) {
        expect(role.json).toBeDefined();
        const json = role.json;
        expect(role.uuid).toBeDefined();
        expect(role.uuid).toEqual(json.uuid);
        expect(role.name).toBeDefined();
        expect(role.name).toEqual(json.name);
        expect(role.type === 'CUSTOM' || role.type === 'BUILT_IN').toBeTruthy();
        expect(role.type).toEqual(json.type);
        expect(role.companyId).toEqual(company.uuid);
        expect(role.policies).toBeDefined();
        expect(role.policies.length).toBeGreaterThan(0);
        expect(role.policies.length).toEqual(json.policies.length);
        expect(role.toString()).toBeDefined();
        for (const policy of role.policies) {
          const jsonPolicy = json.policies.find((jsonPolicy) => jsonPolicy.entity_uuid === policy.entityUuid);
          expect(jsonPolicy).toBeDefined();
          if (jsonPolicy !== undefined) {
            expect(policy.type).toEqual(jsonPolicy.type);
            expect(policy.entityDomain).toEqual(jsonPolicy.domain);
            expect(policy.toString()).toBeDefined();
            expect(policy.json).toEqual(jsonPolicy);
            expect(policy.permissions).toBeDefined();
          }
        }
        expect(role.description).toEqual(json.description);
        return company.getRole(role.uuid).then((roleByUuid) => {
          expect(roleByUuid).toBeDefined();
          expect(roleByUuid.uuid).toBe(role.uuid);
          expect(roleByUuid.description).toBe(role.description);
          expect(roleByUuid.companyId).toBe(companyEntity.uuid);
          expect(roleByUuid.name).toBe(role.name);
          expect(roleByUuid.type).toBe(role.type);
          expect(roleByUuid.policies).toEqual(role.policies);
        });
      }
    });
  });
});

test('Can get company users', async() => {
  return Company.getCompany(companyEntity.uuid).then(async function(company) {
    return company.getUsers().then(async function(users) {
      expect(users).toBeDefined();
      expect(users.length).toBeGreaterThan(0);
      for (const user of users) {
        expect(user.username).toBeDefined();
        expect(user.userType).toBeDefined();
      }
    });
  });
});

test('Can get company user domains', async() => {
  return Company.getCompany(companyEntity.uuid).then(async function(company) {
    return company.getUserDomains().then(async function(domains) {
      expect(domains).toBeDefined();
      expect(domains.length).toBeGreaterThan(0);
      for (const domain of domains) {
        expect(domain).toBeDefined();
      }
    });
  });
});

test('Can refresh company', async() => {
  return Company.getCompany(companyEntity.uuid).then(async function(company) {
    return company.refresh().then((refreshed) => {
      expect(refreshed.json).toEqual(company.json);
      expect(refreshed.toString()).toEqual(company.toString());
    });
  });
});

test('Can set logo', async() => {
  const jpegMagic = new Uint8Array([0xFF, 0xD8, 0xFF, 0xE0]);
  return Company.getCompany(companyEntity.uuid).then(async function(company) {
    return company.setLogo(jpegMagic).then((response) => {
      expect(response).toBeTruthy();
    });
  });
});

test('Can get logo', async() => {
  return Company.getCompany(companyEntity.uuid).then(async function(company) {
    return company.getLogo().then((logo) => {
      expect(logo).toBeDefined();
      expect(logo!!.length).toEqual(4);
    });
  });
});

test('Can delete logo', async() => {
  return Company.getCompany(companyEntity.uuid).then(async function(company) {
    return company.deleteLogo().then((response) => {
      expect(response).toBeTruthy();
      company.getLogo().then((logo) => {
        expect(logo).toBeUndefined();
      });
    });
  });
});
