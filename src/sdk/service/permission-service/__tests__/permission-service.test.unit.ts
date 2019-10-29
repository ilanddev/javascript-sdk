import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { Iland } from '../../../iland';
import { PermissionService } from '../permission-service';
import { Permission } from '../../../model/iam/permission/permission';
import { PermissionType } from '../../../model/iam/permission/__json__/permission-type';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runPermissionServiceAssertions(availablePermissions: Array<Permission> | undefined,
                                        expectedValue: number | undefined) {
  if (availablePermissions === undefined) {
    expect(availablePermissions).toBe(expectedValue);
  } else {
    expect(availablePermissions.length).toBe(expectedValue);
  }
}

function runPermissionServiceViewPermissionAssertions(permission: Permission | undefined,
                                                      expectedPermissionType: PermissionType | undefined) {
  if (permission === undefined) {
    expect(permission).toBe(undefined);
  } else {
    expect(permission.permissionType).toBe(expectedPermissionType);
  }
}

test('Properly instantiate permission service to get permissions and domain permissions maps', () => {
  const permissionService = PermissionService.getInstance();
  expect(permissionService.permissions.size).toBe(91);
  expect(permissionService.domainPermissions.size).toBe(20);
});

test('Properly get the available permissions for domain', () => {
  const permissionService = PermissionService.getInstance();
  let availablePermissions = permissionService.getAvailablePermissionsForDomain('COMPANY');
  runPermissionServiceAssertions(availablePermissions, 6);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_PRODUCT');
  runPermissionServiceAssertions(availablePermissions, 2);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('VCC_BACKUP_PRODUCT');
  runPermissionServiceAssertions(availablePermissions, 2);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_LOCATION');
  runPermissionServiceAssertions(availablePermissions, 2);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_ORGANIZATION');
  runPermissionServiceAssertions(availablePermissions, 12);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_VPG');
  runPermissionServiceAssertions(availablePermissions, 4);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_CATALOG');
  runPermissionServiceAssertions(availablePermissions, 5);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_MEDIA');
  runPermissionServiceAssertions(availablePermissions, 4);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_VAPP_TEMPLATE');
  runPermissionServiceAssertions(availablePermissions, 4);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_VDC');
  runPermissionServiceAssertions(availablePermissions, 6);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_EDGE');
  runPermissionServiceAssertions(availablePermissions, 9);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_INTERNAL_NETWORK');
  runPermissionServiceAssertions(availablePermissions, 3);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_VAPP');
  runPermissionServiceAssertions(availablePermissions, 10);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_VAPP_NETWORK');
  runPermissionServiceAssertions(availablePermissions, 3);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('IAAS_VM');
  runPermissionServiceAssertions(availablePermissions, 8);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('VCC_BACKUP_LOCATION');
  runPermissionServiceAssertions(availablePermissions, 3);
  availablePermissions = permissionService.getAvailablePermissionsForDomain('VCC_BACKUP_TENANT');
  runPermissionServiceAssertions(availablePermissions, 2);
});

test('Properly get the required permissions for domain', () => {
  const permissionService = PermissionService.getInstance();
  let requiredPermissions = permissionService.getRequiredPermissionsForDomain('COMPANY');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_PRODUCT');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('VCC_BACKUP_PRODUCT');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_LOCATION');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_ORGANIZATION');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_VPG');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_CATALOG');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_MEDIA');
  runPermissionServiceAssertions(requiredPermissions, 2);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_VAPP_TEMPLATE');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_VDC');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_EDGE');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_INTERNAL_NETWORK');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_VAPP');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_VAPP_NETWORK');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('IAAS_VM');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('VCC_BACKUP_LOCATION');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain('VCC_BACKUP_TENANT');
  runPermissionServiceAssertions(requiredPermissions, 1);
  requiredPermissions = permissionService.getRequiredPermissionsForDomain(undefined);
  runPermissionServiceAssertions(requiredPermissions, undefined);
});

test('Properly get the view permissions for domain', () => {
  const permissionService = PermissionService.getInstance();
  let viewPermission = permissionService.getViewPermissionForDomain('COMPANY');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_COMPANY');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_PRODUCT');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD');
  viewPermission = permissionService.getViewPermissionForDomain('VCC_BACKUP_PRODUCT');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_BACKUP');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_LOCATION');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD_LOCATION');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_ORGANIZATION');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD_ORG');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_VPG');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD_VPG');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_CATALOG');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD_CATALOG');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_MEDIA');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD_MEDIA');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_VAPP_TEMPLATE');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD_VAPP_TEMPLATE');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_VDC');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD_VDC');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_EDGE');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD_EDGE');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_INTERNAL_NETWORK');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD_INTERNAL_NETWORK');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_VAPP');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD_VAPP');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_VAPP_NETWORK');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD_VAPP_NETWORK');
  viewPermission = permissionService.getViewPermissionForDomain('IAAS_VM');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_CLOUD_VM');
  viewPermission = permissionService.getViewPermissionForDomain('VCC_BACKUP_LOCATION');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_BACKUP_LOCATION');
  viewPermission = permissionService.getViewPermissionForDomain('VCC_BACKUP_TENANT');
  runPermissionServiceViewPermissionAssertions(viewPermission, 'VIEW_ILAND_BACKUP_TENANT');
  viewPermission = permissionService.getViewPermissionForDomain(undefined);
  runPermissionServiceViewPermissionAssertions(viewPermission, undefined);
});

test('Properly get implied permissions', () => {
  const impliedPermissionType: Array<PermissionType> =
      ['VIEW_ILAND_CLOUD_VDC'];
  const permissionService = PermissionService.getInstance();
  const impliedPermissions = permissionService.getImpliedPermissions(impliedPermissionType);
  if (impliedPermissions !== null) {
    for (const permission of impliedPermissions) {
      expect(permission).toBeInstanceOf(Permission);
    }
    expect(impliedPermissions[0].permissionType).toBe('VIEW_ILAND_CLOUD_VAPP');
  }
});
