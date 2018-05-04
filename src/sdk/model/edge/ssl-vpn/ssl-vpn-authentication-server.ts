import {
  EdgeSslVpnAdAuthenticationServerJson,
  EdgeSslVpnLdapAuthenticationServerJson,
  EdgeSslVpnLocalAuthenticationServerJson,
  EdgeSslVpnRadiusAuthenticationServerJson,
  EdgeSslVpnRsaAuthenticationServerJson
} from './__json__/edge-ssl-vpn-json';
import { VpnLocalAuthenticationServerType } from './__json__/vpn-local-authentication-server-type';

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
