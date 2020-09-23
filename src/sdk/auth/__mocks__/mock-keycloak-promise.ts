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
