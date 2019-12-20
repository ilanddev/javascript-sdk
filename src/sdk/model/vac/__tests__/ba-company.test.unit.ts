import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { Iland } from '../../../iland';
import { BaCompanyContractUpgradeRequest } from '../upgrade-tenant-contract-request';
import { BaCompany } from '../ba-company';
import { MockCloudTenantJson } from '../__mocks__/ba-company';

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
  const contractRequest = new BaCompanyContractUpgradeRequest(500);
  const cloudTenant = new BaCompany(MockCloudTenantJson);
  return cloudTenant.upgradeTenantContract(contractRequest).then(function() {
    expect(Iland.getHttp().post)
      .lastCalledWith(`/vac-companies/${cloudTenant.uuid}/actions/request-upgrade-contract`, contractRequest.json);
  });
});
