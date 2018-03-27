import { Iland } from '../../iland';
import { IlandDirectGrantAuthProvider } from '../../auth/index';
import { MockLocation } from '../../__mocks__/responses/location/location';
import { Location } from '../location';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly instantiate location object', async() => {
  const location = new Location(MockLocation);
  expect(location.uuid).toEqual(MockLocation.uuid);
  expect(location.name).toEqual(MockLocation.name);
});
