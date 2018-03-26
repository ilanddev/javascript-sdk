import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { Company } from '../company';
import { MockCompanyJson } from '../../__mocks__/responses/company/company';
import { RoleCreationRequestBuilder } from '../role-creation-request';
import { PolicyBuilder } from '../policy';
import { UserCreationRequest } from '../user-creation-request';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly submits request to get a Company', async() => {
  const id = MockCompanyJson.uuid;
  return Company.getCompany(id).then(function(company) {
    expect(Iland.getHttp().get).lastCalledWith(`/companies/${id}`);
    expect(company.entityType).toBe('COMPANY');
    expect(company.hasIlandBackup).toBe(MockCompanyJson.has_vcc);
    expect(company.hasIlandCloud).toBe(MockCompanyJson.has_iaas);
    expect(company.uuid).toBe(MockCompanyJson.uuid);
    expect(company.name).toBe(MockCompanyJson.name);
    expect(company.deleted).toBe(MockCompanyJson.deleted);
    expect(company.deletedDate).toBe(MockCompanyJson.deleted_date);
    expect(company.updatedDate.getTime()).toBe(MockCompanyJson.updated_date);
    expect(company.json).toEqual(MockCompanyJson);
  });
});

test('PolicyBuilder methods work properly', async() => {
  const entityUuid = 'entityUuid';
  const builder = new PolicyBuilder(entityUuid, 'ILAND_CLOUD_VM', 'CUSTOM').addPermission('VIEW_ILAND_CLOUD_VM');
  let policy = builder.build();
  expect(policy.permissions).toBeDefined();
  expect(policy.permissions.length).toBe(1);
  policy = builder.addPermission('VIEW_ILAND_CLOUD_VM').build();
  expect(policy.permissions.length).toBe(1);
  policy = builder.removePermission('VIEW_ILAND_CLOUD_VM_BILLING').build();
  expect(policy.permissions).toBeDefined();
  expect(policy.permissions.length).toBe(1);
  policy = builder.removePermission('VIEW_ILAND_CLOUD_VM').build();
  expect(policy.permissions).toBeDefined();
  expect(policy.permissions.length).toBe(0);
});

test('RoleCreationRequestBuilder methods work properly', async() => {
  const companyId = 'companyId';
  const name = 'name';
  const description = 'description';
  const builder = new RoleCreationRequestBuilder(companyId, name, description);
  let req = builder.build();
  expect(req.policies).toBeDefined();
  expect(req.policies.length).toBe(0);
  expect(req.name).toEqual(name);
  expect(req.description).toEqual(description);
  expect(req.companyId).toEqual(companyId);
  // add a policy to the builder
  const entityUuid = 'entityUuid';
  const policy = new PolicyBuilder(entityUuid, 'ILAND_CLOUD_VM', 'CUSTOM').addPermission('VIEW_ILAND_CLOUD_VM').build();
  req = builder.setPolicy(policy).build();
  expect(req.policies.length).toBe(1);
  expect(req.policies[0].entityUuid).toBe(policy.entityUuid);
  expect(req.policies[0].entityDomain).toBe(policy.entityDomain);
  expect(req.policies[0].type).toBe(policy.type);
  // clear policies
  req = builder.clearPolicies().build();
  expect(req.policies.length).toEqual(0);

  const newName = 'new-name';
  const newDescription = 'new-description';
  req = builder.setPolicy(policy).setDescription(newDescription).setName(newName).build();
  expect(req.policies.length).toBe(1);
  expect(req.description).toEqual(newDescription);
  expect(req.name).toEqual(newName);

  // remove policy
  req = builder.removePolicy(entityUuid).build();
  expect(req.policies.length).toBe(0);
  expect(req.toString()).toBeDefined();

});

test('Properly submits request to create a company role', async() => {
  const id = MockCompanyJson.uuid;
  return Company.getCompany(id).then(async(company) => {
    expect(Iland.getHttp().get).lastCalledWith(`/companies/${id}`);
    expect(company.entityType).toBe('COMPANY');
    const policy = new PolicyBuilder('entityUuid', 'ILAND_CLOUD_VM', 'CUSTOM').addPermission('VIEW_ILAND_CLOUD_VM')
                                                                              .build();
    const request = new RoleCreationRequestBuilder(id, 'name', 'description').setPolicy(policy).build();
    return company.createRole(request).then(async function(role) {
      expect(Iland.getHttp().post).lastCalledWith(`/companies/${id}/roles`, request.json);
      expect(role.uuid).toBeDefined();
      expect(role.name).toEqual(request.name);
      expect(role.type).toEqual('CUSTOM');
      expect(role.description).toEqual(request.description);
      expect(role.companyId).toEqual(id);
      expect(role.policies).toBeDefined();
      expect(role.policies.length).toEqual(request.policies.length);
      expect(role.toString()).toBeDefined();
    });
  });
});

