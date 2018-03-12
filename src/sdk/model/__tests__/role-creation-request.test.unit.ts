import { Iland } from '../../iland';
import { IlandDirectGrantAuthProvider } from '../../auth/index';
import { MockUserCustomerJson } from '../../__mocks__/responses/user/user';
import { PolicyBuilder, RoleCreationRequestBuilder, UserWithSecurity } from '../index';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly instantiate a RoleCreationRequest', async() => {
  const user = new UserWithSecurity(MockUserCustomerJson);
  const entityuuid: string = 'dev-vcd01.iland.dev:urn:vcloud:vm:92fdeb63-ecf6-4258-90fc-930bbc03b511';
  return UserWithSecurity.setup(user).then((u) => {
    const creationRequestBuilder = new RoleCreationRequestBuilder('000003', 'testRole', 'Test description');
    const customPolicyBuilder = new PolicyBuilder(
      entityuuid,
      'ILAND_CLOUD_VM', 'CUSTOM');
    customPolicyBuilder.addPermission('VIEW_ILAND_CLOUD_VM');
    creationRequestBuilder.setPolicy(customPolicyBuilder.build());
    expect(creationRequestBuilder.build().getPolicy(entityuuid)).toEqual(customPolicyBuilder.build());
  });
});
