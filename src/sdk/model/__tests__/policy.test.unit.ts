import { Iland } from '../../iland';
import { IlandDirectGrantAuthProvider } from '../../auth/index';
import { PolicyBuilder, UserWithSecurity } from '../index';
import { MockUserCustomerJson } from '../../__mocks__/responses/user/user';
import { PermissionType } from '../json/permission-type';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly create a policy using the builder', async() => {
  const user = new UserWithSecurity(MockUserCustomerJson);
  const entityuuid: string = 'dev-vcd01.iland.dev:urn:vcloud:vm:92fdeb63-ecf6-4258-90fc-930bbc03b511';
  return UserWithSecurity.setup(user).then((u) => {
    const customPolicyBuilder = new PolicyBuilder(
      entityuuid,
      'ILAND_CLOUD_VM', 'CUSTOM');
    expect(customPolicyBuilder.build().type).toEqual('CUSTOM');
    expect(customPolicyBuilder.build().entityDomain).toEqual('ILAND_CLOUD_VM');
    expect(customPolicyBuilder.build().entityUuid).toEqual(entityuuid);
  });
});

test('Properly throw error when adding permission that are wrong', async() => {
  const user = new UserWithSecurity(MockUserCustomerJson);
  const entityuuid: string = 'dev-vcd01.iland.dev:urn:vcloud:vm:92fdeb63-ecf6-4258-90fc-930bbc03b511';
  return UserWithSecurity.setup(user).then((u) => {
    const customPolicyBuilder = new PolicyBuilder(
      entityuuid,
      'COMPANY', 'CUSTOM');
    try {
      customPolicyBuilder.addPermission('VIEW_ILAND_CLOUD_VM');
    } catch (err) {
      expect(err).toEqual(new Error('Attempted to add permission=VIEW_ILAND_CLOUD_VM in ' +
        'domain=ILAND_CLOUD_VM to policy in domain=COMPANY.'));
    }
    try {
      customPolicyBuilder.addPermission('MANAGE_COMPANY_IAM');
    } catch (err) {
      expect(err).toEqual(new Error('Permission=MANAGE_COMPANY_IAM cannot be assigned to a custom policy.'));
    }
    try {
      customPolicyBuilder.addPermission('FAKE_PERMISSION' as PermissionType);
    } catch (err) {
      expect(err).toEqual(new Error('Permission=FAKE_PERMISSION doesn\'t exist.'));
    }

    const adminPolicyBuilder = new PolicyBuilder(
      entityuuid,
      'COMPANY', 'ADMIN');
    try {
      adminPolicyBuilder.addPermission('VIEW_COMPANY');
    } catch (err) {
      expect(err).toEqual(new Error('Attempted to add permission to policy of type=ADMIN. ' +
        'Permissions may only be explicitly added to policies with type=CUSTOM'));
    }
    // Be sure that all cases where handled. The policy shouldn't have any permissions.
    expect(adminPolicyBuilder.build().permissions.length).toEqual(0);
    expect(customPolicyBuilder.build().permissions.length).toEqual(0);
  });
});
