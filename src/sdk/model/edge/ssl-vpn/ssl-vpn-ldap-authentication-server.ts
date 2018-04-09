import { SslVpnAuthenticationServer } from './ssl-vpn-authentication-server';
import { EdgeSslVpnLdapAuthenticationServerJson } from './json/edge-ssl-vpn';

export class SslVpnLdapAuthenticationServer extends SslVpnAuthenticationServer {

  constructor(protected _json: EdgeSslVpnLdapAuthenticationServerJson) {
    super(_json);
  }

  /**
   * Check weather this local authentication server is enabled or not.
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Get IP
   * @returns {string}
   */
  get ip(): string {
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
   * Get timeout
   * @returns {number | null}
   */
  get timeout(): number | null {
    return this._json.timeout;
  }

  /**
   *
   * @returns {boolean | null}
   */
  get enableSsl(): boolean | null {
    return this._json.enable_ssl;
  }

  /**
   *
   * @returns {string}
   */
  get searchBase(): string {
    return this._json.search_base;
  }

  /**
   *
   * @returns {string}
   */
  get bindDomainName(): string {
    return this._json.bind_domain_name;
  }

  /**
   *
   * @returns {string | null}
   */
  get bindPassword(): string | null {
    return this._json.bind_password;
  }

  /**
   *
   * @returns {string | null}
   */
  get loginAttributeName(): string | null {
    return this._json.login_attribute_name;
  }

  /**
   *
   * @returns {string | null}
   */
  get searchFilter(): string | null {
    return this._json.search_filter;
  }

  /**
   * Get the json representation of this class.
   * @returns {LbPersistenceJson}
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
