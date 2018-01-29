/**
 * Basic configurations for SDK using environment variables.
 */
export class BasicConfiguration {
  /**
   * Get the default API url.
   * @returns {string}
   */
  static getApiUrl(): string {
    if (process.env.ILAND_API_URL && process.env.ILAND_API_URL !== 'undefined') {
      return process.env.ILAND_API_URL;
    } else {
      return 'https://api.ilandcloud.com';
    }
  }

  /**
   * Get the default authorisation url.
   * @returns {string}
   */
  static getAuthorizationUrl(): string {
    if (process.env.ILAND_AUTHORIZATION_URL && process.env.ILAND_AUTHORIZATION_URL !== 'undefined') {
      return process.env.ILAND_AUTHORIZATION_URL;
    } else {
      return 'https://console.ilandcloud.com';
    }
  }
}
