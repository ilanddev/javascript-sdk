import { MockKeycloakPromise } from './mock-keycloak-promise';

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
