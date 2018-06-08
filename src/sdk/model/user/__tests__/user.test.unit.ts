import { IlandDirectGrantAuthProvider } from '../../../auth/index';
import { Iland } from '../../../iland';
import { User } from '../user';
import {
  MockUserCompaniesJson,
  MockUserCustomerJson,
  MockUserJson,
  MockUserRoleForCompanyJson2
} from '../__mocks__/user';
import { UserWithSecurity } from '../user-with-security';
import { Role } from '../../iam/role/role';
import { UserUpdateRequest } from '../user-update-request';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runUserAssertionsAgainstMock(user: User) {
  expect(user.company).toBe(MockUserJson.company);
  expect(user.username).toBe(MockUserJson.name);
  expect(user.fullName).toBe(MockUserJson.fullname);
  expect(user.email).toBe(MockUserJson.email);
  expect(user.phoneNumber).toBe(MockUserJson.phone);
  expect(user.state).toBe(MockUserJson.state);
  expect(user.userType).toBe(MockUserJson.user_type);
  expect(user.domain).toBe(MockUserJson.domain);
  expect(user.zip).toBe(MockUserJson.zip);
  expect(user.locked).toBe(MockUserJson.locked);
  expect(user.city).toBe(MockUserJson.city);
  expect(user.address).toBe(MockUserJson.address);
  expect(user.deleted).toBe(MockUserJson.deleted);
  if (user.deletedDate === null) {
    expect(user.deletedDate).toBeNull();
  } else {
    expect(user.deletedDate!.getTime()).toBe(MockUserJson.deleted_date);
  }
  expect(user.createdDate.getTime()).toBe(MockUserJson.created_date);
}

test('Can properly instantiate a user class', () => {
  const user = new User(MockUserJson);
  runUserAssertionsAgainstMock(user);
});

test('Can get current user companies', async() => {
  const user = new User(MockUserJson);
  return user.getCompanies().then(companies => {
    expect(companies).toBeDefined();
    expect(companies.length).toEqual(MockUserCompaniesJson.length);
    for (const idx in companies) {
      expect(companies[idx].uuid).toEqual(MockUserCompaniesJson[idx].uuid);
    }
  });
});

test('Can get current user with security', async() => {
  const adminUser = new User(MockUserJson);
  const customerUser = new User(MockUserCustomerJson);
  const adminUserPromise = UserWithSecurity.getUserWithSecurity(adminUser).then((userWithSecurity) => {
    expect(userWithSecurity.rolesCompanyMap.size).toEqual(0);
    expect(userWithSecurity.inventory.length).toEqual(0);
  });
  const customerUserPromise = UserWithSecurity.getUserWithSecurity(customerUser).then((userWithSecurity) => {
    expect(userWithSecurity.rolesCompanyMap.size).toBeGreaterThan(0);
    expect(userWithSecurity.inventory.length).toBeGreaterThan(0);
  });
  const promises = [adminUserPromise, customerUserPromise];
  return Promise.all(promises);
});

test('Properly get role from company uuid for User', async() => {
  const user = new User(MockUserJson);
  return user.getRole('000003').then((role) => {
    expect(role).toBeInstanceOf(Role);
    expect(role.policies.length).toBeGreaterThan(0);
  });
});

test('Properly assign role to User', async() => {
  const user = new User(MockUserJson);
  const role = new Role(MockUserRoleForCompanyJson2);
  return user.assignRole(role.companyId, role.uuid).then(() => {
    expect(Iland.getHttp().put).lastCalledWith(`/users/${user.username}/roles/${role.companyId}`, {
      role_uuid: role.uuid
    });
  });
});

test('Properly delete role to User', async() => {
  const user = new User(MockUserJson);
  const role = new Role(MockUserRoleForCompanyJson2);
  return user.unassignRole(role.companyId).then(() => {
    expect(Iland.getHttp().delete).lastCalledWith(`/users/${user.username}/roles/${role.companyId}`);
  });
});

test('Properly update a User', async() => {
  const user = new User(MockUserJson);
  const userUpdateReq = new UserUpdateRequest('testName', 'testPhone', 'testCompany',
    'testAddress', 'testCity', 'testState', 'testZip', 'testCountry');
  return user.update(userUpdateReq).then(userUpdated => {
    expect(Iland.getHttp().put).lastCalledWith(`/users/${user.username}`, userUpdateReq.json);
    expect(userUpdated.username).toEqual('testName');
    expect(userUpdated.phoneNumber).toEqual('123-123-1234');
    expect(userUpdated.company).toEqual('testCompany');
    expect(userUpdated.address).toEqual('testAddress');
    expect(userUpdated.city).toEqual('testCity');
    expect(userUpdated.state).toEqual('testState');
    expect(userUpdated.zip).toEqual('12345');
    expect(userUpdated.country).toEqual('testCountry');
  });
});

test('Properly delete a User', async() => {
  const user = new User(MockUserJson);
  return user.delete().then(() => {
    expect(Iland.getHttp().delete).lastCalledWith(`/users/${user.username}`);
  });
});
