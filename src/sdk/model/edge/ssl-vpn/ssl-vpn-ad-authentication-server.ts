import { SslVpnAuthenticationServer } from './ssl-vpn-authentication-server';
import { EdgeSslVpnAdAuthenticationServerJson } from './json/edge-ssl-vpn';

export class SslVpnAdAuthenticationServer extends SslVpnAuthenticationServer {
  constructor(protected _json: EdgeSslVpnAdAuthenticationServerJson) {
    super(_json);
  }

  /**
   * Check whether the server is enabled or not
   * @returns {boolean}
   */
  get enabled(): boolean {
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
   * Check whether ssl is enabled or not
   * @returns {boolean | null}
   */
  get enableSsl(): boolean | null {
    return this._json.enable_ssl;
  }

  /**
   * Get search base
   * @returns {string}
   */
  get searchBase(): string {
    return this._json.search_base;
  }

  /**
   * Get bind domain name
   * @returns {string}
   */
  get bindDomainName(): string {
    return this._json.bind_domain_name;
  }

  /**
   * Get bind password
   * @returns {string | null}
   */
  get bindPassword(): string | null {
    return this._json.bind_password;
  }

  /**
   * Get login attribute name
   * @returns {string | null}
   */
  get loginAttributeName(): string | null {
    return this._json.login_attribute_name;
  }

  /**
   * Get search filter
   * @returns {string | null}
   */
  get searchFilter(): string | null {
    return this._json.search_filter;
  }

  /**
   * Check whether the session is terminated on auth failure or not.
   * @returns {boolean | null}
   */
  get terminateSessionOnAuthFails(): boolean | null {
    return this._json.terminate_session_on_auth_fails;
  }

  /**
   * Get the json representation of this class.
   * @returns {LbPersistenceJson}
   */
  get json(): EdgeSslVpnAdAuthenticationServerJson {
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
