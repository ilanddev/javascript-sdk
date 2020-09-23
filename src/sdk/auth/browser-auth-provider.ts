import {
  BrowserAuthProvider,
  DEFAULT_AUTH_TOKEN_MIN_VALIDITY,
  DEFAULT_AUTH_URL,
  DEFAULT_REALM,
  IlandBrowserAuthConfig
} from './auth-provider-interfaces';
import { IlandAbstractAuthProvider } from './abstract-auth-provider';
import { KeycloakError, KeycloakInstance, KeycloakProfile } from 'keycloak-js';
import { Observable, Subscriber } from 'rxjs';
import Keycloak = require('keycloak-js');

export class IlandBrowserAuthProvider extends IlandAbstractAuthProvider implements BrowserAuthProvider {

  protected _keycloak: KeycloakInstance;
  protected _testingRoleUuid: string | undefined;

  constructor(config: IlandBrowserAuthConfig) {
    super();
    const kcConfig = {
      clientId: config.clientId,
      resource: config.clientId,
      url: config.url ? config.url : DEFAULT_AUTH_URL,
      'public-client': true,
      realm: DEFAULT_REALM
    };
    this._keycloak = Keycloak(kcConfig);
    this._tokenObservable = new Observable<string>((observable: Subscriber<string>) => {
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
   * Return the current complete access token
   * @returns {string | undefined} the access token
   */
  getTokenSync(): string | undefined {
    return this.getImpersonateToken(this._keycloak.token);
  }

  /**
   * Get the token. The token will be automatically refreshed when needed.
   * @returns {Promise<string>}
   */
  async getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this._keycloak.updateToken(DEFAULT_AUTH_TOKEN_MIN_VALIDITY).success(() => {
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
   * Gets the username of the currently authenticated user.
   * @returns {string} username
   */
  async getAuthenticatedUsername(): Promise<string> {
    return this.getToken().then(() => {
      return (this._keycloak.profile as KeycloakProfile).username as string;
    });
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

  /**
   * If we have an impersonated role initialized with the SDK, we need to update all token.
   * @param {string | undefined} token
   * @returns {string | undefined} the complete token.
   */
  protected getImpersonateToken(token?: string | undefined): string | undefined {
    return (this._testingRoleUuid && token) ? `impersonate=${this._testingRoleUuid};${token}` : token;
  }

  /**
   * Init keycloak.
   * @protected
   * @returns {Promise<boolean>}
   */
  protected async _init(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this._keycloak.init({
        onLoad: 'login-required'
      }).success((result: boolean) => {
        this._keycloak.loadUserProfile().success(() => {
          resolve(result);
        }).error((error) => {
          reject(error);
        });
      }).error((error: KeycloakError) => {
        reject(error);
      });
    });
  }
}
