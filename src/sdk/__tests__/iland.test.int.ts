import { TestConfiguration } from '../../../__tests__/configuration';
import { IlandDirectGrantAuthProvider } from '../auth/direct-grant-auth-provider';
import { Iland } from '../iland';
import { User } from '../model/user';

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

test('Can create Iland sdk client, and retrieve current user', async() => {
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

test('Test generic http request method', async function() {
  return Iland.getHttp().request({
    url: '/constants/country-codes',
    method: 'GET'
  }).then(function(response) {
    expect(response.status).toBe(200);
  });
});
