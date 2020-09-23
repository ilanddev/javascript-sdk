import { MockKeycloakPromise } from './mock-keycloak-promise';

export class MockKeycloak {
  token: string;
  tokenParsed: any;
  onAuthRefreshSuccess?: () => void;
  profile: {};

  private initialized: boolean = false;

  loadUserProfile() {
    const promise = new MockKeycloakPromise();
    if (this.initialized) {
      this.profile = {
        username: 'csnyder',
        enabled: true
      };
      promise.resolve(this.profile);
    } else {
      promise.reject('');
    }
    return promise;
  }

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
