import { IlandDirectGrantAuthProvider } from '../direct-grant-auth-provider';
import { TestConfiguration } from '../../../../__tests__/configuration';

test('IlandDirectGrantAuthProvider can retrieve token', async() => {
  const auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  return auth.getToken().then(function(token) {
    expect(token).toBeDefined();
    expect(token.length).toBeGreaterThan(1);
  });
});

test('IlandDirectGrantAuthProvider has proper error handling when using bad user credentials', async() => {
  const auth = new IlandDirectGrantAuthProvider({
    username: 'fakeusername',
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  expect.assertions(1);
  return auth.getToken().then(undefined, function(reason: Error) {
    expect(reason.message).toContain('401');
  });
});

test('IlandDirectGrantAuthProvider has proper error handling when using bad client credentials', async() => {
  const auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: 'fake-client-secret',
    clientId: TestConfiguration.getClientId()
  });
  expect.assertions(1);
  return auth.getToken().then(undefined, function(reason: Error) {
    expect(reason.message).toContain('400');
  });
});

test('IlandDirectGrantAuthProvider can logout and subsequently get a new token', async() => {
  const auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  return auth.getToken().then(async function(token) {
    expect(token).toBeDefined();
    expect(token.length).toBeGreaterThan(1);
    return auth.logout().then(async function() {
      return auth.getToken().then(function(token) {
        expect(token).toBeDefined();
        expect(token.length).toBeGreaterThan(1);
      });
    });
  });
});

test('IlandDirectGrantAuthProvider can get authenticated username', async() => {
  const auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  return auth.getAuthenticatedUsername().then(function(username) {
    expect(username).toBeDefined();
    expect(username.length).toBeGreaterThan(1);
  });
});

async function getTokens(auth: IlandDirectGrantAuthProvider, times: number): Promise<string> {
  return auth.getToken().then(async function(token) {
    expect(token).toBeDefined();
    expect(token.length).toBeGreaterThan(1);
    return token;
  }).then((token) => {
    if (times === 1) {
      return token;
    } else {
      return getTokens(auth, times - 1);
    }
  });
}

test('IlandDirectGrantAuthProvider can get token multiple times consecutively', async() => {
  const auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  return getTokens(auth, 10);
});

test('IlandDirectGrantAuthProvider can refresh token', async() => {
  const auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  return getTokens(auth, 1).then(async function() {
    return auth._refreshToken().then(async function(token) {
      expect(token).toBeDefined();
      expect(token.access_token).toBeDefined();
      expect(token.access_token.length).toBeGreaterThan(1);
    });
  });
});

test('IlandDirectGrantAuthProvider can get token observer', (done) => {
  expect.assertions(2);
  const auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  auth.getTokenObservable().subscribe(token => {
    expect(token).toBeDefined();
    expect(token.length).toBeGreaterThan(1);
    done();
  }, (error) => {
    console.log(error);
    done();
  });
});
