import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { User } from '../user';
import { MockUserCompaniesJson, MockUserJson } from '../../__mocks__/responses/user/user';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Can get current user companies', async() => {
  const user = new User(MockUserJson);
  return user.getCompanies().then(companies => {
    expect(companies).toBeDefined();
    expect(companies.length).toEqual(MockUserCompaniesJson.length);
    for (const idx in companies) {
      expect(companies[idx].uuid).toEqual(MockUserCompaniesJson[idx].uuid);
    }
  });
});
