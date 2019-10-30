import { IlandDirectGrantAuthProvider } from '../../../../auth/direct-grant-auth-provider';
import { Iland } from '../../../../iland';
import { PermissionsMap } from '../permission-map';

jest.mock('../../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly instantiate a Permission map and get permissions', () => {
  const permissions = PermissionsMap.getInstance().permissions;
  expect(permissions.size).toBe(91);
});
