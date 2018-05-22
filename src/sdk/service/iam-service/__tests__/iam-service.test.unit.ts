import { Iland } from '../../../iland';
import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { UserWithSecurity } from '../../../model/user/user-with-security';
import { InventoryEntity } from '../../../model/user/inventory-entity/inventory-entity';
import { Permission } from '../../../model/iam/permission/permission';
import { PermissionService } from '../../permission-service/permission-service';
import { Role } from '../../../model/iam/role/role';
import { Policy, PolicyBuilder } from '../../../model/iam/policy/policy';
import { IamService } from '../iam-service';
import { MockUserCustomerJson, MockUserJson } from '../../../model/user/__mocks__/user';
import { RoleCreationRequestBuilder } from '../../../model/iam/role/role-creation-request';
import { IamEntityType } from '../../../model/common/__json__/iam-entity-type';
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

function runSystemAdminUserAssertions(user: UserWithSecurity) {
  let isUserPermitted: boolean;
  let entityList: { [type: string]: Array<InventoryEntity> };
  let entities: Array<InventoryEntity>;
  let permissions: Array<Permission> | undefined;
  if (user.inventory) {
    for (const companyInventory of user.inventory) {
      entityList = companyInventory.getAllEntitiesByType();
      for (const domainType in entityList) {
        entities = entityList[domainType];
        for (const entity of entities) {
          permissions = PermissionService.getInstance()
            .getAvailablePermissionsForDomain(domainType as IamEntityType);
          if (permissions) {
            for (const permission of permissions) {
              isUserPermitted = user.isPermittedTo(permission.permissionType, entity.uuid);
              expect(isUserPermitted).toBeTruthy();
            }
          }
        }
      }
    }
  }
}

function runCustomerUserAssertions(user: UserWithSecurity) {
  let isUserPermitted: boolean;
  let entityList: { [type: string]: Array<InventoryEntity> };
  let entities: Array<InventoryEntity>;
  let permissions: Array<Permission> | undefined;
  let userRole: Role | undefined;
  let policy: Policy | null = null;
  if (user.inventory) {
    for (const companyInventory of user.inventory) {
      entityList = companyInventory.getAllEntitiesByType();
      userRole = user.rolesCompanyMap.get(companyInventory.companyId);
      for (const domainType in entityList) {
        entities = entityList[domainType];
        permissions = PermissionService.getInstance().getAvailablePermissionsForDomain(domainType as IamEntityType);
        for (const entity of entities) {
          if (userRole) {
            policy = (IamService as any).getEffectivePolicy(companyInventory, entity, userRole);
          }
          // We actually test all permissions upon each user entities.
          if (permissions) {
            for (const permission of permissions) {
              isUserPermitted = user.isPermittedTo(permission.permissionType, entity.uuid);
              if ((policy && policy.permissions.indexOf(permission.permissionType) >= 0) ||
                (policy && policy.type === 'ADMIN') ||
                (policy && policy.type === 'READ_ONLY' && permission.accessType === 'READ')) {
                expect(isUserPermitted).toBeTruthy();
              } else {
                expect(isUserPermitted).toBeFalsy();
              }
            }
          }
        }
      }
    }
  }
}

