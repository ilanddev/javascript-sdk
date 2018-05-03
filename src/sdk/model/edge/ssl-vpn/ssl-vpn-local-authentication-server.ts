import { EdgeSslVpnLocalAuthenticationServerJson } from './__json__/edge-ssl-vpn-json';
import { SslVpnAuthenticationServer } from './ssl-vpn-authentication-server';

/**
 * SslVpnLocalAuthenticationServer class
 */
export class SslVpnLocalAuthenticationServer extends SslVpnAuthenticationServer {

  constructor(protected _json: EdgeSslVpnLocalAuthenticationServerJson) {
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
   * Get password min length
   * @returns {number | null}
   */
  get pwdMinLength(): number | null {
    return this._json.pwd_min_length;
  }

  /**
   * Get password max length
   * @returns {number | null}
   */
  get pwdMaxLength(): number | null {
    return this._json.pwd_max_length;
  }

  /**
   * Get password min alphabets characters
   * @returns {number | null}
   */
  get pwdMinAlphabets(): number | null {
    return this._json.pwd_min_alphabets;
  }

  /**
   * Get password min digits characters.
   * @returns {number | null}
   */
  get pwdMinDigits(): number | null {
    return this._json.pwd_min_digits;
  }

  /**
   * Get password min special characters.
   * @returns {number | null}
   */
  get pwdMinSpecialCharacters(): number | null {
    return this._json.pwd_min_special_characters;
  }

  /**
   *
   * @returns {boolean | null}
   */
  get pwdAllowUserIdWithinPwd(): boolean | null {
    return this._json.pwd_allow_user_id_within_pwd;
  }

  /**
   * Get password lifetime
   * @returns {number | null}
   */
  get pwdLifetime(): number | null {
    return this._json.pwd_lifetime;
  }

  /**
   * Get password expiry notification
   * @returns {number | null}
   */
  get pwdExpiryNotification(): number | null {
    return this._json.pwd_expiry_notification;
  }

  /**
   * Get retry count
   * @returns {number | null}
   */
  get retryCount(): number | null {
    return this._json.retry_count;
  }

  /**
   * Get retry duration
   * @returns {number | null}
   */
  get retryDuration(): number | null {
    return this._json.retry_duration;
  }

  /**
   * Get lockout duration
   * @returns {number | null}
   */
  get lockoutDuration(): number | null {
    return this._json.lockout_duration;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {LbPersistenceJson}
   */
  get json(): EdgeSslVpnLocalAuthenticationServerJson {
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
