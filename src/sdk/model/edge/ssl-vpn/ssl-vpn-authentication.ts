import {
  EdgeSslVpnAdAuthenticationServerJson,
  EdgeSslVpnAuthenticationJson,
  EdgeSslVpnLdapAuthenticationServerJson,
  EdgeSslVpnLocalAuthenticationServerJson,
  EdgeSslVpnRadiusAuthenticationServerJson,
  EdgeSslVpnRsaAuthenticationServerJson
} from './__json__/edge-ssl-vpn-json';
import { SslVpnAuthenticationServer } from './ssl-vpn-authentication-server';
import { SslVpnLocalAuthenticationServer } from './ssl-vpn-local-authentication-server';
import { SslVpnLdapAuthenticationServer } from './ssl-vpn-ldap-authentication-server';
import { SslVpnAdAuthenticationServer } from './ssl-vpn-ad-authentication-server';
import { SslVpnRadiusAuthenticationServer } from './ssl-vpn-radius-authentication-server';
import { SslVpnRsaAuthenticationServer } from './ssl-vpn-rsa-authentication-server';

/**
 * SslVpnAuthentication class
 */
export class SslVpnAuthentication {

  constructor(private _json: EdgeSslVpnAuthenticationJson) {
  }

  /**
   * Get a list of authentication servers
   * @returns {Array<SslVpnAuthenticationServer>}
   */
  get authenticationServers(): Array<SslVpnAuthenticationServer> {
    const authServers: Array<SslVpnAuthenticationServer> = [];
    for (const authServer of this._json.authentication_servers) {
      switch (authServer.type) {
        case 'LOCAL':
          authServers
            .push(new SslVpnLocalAuthenticationServer(authServer as EdgeSslVpnLocalAuthenticationServerJson));
          break;
        case 'LDAP':
          authServers
            .push(new SslVpnLdapAuthenticationServer(authServer as EdgeSslVpnLdapAuthenticationServerJson));
          break;
        case 'AD':
          authServers
            .push(new SslVpnAdAuthenticationServer(authServer as EdgeSslVpnAdAuthenticationServerJson));
          break;
        case 'RADIUS':
          authServers
            .push(new SslVpnRadiusAuthenticationServer(authServer as EdgeSslVpnRadiusAuthenticationServerJson));
          break;
        case 'RSA':
          authServers
            .push(new SslVpnRsaAuthenticationServer(authServer as EdgeSslVpnRsaAuthenticationServerJson));
          break;
      }
    }
    return authServers;
  }

  /**
   * Get secondary authentication server
   * @returns {SslVpnAuthenticationServer | null}
   */
  get secondaryAuthenticationServer(): SslVpnLocalAuthenticationServer | SslVpnLdapAuthenticationServer |
    SslVpnAdAuthenticationServer | SslVpnRadiusAuthenticationServer | SslVpnRsaAuthenticationServer | null {
      const authServer = this._json.secondary_authentication_server;
      if (authServer) {
        switch (authServer.type) {
          case 'LOCAL':
            return new SslVpnLocalAuthenticationServer(authServer as EdgeSslVpnLocalAuthenticationServerJson);
          case 'LDAP':
            return new SslVpnLdapAuthenticationServer(authServer as EdgeSslVpnLdapAuthenticationServerJson);
          case 'AD':
            return new SslVpnAdAuthenticationServer(authServer as EdgeSslVpnAdAuthenticationServerJson);
          case 'RADIUS':
            return new SslVpnRadiusAuthenticationServer(authServer as EdgeSslVpnRadiusAuthenticationServerJson);
          case 'RSA':
            return new SslVpnRsaAuthenticationServer(authServer as EdgeSslVpnRsaAuthenticationServerJson);
        }
      }
      return null;
    }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeSslVpnAuthenticationJson}
   */
  get json(): EdgeSslVpnAuthenticationJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
