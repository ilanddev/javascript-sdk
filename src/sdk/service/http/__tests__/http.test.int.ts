import { IlandDirectGrantAuthProvider } from '../../../auth/index';
import { TestConfiguration } from '../../../../../__tests__/configuration';
import { Iland } from '../../../iland';
import { AxiosRequestConfig } from 'axios';
import { ApiError } from '../../../config/api-error';

jest.unmock('../http');

let auth;

beforeAll(() => {
  auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  Iland.init(auth);
});

test('Properly get string response data', async() => {
  return Iland.getHttp().get(`/users/${TestConfiguration.getUsername()}`).then((response) => {
    expect(response.data).toBeInstanceOf(Object);
  });
});

test('Properly get object response data', async() => {
  const config: AxiosRequestConfig = {headers: {'x-enable-json-security-chars': false}};
  return Iland.getHttp().get(`/users/${TestConfiguration.getUsername()}`, config).then((response) => {
    expect(response.data).toBeInstanceOf(Object);
  });
});

test('Properly handle errors with object response data', async() => {
  return Iland.getHttp().get('/users/fake').catch((reason) => {
    expect(reason).toBeInstanceOf(ApiError);
  });
});

test('Properly handle errors without response data', async() => {
  const config: AxiosRequestConfig = {headers: {'x-enable-json-security-chars': false}};
  return Iland.getHttp().get('/users/fake', config).catch((reason) => {
    expect(reason).toBeInstanceOf(ApiError);
  });
});