test('Properly submits request to create a new user', async() => {
  const id = MockCompanyJson.uuid;
  return Company.getCompany(id).then(async(company) => {
    expect(Iland.getHttp().get).lastCalledWith(`/companies/${id}`);
    expect(company.entityType).toBe('COMPANY');
    const userCreationRequest = new UserCreationRequest('domain', 'username', 'fullName', 'email', 'password');
    expect(userCreationRequest.toString()).toBeDefined();
    return company.createUser(userCreationRequest).then((user) => {
      expect(Iland.getHttp().post).lastCalledWith(`/companies/${id}/users`, userCreationRequest.json);
      expect(user.email).toBe(userCreationRequest.email);
      expect(user.username).toBe(userCreationRequest.username);
      expect(user.domain).toBe(userCreationRequest.domain);
      expect(user.fullName).toBe(userCreationRequest.fullName);
    });
  });
});

test('Properly submits request to update a company role', async() => {
  const id = MockCompanyJson.uuid;
  return Company.getCompany(id).then(async(company) => {
    expect(Iland.getHttp().get).lastCalledWith(`/companies/${id}`);
    expect(company.entityType).toBe('COMPANY');
    const fakeRoleUuid = 'fake-role-uuid';
    const policy = new PolicyBuilder('entityUuid', 'ILAND_CLOUD_VM', 'CUSTOM').addPermission('VIEW_ILAND_CLOUD_VM')
                                                                              .build();
    const request = new RoleCreationRequestBuilder(id, 'name', 'description').setPolicy(policy).build();
    return company.updateRole(fakeRoleUuid, request).then(async function(role) {
      expect(Iland.getHttp().put).lastCalledWith(`/companies/${id}/roles/${fakeRoleUuid}`, request.json);
      expect(role.uuid).toBeDefined();
      expect(role.name).toEqual(request.name);
      expect(role.type).toEqual('CUSTOM');
      expect(role.description).toEqual(request.description);
      expect(role.companyId).toEqual(id);
      expect(role.policies).toBeDefined();
      expect(role.policies.length).toEqual(request.policies.length);
      expect(role.toString()).toBeDefined();
    });
  });
});

test('Properly submits request to delete a company role', async() => {
  const id = MockCompanyJson.uuid;
  return Company.getCompany(id).then(async(company) => {
    expect(Iland.getHttp().get).lastCalledWith(`/companies/${id}`);
    expect(company.entityType).toBe('COMPANY');
    const fakeRoleUuid = 'fake-role-uuid';
    return company.deleteRole(fakeRoleUuid).then(async function() {
      expect(Iland.getHttp().delete).lastCalledWith(`/companies/${id}/roles/${fakeRoleUuid}`);
    });
  });
});

test('Properly submits request to get users with a specific role', async() => {
  const id = MockCompanyJson.uuid;
  return Company.getCompany(id).then(async(company) => {
    expect(Iland.getHttp().get).lastCalledWith(`/companies/${id}`);
    expect(company.entityType).toBe('COMPANY');
    const fakeRoleUuid = 'fake-role-uuid';
    return company.getUsersWithRole(fakeRoleUuid).then(async function() {
      expect(Iland.getHttp().get).lastCalledWith(`/companies/${id}/users`, {
        params: {
          role: fakeRoleUuid
        }
      });
    });
  });
});

test('Properly submits request to get company logo', async() => {
  const id = MockCompanyJson.uuid;
  return Company.getCompany(id).then(async(company) => {
    expect(Iland.getHttp().get).lastCalledWith(`/companies/${id}`);
    expect(company.entityType).toBe('COMPANY');
    return company.getLogo().then(async (logo) => {
      expect(Iland.getHttp().get).lastCalledWith(
        `/companies/${id}/logo`,
        {
          'headers': {'Accept': 'image/vnd.ilandcloud.api.v1.0+jpeg'},
          'responseType': 'arraybuffer'
        }
      );
      expect(logo).toBeDefined();
      expect(logo).toEqual(new Uint8Array([0xFF, 0xD8, 0xFF, 0xE0]));
    });
  });
});

test('Properly submits request to set company logo', async() => {
  const id = MockCompanyJson.uuid;
  return Company.getCompany(id).then(async(company) => {
    expect(Iland.getHttp().get).lastCalledWith(`/companies/${id}`);
    expect(company.entityType).toBe('COMPANY');
    return company.setLogo(new Uint8Array([0xFF, 0xD8, 0xFF, 0xE0])).then(async (response) => {
      expect(Iland.getHttp().post).lastCalledWith(
        `/companies/${id}/logo`,
        new Uint8Array([255, 216, 255, 224]),
        {'headers': {'Content-Type': 'image/jpeg'}}
      );
      expect(response).toBeTruthy();
    });
  });
});

test('Properly submits request to delete company logo', async() => {
  const id = MockCompanyJson.uuid;
  return Company.getCompany(id).then(async(company) => {
    expect(Iland.getHttp().get).lastCalledWith(`/companies/${id}`);
    expect(company.entityType).toBe('COMPANY');
    return company.deleteLogo().then(async (response) => {
      expect(Iland.getHttp().delete).lastCalledWith(`/companies/${id}/logo`);
      expect(response).toBeTruthy();
    });
  });
});
