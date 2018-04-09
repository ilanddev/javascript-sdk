import { BasicConfiguration } from '../basic-configuration';
import { Observable } from 'rxjs/Observable';

/**
 * Authorization Provider interface.
 */
export interface AuthProvider {

  /**
   * Retrieve a token for authenticating with the iland APIs.
   * @returns {Promise<string>}
   */
  getToken(): Promise<string>;

  /**
   * Retrieve an Observer to get an up to date token over time.
   * @returns {Observable<string>}
   */
  getTokenObservable(): Observable<string>;

  /**
   * Log out the current authentication session.
   * @returns {Promise<null>}
   */
  logout(): Promise<null>;

  /**
   * Gets the username of the currently authenticated user.
   * @returns {Promise<string>} username
   */
  getAuthenticatedUsername(): Promise<string>;

}

export const DEFAULT_AUTH_URL = `${BasicConfiguration.getAuthorizationUrl()}/auth`;

export const DEFAULT_REALM = 'iland-core';
