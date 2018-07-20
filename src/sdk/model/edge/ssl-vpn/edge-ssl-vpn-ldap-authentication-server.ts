import { EdgeSslVpnAuthServerType } from './__json__/edge-ssl-vpn-auth-server-type';
import { EdgeSslVpnLdapAuthenticationServerJson } from './__json__/edge-ssl-vpn-json';
import { EdgeSslVpnAuthenticationServer } from './edge-ssl-vpn-authentication-server';

/* istanbul ignore next: autogenerated */
export class EdgeSslVpnLdapAuthenticationServer extends EdgeSslVpnAuthenticationServer {

  constructor(protected _json: EdgeSslVpnLdapAuthenticationServerJson) {
    super(_json);
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get search filter.
   * @returns {string}
   */
  get searchFilter(): string {
    return this._json.search_filter;
  }

  /**
   * Get login attribute name.
   * @returns {string}
   */
  get loginAttributeName(): string {
    return this._json.login_attribute_name;
  }

  /**
   * Get bind password.
   * @returns {string}
   */
  get bindPassword(): string {
    return this._json.bind_password;
  }

  /**
   * Get bind domain name.
   * @returns {string}
   */
  get bindDomainName(): string {
    return this._json.bind_domain_name;
  }

  /**
   * Get search base.
   * @returns {string}
   */
  get searchBase(): string {
    return this._json.search_base;
  }

  /**
   * Get enable ssl.
   * @returns {boolean}
   */
  get enableSsl(): boolean {
    return this._json.enable_ssl;
  }

  /**
   * Get timeout.
   * @returns {number}
   */
  get timeout(): number {
    return this._json.timeout;
  }

  /**
   * Get port.
   * @returns {number}
   */
  get port(): number {
    return this._json.port;
  }

  /**
   * Get ip.
   * @returns {string}
   */
  get ip(): string {
    return this._json.ip;
  }

  /**
   * Get type.
   * @returns {EdgeSslVpnAuthServerType}
   */
  get type(): EdgeSslVpnAuthServerType {
    return this._json.type;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeSslVpnLdapAuthenticationServerJson}
   */
  get json(): EdgeSslVpnLdapAuthenticationServerJson {
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