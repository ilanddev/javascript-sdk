import { TestConfiguration } from '../../../../__tests__/configuration';
import { IlandBrowserAuthProvider } from '../browser-auth-provider';
import { KeycloakPromise, KeycloakPromiseCallback } from 'keycloak-js';

class MockKeycloakPromise implements KeycloakPromise<any, string> {

  private resolved = false;
  private rejected = false;
  private resolveHandlers: Array<KeycloakPromiseCallback<any>> = [];
  private rejectHandlers: Array<KeycloakPromiseCallback<any>> = [];

  success(cb: KeycloakPromiseCallback<any>): KeycloakPromise<any, string> {
    if (!this.resolved && !this.rejected) {
      this.resolveHandlers.push(cb);
    } else if (this.resolved) {
      cb('');
    }
    return this;
  }

  error(cb: KeycloakPromiseCallback<any>): KeycloakPromise<any, string> {
    if (!this.resolved && !this.rejected) {
      this.rejectHandlers.push(cb);
    } else if (this.rejected) {
      cb('');
    }
    return this;
  }

  resolve(value: any) {
    if (!this.resolved && !this.rejected) {
      for (const handler of this.resolveHandlers) {
        handler(value);
      }
      this.resolved = true;
    }
  }

  reject(value: string) {
    if (!this.resolved && !this.rejected) {
      for (const handler of this.rejectHandlers) {
        handler(value);
      }
      this.rejected = true;
    }
  }
}

class MockKeycloak {
  token: string;
  tokenParsed: any;
  onAuthRefreshSuccess?: () => void;

  private initialized: boolean = false;

  updateToken() {
    const promise = new MockKeycloakPromise();
    if (this.initialized) {
      this.token = 'fake-auth-token-2';
      this.tokenParsed = {
        preferred_username: 'csnyder'
      };
      this.onAuthRefreshSuccess && this.onAuthRefreshSuccess();
      promise.resolve('');
    } else {
      promise.reject('');
    }
    return promise;
  }

  init() {
    const promise = new MockKeycloakPromise();
    this.initialized = true;
    this.token = 'fake-auth-token-1';
    this.tokenParsed = {
      preferred_username: 'csnyder'
    };
    promise.resolve(true);
    return promise;
  }

  logout() {
    const promise = new MockKeycloakPromise();
    this.initialized = false;
    promise.resolve(true);
    return promise;
  }
}

const mockKeycloak = MockKeycloak;

jest.mock('keycloak-js', () => {
  return () => {
    return new mockKeycloak();
  };
});

test('IlandBrowserAuthProvider can retrieve token', async () => {
  const auth = new IlandBrowserAuthProvider({
    clientId: TestConfiguration.getClientId()
  });
  return auth.getToken().then(async function(token) {
    expect(token).toBe('fake-auth-token-1');
    return auth.getAuthenticatedUsername().then(async (preferredUsername) => {
      expect(preferredUsername).toBe('csnyder');
      return auth.logout();
    });
  });
});

test('IlandBrowserAuthProvider can retrieve a token observable', (done) => {
  expect.assertions(3);
  const auth = new IlandBrowserAuthProvider({
    clientId: TestConfiguration.getClientId()
  });
  let tokenUpdated = false;
  auth.getTokenObservable().subscribe(token => {
    if (!tokenUpdated) {
      expect(token).toEqual('fake-auth-token-1');
    } else {
      expect(token).toEqual('fake-auth-token-2');
      done();
    }
  });
  // Faking a token update.
  setTimeout(() => {
    tokenUpdated = true;
    auth.getToken().then(token => {
      expect(token).toEqual('fake-auth-token-2');
    }).catch(() => {
      done();
    });
  }, 1000);
});

test('IlandBrowserAuthProvider can retrieve token synchronously', async () => {
  const auth = new IlandBrowserAuthProvider({
    clientId: TestConfiguration.getClientId()
  });
  return auth.getToken().then(() => {
    expect(auth.getTokenSync()).toBe('fake-auth-token-1');
  });
});

test('IlandBrowserAuthProvider can retrieve impersonated token synchronously', async () => {
  const auth = new IlandBrowserAuthProvider({
    clientId: TestConfiguration.getClientId()
  });
  auth.testRole('ROLE_UUID');
  return auth.getToken().then(() => {
    expect(auth.getTokenSync()).toBe('impersonate=ROLE_UUID;fake-auth-token-1');
    auth.endRoleTest();
    expect(auth.getTokenSync()).toBe('fake-auth-token-1');
  });
});
