import {
  EdgeSslVpnAdAuthenticationServerJson, EdgeSslVpnLdapAuthenticationServerJson, EdgeSslVpnLocalAuthenticationServerJson,
  EdgeSslVpnRadiusAuthenticationServerJson,
  EdgeSslVpnRsaAuthenticationServerJson,
  VpnLocalAuthenticationServerType
} from './json/edge-ssl-vpn';

/**
 * SslVpnAuthenticationServer class
 */
export abstract class SslVpnAuthenticationServer {

  constructor(protected _json: EdgeSslVpnAdAuthenticationServerJson | EdgeSslVpnLocalAuthenticationServerJson |
    EdgeSslVpnLdapAuthenticationServerJson | EdgeSslVpnRsaAuthenticationServerJson |
    EdgeSslVpnRadiusAuthenticationServerJson) {
  }

  /**
   * Get type
   * @returns {VpnLocalAuthenticationServerType | null}
   */
  get type(): VpnLocalAuthenticationServerType | null {
    return this._json.type;
  }
}