function runCustomerUserVmVappInheritanceAssertions(user: UserWithSecurity) {
  let isUserPermitted: boolean;
  const vmPermissions: Array<PermissionType> = ['VIEW_ILAND_CLOUD_VM', 'VIEW_ILAND_CLOUD_VM_BILLING',
    'ACCESS_ILAND_CLOUD_VM_CONSOLE', 'MANAGE_ILAND_CLOUD_VM_POWER_STATE', 'MANAGE_ILAND_CLOUD_VM_CONFIGURATION',
    'MANAGE_ILAND_CLOUD_VM_SNAPSHOTS', 'COPY_MOVE_RESTORE_ILAND_CLOUD_VM', 'DELETE_ILAND_CLOUD_VM'];

  const vappPermissions: Array<PermissionType> = ['VIEW_ILAND_CLOUD_VAPP', 'VIEW_ILAND_CLOUD_VAPP_BILLING',
    'MANAGE_ILAND_CLOUD_VAPP_POWER_STATE', 'MANAGE_ILAND_CLOUD_VAPP_CONFIGURATION',
    'MANAGE_ILAND_CLOUD_VAPP_SNAPSHOTS', 'MANAGE_ILAND_CLOUD_VAPP_LEASES', 'COPY_MOVE_DOWNLOAD_ILAND_CLOUD_VAPP',
    'DELETE_ILAND_CLOUD_VAPP', 'CREATE_ILAND_CLOUD_VAPP_VMS', 'CREATE_ILAND_CLOUD_VAPP_NETWORKS'];

  for (const permissionType of vmPermissions) {
    // Admin vApp
    isUserPermitted = user.isPermittedTo(permissionType,
      'dev-vcd01.iland.dev:urn:vcloud:vm:81ac7882-add5-496a-989f-9306d0b88ace');
    expect(isUserPermitted).toBeTruthy();
    // Read only vApp
    isUserPermitted = user.isPermittedTo(permissionType,
      'dev-vcd01.iland.dev:urn:vcloud:vm:49d36471-d175-4144-acbd-9be1ab3c45c6');
    if (permissionType.includes('VIEW_ILAND')) {
      expect(isUserPermitted).toBeTruthy();
    } else {
      expect(isUserPermitted).toBeFalsy();
    }
  }
  for (const permissionType of vappPermissions) {
    // Admin vApp
    isUserPermitted = user.isPermittedTo(permissionType,
      'dev-vcd01.iland.dev:urn:vcloud:vapp:de50f729-9894-40eb-8d65-a87f741e1d7c');
    expect(isUserPermitted).toBeTruthy();
    // Read only vApp
    isUserPermitted = user.isPermittedTo(permissionType,
      'dev-vcd01.iland.dev:urn:vcloud:vapp:62783c21-2b07-4691-8a10-ee528d8a94b3');
    if (permissionType.includes('VIEW_ILAND')) {
      expect(isUserPermitted).toBeTruthy();
    } else {
      expect(isUserPermitted).toBeFalsy();
    }
  }
}

test('Properly check if system admin user is permitted on companies', async() => {
  const user = new UserWithSecurity(MockUserJson);
  return UserWithSecurity.setup(user).then((u) => {
    runSystemAdminUserAssertions(u);
  });
});

test('Properly check if customer user is permitted on companies', async() => {
  const user = new UserWithSecurity(MockUserCustomerJson);
  return UserWithSecurity.setup(user).then((u) => {
    runCustomerUserAssertions(u);
  });
});

test('Properly validate inherited permissions for VM from vApp', async() => {
  const user = new UserWithSecurity(MockUserCustomerJson);
  return UserWithSecurity.setup(user).then((u) => {
    runCustomerUserVmVappInheritanceAssertions(u);
  });
});

test('Properly validate public entities', async() => {
  const user = new UserWithSecurity(MockUserCustomerJson);
  return UserWithSecurity.setup(user).then((u) => {
    const vappTemplatePermissions = PermissionService.getInstance()
      .getAvailablePermissionsForDomain('IAAS_VAPP_TEMPLATE');
    if (vappTemplatePermissions) {
      for (const permission of vappTemplatePermissions) {
        const isUserPermitted = u.isPermittedTo(permission.permissionType,
          'public:dev-vcd01.iland.dev:urn:vcloud:vapptemplate:b1ffb935-f32c-4886-a7a6-2e4d3d7b1de8');
        if (permission.accessType === 'READ') {
          expect(isUserPermitted).toBeTruthy();
        } else {
          expect(isUserPermitted).toBeFalsy();
        }
      }
    }
    const catalogPermissions = PermissionService.getInstance().getAvailablePermissionsForDomain('IAAS_CATALOG');
    if (catalogPermissions) {
      for (const permission of catalogPermissions) {
        const isUserPermitted = u.isPermittedTo(permission.permissionType,
          'public:dev-vcd01.iland.dev:urn:vcloud:catalog:0c73d242-101d-43b3-a856-7eb4b4688534');
        if (permission.accessType === 'READ') {
          expect(isUserPermitted).toBeTruthy();
        } else {
          expect(isUserPermitted).toBeFalsy();
        }
      }
    }
    const mediaPermissions = PermissionService.getInstance().getAvailablePermissionsForDomain('IAAS_MEDIA');
    if (mediaPermissions) {
      for (const permission of mediaPermissions) {
        const isUserPermitted = u.isPermittedTo(permission.permissionType,
          'public:dev-vcd01.iland.dev:urn:vcloud:media:0c73d242-101d-43b3-a856-7eb4b4688534');
        if (permission.accessType === 'READ') {
          expect(isUserPermitted).toBeTruthy();
        } else {
          expect(isUserPermitted).toBeFalsy();
        }
      }
    }
  });
});

