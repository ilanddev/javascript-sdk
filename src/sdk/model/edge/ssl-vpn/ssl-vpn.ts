import {
  EdgeSslVpnAuthenticationJson,
  EdgeSslVpnIpPoolJson,
  EdgeSslVpnLocalAuthenticationServerJson,
  EdgeSslVpnPrivateNetworkJson,
  EdgeSslVpnServiceJson,
  EdgeSslVpnUserJson
} from './__json__/edge-ssl-vpn-json';
import { SslVpnPrivateNetwork } from './ssl-vpn-private-network';
import { SslVpnUser } from './ssl-vpn-user';
import { SslVpnIpPool } from './ssl-vpn-ip-pool';
import { SslVpnClientInstallPackage } from './ssl-vpn-client-install-package';
import { SslVpnLocalAuthenticationServer } from './ssl-vpn-local-authentication-server';
import { SslVpnAuthentication } from './ssl-vpn-authentication';

/**
 * SslVpn class
 */
export class SslVpn {

  constructor(private _json: EdgeSslVpnServiceJson) {
  }

  /**
   * Check weather this ssl vpn is enabled or not
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Check weather logging is enabled or not
   * @returns {boolean | null}
   */
  get logEnabled(): boolean | null {
    return this._json.log_enabled;
  }

  /**
   * Get log level
   * @returns {string | null}
   */
  get logLevel(): string | null {
    return this._json.log_level;
  }

  /**
   * Get IP
   * @returns {string | null}
   */
  get ip(): string | null {
    return this._json.ip;
  }

  /**
   * Get port
   * @returns {number | null}
   */
  get port(): number | null {
    return this._json.port;
  }

  /**
   * Get list of ciphers
   * @returns {Array<string>}
   */
  get cipherList(): Array<string> {
    if (!this._json.cipher_list) {
      return [];
    }
    return this._json.cipher_list;
  }

  /**
   * Get a list of private networks
   * @returns {Array<SslVpnPrivateNetwork>}
   */
  get privateNetworks(): Array<SslVpnPrivateNetwork> {
    if (!this._json.private_networks) {
      return [];
    }
    return (this._json.private_networks as Array<EdgeSslVpnPrivateNetworkJson>)
      .map(network => new SslVpnPrivateNetwork(network));
  }

  /**
   * Get a list of users
   * @returns {Array<SslVpnUser>}
   */
  get users(): Array<SslVpnUser> {
    if (!this._json.users) {
      return [];
    }
    return (this._json.users as Array<EdgeSslVpnUserJson>).map(user => new SslVpnUser(user));
  }

  /**
   * Get a list of ip pools
   * @returns {Array<SslVpnIpPool>}
   */
  get ipPools(): Array<SslVpnIpPool> {
    if (!this._json.ip_pools) {
      return [];
    }
    return (this._json.ip_pools as Array<EdgeSslVpnIpPoolJson>).map(ipPool => new SslVpnIpPool(ipPool));
  }

  /**
   * Get a list of client install packages
   * @returns {Array<SslVpnClientInstallPackage>}
   */
  get clientInstallPackages(): Array<SslVpnClientInstallPackage> {
    if (!this._json.client_install_packages) {
      return [];
    }
    return (this._json.client_install_packages).map(
      clientInstpack => new SslVpnClientInstallPackage(clientInstpack));
  }

  /**
   * Get authentication config
   * @returns {SslVpnLocalAuthenticationServer | null}
   */
  get authenticationConfig(): SslVpnLocalAuthenticationServer | null {
    return new SslVpnLocalAuthenticationServer(
      this._json.authentication_config as EdgeSslVpnLocalAuthenticationServerJson);
  }

  /**
   * Get authentication
   * @returns {SslVpnAuthentication | null}
   */
  get authentication(): SslVpnAuthentication | null {
    return new SslVpnAuthentication(this._json.authentication as EdgeSslVpnAuthenticationJson);
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeSslVpnServiceJson}
   */
  get json(): EdgeSslVpnServiceJson {
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
