import { KeycloakInstance } from 'keycloak-js';
import { AuthProvider, DEFAULT_AUTH_URL, DEFAULT_REALM } from './auth-provider';
import Keycloak = require('keycloak-js');
import KeycloakError = Keycloak.KeycloakError;

export class IlandBrowserAuthProvider implements AuthProvider {

  private _keycloak: KeycloakInstance;

  constructor(config: IlandBrowserAuthConfig) {
    const kcConfig = {
      clientId: config.clientId,
      resource: config.clientId,
      url: config.url ? config.url : DEFAULT_AUTH_URL,
      'public-client': true,
      realm: DEFAULT_REALM
    };
    this._keycloak = Keycloak(kcConfig);
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
  async logout(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._keycloak.logout().success(() => {
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
