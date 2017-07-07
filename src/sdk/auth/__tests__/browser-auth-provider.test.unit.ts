import { TestConfiguration } from '../../../../tests/configuration';
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
      for (let handler of this.resolveHandlers) {
        handler(value);
      }
      this.resolved = true;
    }
  }

  reject(value: string) {
    if (!this.resolved && !this.rejected) {
      for (let handler of this.rejectHandlers) {
        handler(value);
      }
      this.rejected = true;
    }
  }
}

class MockKeycloak {

  token: string;
  tokenParsed: any;
  private initialized: boolean = false;

  updateToken() {
    let promise = new MockKeycloakPromise();
    if (this.initialized) {
      this.token = 'fake-auth-token-2';
      this.tokenParsed = {
        preferred_username: 'csnyder'
      };
      promise.resolve('');
    } else {
      promise.reject('');
    }
    return promise;
  }

  init() {
    let promise = new MockKeycloakPromise();
    this.initialized = true;
    this.token = 'fake-auth-token-1';
    this.tokenParsed = {
      preferred_username: 'csnyder'
    };
    promise.resolve(true);
    return promise;
  }

  logout() {
    let promise = new MockKeycloakPromise();
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

test('IlandBrowserAuthProvider can retrieve token', async() => {
  let auth = new IlandBrowserAuthProvider({
    clientId: TestConfiguration.getClientId()
  });
  return auth.getToken().then(async function(token) {
    expect(token).toBe('fake-auth-token-1');
    return auth.getAuthenticatedUsername().then(async function(preferredUsername) {
      expect(preferredUsername).toBe('csnyder');
      return auth.logout();
    });
  });
});