test('Properly validate role', async() => {
  const user = new UserWithSecurity(MockUserCustomerJson);
  const entityuuid: string = 'dev-vcd01.iland.dev:urn:vcloud:vm:92fdeb63-ecf6-4258-90fc-930bbc03b511';
  return UserWithSecurity.setup(user).then((u) => {
    const creationRequestBuilder = new RoleCreationRequestBuilder('000003', 'testRole', 'Test description');
    let errors = IamService.validateRole(creationRequestBuilder.build(), u.inventory[1]);
    expect(errors[0]).toEqual(new Error('A role must have at least one policy.'));
    //////////////////
    let customPolicyBuilder = new PolicyBuilder(
      entityuuid,
      'IAAS_VM', 'CUSTOM');
    customPolicyBuilder.addPermission('VIEW_ILAND_CLOUD_VM');
    customPolicyBuilder.addPermission('VIEW_ILAND_CLOUD_VM_BILLING');
    customPolicyBuilder.addPermission('COPY_MOVE_RESTORE_ILAND_CLOUD_VM');
    customPolicyBuilder.addPermission('DELETE_ILAND_CLOUD_VM');
    creationRequestBuilder.setPolicy(customPolicyBuilder.build());
    errors = IamService.validateRole(creationRequestBuilder.build(), u.inventory[1]);
    expect(errors.length).toEqual(0);
    //////////////////
    customPolicyBuilder = new PolicyBuilder(
      'fake-uuid',
      'IAAS_VM', 'CUSTOM');
    creationRequestBuilder.clearPolicies().setPolicy(customPolicyBuilder.build());
    errors = IamService.validateRole(creationRequestBuilder.build(), u.inventory[1]);
    expect(errors[0]).toEqual(new Error('Entity fake-uuid not found in this company.'));
    //////////////////
    customPolicyBuilder = new PolicyBuilder(
      entityuuid,
      'IAAS_VAPP', 'CUSTOM');
    creationRequestBuilder.clearPolicies().setPolicy(customPolicyBuilder.build());
    errors = IamService.validateRole(creationRequestBuilder.build(), u.inventory[1]);
    expect(errors[0]).toEqual(new Error('Policy for entity Portal Resource Non-Regression has domain type ' +
      'IAAS_VAPP but entity is actually of type IAAS_VM'));
    //////////////////
    customPolicyBuilder = new PolicyBuilder(
      entityuuid,
      'IAAS_VM', 'CUSTOM');
    customPolicyBuilder.setPermissions([]);
    creationRequestBuilder.clearPolicies().setPolicy(customPolicyBuilder.build());
    errors = IamService.validateRole(creationRequestBuilder.build(), u.inventory[1]);
    expect(errors[0]).toEqual(new Error('Custom policies must contain at least one permission.'));
    //////////////////
    customPolicyBuilder.setPermissions(['VIEW_ILAND_CLOUD_VM_BILLING', 'COPY_MOVE_RESTORE_ILAND_CLOUD_VM']);
    creationRequestBuilder.clearPolicies().setPolicy(customPolicyBuilder.build());
    errors = IamService.validateRole(creationRequestBuilder.build(), u.inventory[1]);
    expect(errors[0]).toEqual(new Error('Custom policy doesn\'t have the required permission.'));
    //////////////////
    try {
      customPolicyBuilder.setPermissions(['VIEW_ILAND_CLOUD_VM', 'MANAGE_COMPANY_IAM']);
    } catch (err) {
      expect(err).toEqual(new Error('Attempted to add permission=MANAGE_COMPANY_IAM in domain=COMPANY to ' +
        'policy in domain=IAAS_VM.'));
    }
    //////////////////
    customPolicyBuilder = new PolicyBuilder(
      '000003',
      'COMPANY', 'CUSTOM');
    customPolicyBuilder.setPermissions(['VIEW_COMPANY', 'MANAGE_COMPANY_SUPPORT_TICKETS']);
    creationRequestBuilder.clearPolicies().setPolicy(customPolicyBuilder.build());
    errors = IamService.validateRole(creationRequestBuilder.build(), u.inventory[1]);
    expect(errors[0]).toEqual(new Error('Policy must contain permission=VIEW_COMPANY_SUPPORT_TICKETS' +
      ' since it has permission=MANAGE_COMPANY_SUPPORT_TICKETS.'));
  });
});
