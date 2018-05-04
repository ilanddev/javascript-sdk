import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { Iland } from '../../../iland';
import { UserWithSecurity } from '../user-with-security';
import { MockUserCustomerJson, MockUserJson } from '../__mocks__/user';
import { Role } from '../../iam/role/role';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runUserAssertionsAgainstMock(userWithSecurity: UserWithSecurity) {
  expect(userWithSecurity.company).toBe(MockUserJson.company);
  expect(userWithSecurity.username).toBe(MockUserJson.name);
  expect(userWithSecurity.fullName).toBe(MockUserJson.fullname);
  expect(userWithSecurity.email).toBe(MockUserJson.email);
  expect(userWithSecurity.phoneNumber).toBe(MockUserJson.phone);
  expect(userWithSecurity.state).toBe(MockUserJson.state);
  expect(userWithSecurity.userType).toBe(MockUserJson.user_type);
  expect(userWithSecurity.domain).toBe(MockUserJson.domain);
  expect(userWithSecurity.zip).toBe(MockUserJson.zip);
  expect(userWithSecurity.locked).toBe(MockUserJson.locked);
  expect(userWithSecurity.city).toBe(MockUserJson.city);
  expect(userWithSecurity.address).toBe(MockUserJson.address);
  expect(userWithSecurity.deleted).toBe(MockUserJson.deleted);
  if (userWithSecurity.deletedDate === null) {
    expect(userWithSecurity.deletedDate).toBeNull();
  } else {
    expect(userWithSecurity.deletedDate!.getTime()).toBe(MockUserJson.deleted_date);
  }
  expect(userWithSecurity.createdDate.getTime()).toBe(MockUserJson.created_date);
}

test('Can properly instantiate a UserWithSecurity class', () => {
  const userWithSecurity = new UserWithSecurity(MockUserJson);
  runUserAssertionsAgainstMock(userWithSecurity);
});

test('Properly setup a user with security class', async() => {
  const adminUser = new UserWithSecurity(MockUserJson);
  const customerUser = new UserWithSecurity(MockUserCustomerJson);
  const adminUserPromise = UserWithSecurity.setup(adminUser).then((userWithSecurity) => {
    expect(userWithSecurity.rolesCompanyMap.size).toEqual(0);
    expect(userWithSecurity.inventory.length).toEqual(0);
  });
  const customerUserPromise = UserWithSecurity.setup(customerUser).then((userWithSecurity) => {
    expect(userWithSecurity.rolesCompanyMap.size).toBeGreaterThan(0);
    expect(userWithSecurity.inventory.length).toBeGreaterThan(0);
  });
  const promises = [adminUserPromise, customerUserPromise];
  return Promise.all(promises);
});

test('Properly get roles for UserWithSecurity', async() => {
  const userWithSecurity = new UserWithSecurity(MockUserJson);
  return userWithSecurity.getRoles().then((roles) => {
    expect(roles.length).toBeGreaterThan(0);
  });
});

test('Properly get role from company uuid for UserWithSecurity', async() => {
  const userWithSecurity = new UserWithSecurity(MockUserJson);
  return userWithSecurity.getRole('000003').then((role) => {
    expect(role).toBeInstanceOf(Role);
    expect(role.policies.length).toBeGreaterThan(0);
  });
});
