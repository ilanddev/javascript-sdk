import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { Company } from '../company';
import { MockCompanyJson } from '../../__mocks__/responses/company/company';

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
  let id = MockCompanyJson.uuid;
  return Company.getCompany(id).then(function(company) {
    expect(Iland.getHttp().get).lastCalledWith(`/companies/${id}`);
    expect(company.getEntityType()).toBe('COMPANY');
    expect(company.hasIlandBackup()).toBe(MockCompanyJson.has_vcc);
    expect(company.hasIlandCloud()).toBe(MockCompanyJson.has_iaas);
    expect(company.getUuid()).toBe(MockCompanyJson.uuid);
    expect(company.getName()).toBe(MockCompanyJson.name);
    expect(company.isDeleted()).toBe(MockCompanyJson.deleted);
    expect(company.getDeletedDate()).toBe(MockCompanyJson.deleted_date);
    expect(company.getUpdatedDate().getTime()).toBe(MockCompanyJson.updated_date);
    expect(company.getJson()).toEqual(MockCompanyJson);
  });
});
