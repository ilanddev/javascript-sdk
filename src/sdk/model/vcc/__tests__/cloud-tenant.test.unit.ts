import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { Iland } from '../../../iland';
import { CloudTenant } from '../cloud-tenant';
import { MockCloudTenantJson } from '../__mocks__/cloud-tenant';
import { UpdateTenantContractRequest } from '../upgrade-tenant-contract-request/upgrade-tenant-contract-request';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Upgrade Cloud Tenant contract', async() => {
  const contractRequest = new UpdateTenantContractRequest(500);
  const cloudTenant = new CloudTenant(MockCloudTenantJson);
  return cloudTenant.upgradeTenantContract(contractRequest).then(function() {
    expect(Iland.getHttp().post)
      .lastCalledWith(`/vcc-backup-tenants/${cloudTenant.uuid}/actions/upgrade-contract`, contractRequest.json);
  });
});
