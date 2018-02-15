import { TestConfiguration } from '../../../__tests__/configuration';
import { IlandDirectGrantAuthProvider } from '../auth/';
import { Iland, IlandSdkConfig } from '../iland';
import { User } from '../model/';
import { BasicConfiguration } from '../basic-configuration';

test('Throws error when trying to get the auth provider before the sdk is initialized', () => {
  expect.assertions(1);
  try {
    Iland.getAuthProvider();
  } catch (error) {
    expect(error.message).toEqual('The Iland SDK has not yet been initialized.');
  }
});

test('Throws error when trying to get the http client before the sdk is initialized', () => {
  expect.assertions(1);
  try {
    Iland.getHttp();
  } catch (error) {
    expect(error.message).toEqual('The Iland SDK has not yet been initialized.');
  }
});

test('Can create Iland sdk client using default base URL, and retrieve current user', async() => {
  const auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  Iland.init(auth);
  return User.getCurrentUser().then(function(user) {
    expect(user.username).toEqual(TestConfiguration.getUsername());
  });
});

test('Can create Iland sdk client with custom baseUrl, and retrieve current user', async() => {
  const auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  const ilandSdkConfig: IlandSdkConfig = {baseUrl: `${BasicConfiguration.getApiUrl()}/v1`};
  Iland.init(auth, ilandSdkConfig);
  return User.getCurrentUser().then(function(user) {
    expect(user.username).toEqual(TestConfiguration.getUsername());
  });
});

test('Test generic http request method', async function() {
  return Iland.getHttp().request({
    url: '/constants/country-codes',
    method: 'GET'
  }).then(function(response) {
    expect(response.status).toBe(200);
  });
});
