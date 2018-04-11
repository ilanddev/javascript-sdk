import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { UpgradeTenantContractRequestJson } from '../json/cloud-tenant';
import { CloudTenant } from '../cloud-tenant';
import { MockCloudTenantJson } from '../../__mocks__/responses/cloud-tenant/cloud-tenant';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Upgrade Cloud Tenant contract', async() => {
  const contractRequest: UpgradeTenantContractRequestJson = {
    additional_storage_in_gb: 500
  };
  const cloudTenant = new CloudTenant(MockCloudTenantJson);
  return cloudTenant.upgradeTenantContract(contractRequest).then(function() {
    expect(Iland.getHttp().post)
        .lastCalledWith(`/cloud-tenants/${cloudTenant.uuid}/actions/upgrade-contract`, contractRequest);
  });
});
