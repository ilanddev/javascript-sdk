import { KeycloakInstance } from 'keycloak-js';
import { AuthProvider, DEFAULT_AUTH_URL, DEFAULT_REALM } from './auth-provider';
import Keycloak = require('keycloak-js');
import KeycloakError = Keycloak.KeycloakError;
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

export class IlandBrowserAuthProvider implements AuthProvider {

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
      this.getToken().then(token => {
        observable.next(token);
      }).catch(reason => {
        observable.error(reason);
      });
      this._keycloak.onAuthRefreshSuccess = () => {
        observable.next(this._keycloak.token);
      };
      this._keycloak.onAuthRefreshError = () => {
        observable.error('[keycloak][onAuthRefreshError] Can\'t refresh the access token.');
      };
    });
  }

  async getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this._keycloak.updateToken(15).success(() => {
        resolve(this._keycloak.token);
      }).error(async() => {
        return this._init().then(() => {
          resolve(this._keycloak.token);
        }, (err) => {
          reject(err);
        });
      });
    });
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
   * Log out the authenticated user.
   * @returns {Promise<any>} promise that resolves when logout is complete.
   */
  async logout(options?: any): Promise<any> {
    const redirectUri = options && options.redirectUri ? options.redirectUri : null;
    return new Promise<any>((resolve, reject) => {
      this._keycloak.logout({redirectUri: redirectUri}).success(() => {
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
}

export interface IlandBrowserAuthConfig {
  clientId: string;
  url?: string;
}
