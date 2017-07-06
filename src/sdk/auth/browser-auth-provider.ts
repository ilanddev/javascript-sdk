import {KeycloakInstance} from 'keycloak-js';
import {AuthProvider, DEFAULT_AUTH_URL} from './auth-provider';
import Keycloak = require('keycloak-js');
import KeycloakError = Keycloak.KeycloakError;

export class IlandBrowserAuthProvider implements AuthProvider {

  private _keycloak: KeycloakInstance;

  constructor(config: IlandBrowserAuthConfig) {
    let kcConfig = {
      clientId: config.clientId,
      resource: config.clientId,
      url: config.url ? config.url : DEFAULT_AUTH_URL,
      'public-client': true,
      realm: 'iland-core'
    };
    this._keycloak = Keycloak(kcConfig);
  }

  async getToken(): Promise<string> {
    let self = this;
    return new Promise<string>(function(resolve, reject) {
      self._keycloak.updateToken(15).success(function() {
        resolve(self._keycloak.token);
      }).error(async function() {
        return self._init().then(function() {
          resolve(self._keycloak.token);
        }, function(err) {
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
    let self = this;
    return self.getToken().then(function() {
      let tokenParsed = self._keycloak.tokenParsed as any;
      return tokenParsed.preferred_username;
    });
  }

  /**
   * Log out the authenticated user.
   * @returns {Promise<any>} promise that resolves when logout is complete.
   */
  async logout(): Promise<any> {
    let self = this;
    return new Promise<any>(function(resolve, reject) {
      self._keycloak.logout().success(function() {
        resolve(null);
      }).error(function() {
        reject(null);
      });
    });
  }

  private async _init(): Promise<boolean> {
    let self = this;
    return new Promise<boolean>(function(resolve, reject) {
      self._keycloak.init({
        onLoad: 'login-required'
      }).success(function(result: boolean) {
        resolve(result);
      }).error(function(error: KeycloakError) {
        reject(error);
      });
    });
  }

}

export interface IlandBrowserAuthConfig {
  clientId: string;
  url?: string;
}
