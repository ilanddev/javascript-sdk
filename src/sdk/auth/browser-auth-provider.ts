import {KeycloakInstance} from 'keycloak-js';
import Keycloak = require('keycloak-js');
import {AuthProvider, DEFAULT_AUTH_URL} from "./auth-provider";
import KeycloakInitOptions = Keycloak.KeycloakInitOptions;
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

  getToken(): Promise<string> {
    let self = this;
    return new Promise(function(resolve) {
      self._keycloak.updateToken(15).success(function() {
        resolve(self._keycloak.token);
      }).error(function() {
         self._init().then(function() {
          resolve(self._keycloak.token);
        });
      });
    });
  }

  /**
   * Gets the username of the currently authenticated user.
   * @returns {string} username
   */
  getAuthenticatedUsername(): Promise<string> {
    let self = this;
    return self.getToken().then(function() {
      let tokenParsed = self._keycloak.tokenParsed as any;
      return tokenParsed.preferred_username;
    });
  }

  private _init(): Promise<boolean> {
    let self = this;
    return new Promise(function(resolve, reject) {
      self._keycloak.init({
        onLoad: 'login-required'
      }).success(function(result: boolean) {
        resolve(result);
      }).error(function(error: KeycloakError) {
        reject(error);
      });
    });
  }

  logout(): Promise<any> {
    let self = this;
    return new Promise<any>(function(resolve, reject) {
      self._keycloak.logout().success(function() {
        resolve(null);
      }).error(function() {
        reject(null);
      });
    });
  }

}

export interface IlandBrowserAuthConfig {
  clientId: string,
  url?: string,
}
