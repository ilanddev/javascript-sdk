import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { DomainPermissionsMap } from '../domain-permission-map';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly instantiate a Domain Permissions map and get permissions', () => {
  const permissions = DomainPermissionsMap.getInstance().domainPermissions;
  expect(permissions.size).toBe(17);
});
