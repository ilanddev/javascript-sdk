import { KeycloakInstance } from 'keycloak-js';
import { AuthProvider, DEFAULT_AUTH_URL, DEFAULT_REALM } from './auth-provider';
import Keycloak = require('keycloak-js');
import KeycloakError = Keycloak.KeycloakError;
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

export class IlandBrowserAuthProvider implements AuthProvider {

  private _testingRoleUuid: string | undefined;
  private _keycloak: KeycloakInstance;
  private _tokenObservable: Observable<string>;

  constructor(config: IlandBrowserAuthConfig) {
    const kcConfig = {
      clientId: config.clientId,
      resource: config.clientId,
      url: config.url ? config.url : DEFAULT_AUTH_URL,
      'public-client': true,
      realm: DEFAULT_REALM
    };
    this._keycloak = Keycloak(kcConfig);
    this._tokenObservable = Observable.create((observable: Subscriber<string>) => {
      this.getToken().then(() => {
        observable.next(this.getTokenSync());
      }).catch(reason => {
        observable.error(reason);
      });
      this._keycloak.onAuthRefreshSuccess = () => {
        observable.next(this.getTokenSync());
      };
      this._keycloak.onAuthRefreshError = () => {
        observable.error('[keycloak][onAuthRefreshError] Can\'t refresh the access token.');
      };
    });
  }

  async getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this._keycloak.updateToken(15).success(() => {
        resolve(this.getTokenSync());
      }).error(async() => {
        return this._init().then(() => {
          resolve(this.getTokenSync());
        }, (err) => {
          reject(err);
        });
      });
    });
  }

  /**
   * Return the current complete access token
   * @returns {string | undefined} the access token
   */
  getTokenSync(): string | undefined {
    return this.getImpersonateToken(this._keycloak.token);
  }

  /**
   * Return an Observable to get an up to date token over time.
   * @returns {Observable<string>}
   */
  getTokenObservable(): Observable<string> {
    return this._tokenObservable;
  }

  /**
   * Gets the username of the currently authenticated user.
   * @returns {string} username
   */
  async getAuthenticatedUsername(): Promise<string> {
    return this.getToken().then(() => {
      const tokenParsed = this._keycloak.tokenParsed as any;
      return tokenParsed.preferred_username;
    });
  }

  /**
   * Activate the role testing mode.
   * @param roleUuid
   */
  testRole(roleUuid: string): void {
    this._testingRoleUuid = roleUuid;
  }

  /**
   * End role testing session.
   */
  endRoleTest(): void {
    this._testingRoleUuid = undefined;
  }

  /**
   * Log out the authenticated user.
   * @returns {Promise<any>} promise that resolves when logout is complete.
   */
  async logout(options?: any): Promise<any> {
    const redirectUri = options && options.redirectUri ? options.redirectUri : null;
    return new Promise<any>((resolve, reject) => {
      this._keycloak.logout({ redirectUri: redirectUri }).success(() => {
        resolve(null);
      }).error(function() {
        reject(null);
      });
    });
  }

  private async _init(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this._keycloak.init({
        onLoad: 'login-required'
      }).success((result: boolean) => {
        resolve(result);
      }).error((error: KeycloakError) => {
        reject(error);
      });
    });
  }

  /**
   * If we have an impersonated role initialized with the SDK, we need to update all token.
   * @param {string | undefined} token
   * @returns {string | undefined} the complete token.
   */
  private getImpersonateToken(token?: string | undefined): string | undefined {
    return (this._testingRoleUuid && token) ? `impersonate=${this._testingRoleUuid};${token}` : token;
  }
}

export interface IlandBrowserAuthConfig {
  clientId: string;
  url?: string;
}
