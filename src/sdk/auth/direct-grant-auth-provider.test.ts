import {IlandDirectGrantAuthProvider} from "./direct-grant-auth-provider";
import {TestConfiguration} from "../../../tests/configuration";

test('IlandDirectGrantAuthProvider can retrieve token', () => {
  let auth = new IlandDirectGrantAuthProvider({
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

test('IlandDirectGrantAuthProvider has proper error handling when using bad user credentials', () => {
  let auth = new IlandDirectGrantAuthProvider({
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

test('IlandDirectGrantAuthProvider has proper error handling when using bad client credentials', () => {
  let auth = new IlandDirectGrantAuthProvider({
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

test('IlandDirectGrantAuthProvider can logout and subsequently get a new token', () => {
  let auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  return auth.getToken().then(function(token) {
    expect(token).toBeDefined();
    expect(token.length).toBeGreaterThan(1);
    return auth.logout().then(function() {
      return auth.getToken().then(function(token) {
        expect(token).toBeDefined();
        expect(token.length).toBeGreaterThan(1);
      });
    });
  });
});

test('IlandDirectGrantAuthProvider can get authenticated username', () => {
  let auth = new IlandDirectGrantAuthProvider({
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

function getTokens(auth: IlandDirectGrantAuthProvider, times: number): Promise<string> {
  return auth.getToken().then(function(token) {
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

test('IlandDirectGrantAuthProvider can get token multiple times consecutively', () => {
  let auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  return getTokens(auth, 10);
});

test('IlandDirectGrantAuthProvider can refresh token', () => {
  let auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  return getTokens(auth, 1).then(function() {
    return auth._refreshToken().then(function(token) {
      expect(token).toBeDefined();
      expect(token.access_token).toBeDefined();
      expect(token.access_token.length).toBeGreaterThan(1);
    });
  });
});
