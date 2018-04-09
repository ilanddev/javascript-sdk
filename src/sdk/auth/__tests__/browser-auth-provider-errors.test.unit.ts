import { IlandBrowserAuthProvider } from '../browser-auth-provider';
import { KeycloakPromise, KeycloakPromiseCallback } from 'keycloak-js';

export class MockKeycloakPromise implements KeycloakPromise<any, string> {

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

export class MockAlwaysRejectingKeycloak {
  token: string;
  tokenParsed: any;
  onAuthRefreshError?: () => void;

  protected initialized: boolean = false;

  updateToken() {
    const promise = new MockKeycloakPromise();
    this.onAuthRefreshError && this.onAuthRefreshError();
    promise.reject('');
    return promise;
  }

  init() {
    const promise = new MockKeycloakPromise();
    this.initialized = true;
    promise.reject('');
    return promise;
  }

  logout() {
    const promise = new MockKeycloakPromise();
    this.initialized = false;
    promise.reject('');
    return promise;
  }
}

const mockAlwaysRejectingKeycloak = MockAlwaysRejectingKeycloak;

jest.mock('keycloak-js', () => {
  return () => {
    return new mockAlwaysRejectingKeycloak();
  };
});

test('IlandBrowserAuthProvider handle errors properly', (done) => {
  expect.assertions(3);
  const auth = new IlandBrowserAuthProvider({
    clientId: 'fake',
    url: 'test'
  });
  auth.getTokenObservable().subscribe(() => {
    done();
  }, error => {
    expect(error).toBeDefined();
  });
  // Faking a token update.
  setTimeout(() => {
    auth.getToken().catch((error) => {
      expect(error).toBeDefined();
      auth.logout().catch(e => {
        expect(e).toBeDefined();
        done();
      });
    });
  }, 1000);
});
