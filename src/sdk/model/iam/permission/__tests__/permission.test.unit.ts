import { IlandDirectGrantAuthProvider } from '../../../../auth/direct-grant-auth-provider';
import { Iland } from '../../../../iland';
import { EntityDomain } from '../../../common/entity-domain';
import { Permission } from '../permission';

jest.mock('../../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly instantiate a Permission class', () => {
  const permission: Permission = new Permission('VIEW_ILAND_BACKUP_TENANT', 'ILAND_BACKUP_TENANT', 'READ',
    true, true, null);
  expect(permission.permissionType).toBe('VIEW_ILAND_BACKUP_TENANT');
  expect(permission.domain).toBe('ILAND_BACKUP_TENANT');
  expect(permission.accessType).toBe('READ');
  expect(permission.availableToCustomPolicy).toBeTruthy();
  expect(permission.requiredForCustomPolicy).toBeTruthy();
  expect(permission.impliedPermissions).toBeNull();
  expect(permission.toString()).toBe('VIEW_ILAND_BACKUP_TENANT');
  const domain = permission.getDomain();
  expect(domain).toBeInstanceOf(EntityDomain);
  expect(domain.toString()).toBe('ILAND_BACKUP_TENANT');
  if (domain.parent) {
    const mockExpectedDomain = new EntityDomain('ILAND_BACKUP_TENANT');
    expect(domain.parent).toEqual(mockExpectedDomain.parent);
  }
});
