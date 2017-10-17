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
    expect(company.getJson()).toEqual(MockCompanyJson);
  });
});
