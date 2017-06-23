/**
 * Authorization Provider interface.
 */
export interface AuthProvider {

  /**
   * Retrieve a token for authenticating with the iland APIs.
   */
  getToken(): Promise<string>;

  /**
   * Log out the current authentication session.
   */
  logout(): Promise<null>;

  /**
   * Gets the username of the currently authenticated user.
   * @returns {Promise<string>} username
   */
  getAuthenticatedUsername(): Promise<string>;

}

export const DEFAULT_AUTH_URL = 'https://console.ilandcloud.com/auth';

export const DEFAULT_REALM = 'iland-core';
