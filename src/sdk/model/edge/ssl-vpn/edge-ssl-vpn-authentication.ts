import {
  EdgeSslVpnAdAuthenticationServerJson,
  EdgeSslVpnAuthenticationJson,
  EdgeSslVpnLdapAuthenticationServerJson,
  EdgeSslVpnLocalAuthenticationServerJson,
  EdgeSslVpnRadiusAuthenticationServerJson,
  EdgeSslVpnRsaAuthenticationServerJson
} from './__json__/edge-ssl-vpn-json';
import { EdgeSslVpnAuthenticationServer } from './edge-ssl-vpn-authentication-server';
import { EdgeSslVpnLdapAuthenticationServer } from './edge-ssl-vpn-ldap-authentication-server';
import { EdgeSslVpnAdAuthenticationServer } from './edge-ssl-vpn-ad-authentication-server';
import { EdgeSslVpnLocalAuthenticationServer } from './edge-ssl-vpn-local-authentication-server';
import { EdgeSslVpnRadiusAuthenticationServer } from './edge-ssl-vpn-radius-authentication-server';
import { EdgeSslVpnRsaAuthenticationServer } from './edge-ssl-vpn-rsa-authentication-server';

/**
 * EdgeSslVpnAuthentication class
 */
export class EdgeSslVpnAuthentication {

  constructor(private _json: EdgeSslVpnAuthenticationJson) {
  }

  /**
   * Get a list of authentication servers
   * @returns {Array<EdgeSslVpnAuthenticationServer>}
   */
  get authenticationServers(): Array<EdgeSslVpnAuthenticationServer> {
    const authServers: Array<EdgeSslVpnAuthenticationServer> = [];
    for (const authServer of this._json.authentication_servers) {
      switch (authServer.type) {
        case 'LOCAL':
          authServers
            .push(new EdgeSslVpnLocalAuthenticationServer(authServer as EdgeSslVpnLocalAuthenticationServerJson));
          break;
        case 'LDAP':
          authServers
            .push(new EdgeSslVpnLdapAuthenticationServer(authServer as EdgeSslVpnLdapAuthenticationServerJson));
          break;
        case 'AD':
          authServers
            .push(new EdgeSslVpnAdAuthenticationServer(authServer as EdgeSslVpnAdAuthenticationServerJson));
          break;
        case 'RADIUS':
          authServers
            .push(new EdgeSslVpnRadiusAuthenticationServer(authServer as EdgeSslVpnRadiusAuthenticationServerJson));
          break;
        case 'RSA':
          authServers
            .push(new EdgeSslVpnRsaAuthenticationServer(authServer as EdgeSslVpnRsaAuthenticationServerJson));
          break;
      }
    }
    return authServers;
  }

  /**
   * Get secondary authentication server
   * @returns {EdgeSslVpnAuthenticationServer | null}
   */
  get secondaryAuthenticationServer(): EdgeSslVpnLocalAuthenticationServer | EdgeSslVpnLdapAuthenticationServer |
    EdgeSslVpnAdAuthenticationServer | EdgeSslVpnRadiusAuthenticationServer | EdgeSslVpnRsaAuthenticationServer | null {
      const authServer = this._json.secondary_authentication_server;
      if (authServer) {
        switch (authServer.type) {
          case 'LOCAL':
            return new EdgeSslVpnLocalAuthenticationServer(authServer as EdgeSslVpnLocalAuthenticationServerJson);
          case 'LDAP':
            return new EdgeSslVpnLdapAuthenticationServer(authServer as EdgeSslVpnLdapAuthenticationServerJson);
          case 'AD':
            return new EdgeSslVpnAdAuthenticationServer(authServer as EdgeSslVpnAdAuthenticationServerJson);
          case 'RADIUS':
            return new EdgeSslVpnRadiusAuthenticationServer(authServer as EdgeSslVpnRadiusAuthenticationServerJson);
          case 'RSA':
            return new EdgeSslVpnRsaAuthenticationServer(authServer as EdgeSslVpnRsaAuthenticationServerJson);
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
