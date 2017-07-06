/**
 * Configuration for tests using environment variables.
 */
export class TestConfiguration {

  static getUsername(): string {
    return process.env.ILAND_USERNAME;
  }

  static getPassword(): string {
    return process.env.ILAND_PASSWORD;
  }

  static getClientId(): string {
    return process.env.ILAND_CLIENT_ID;
  }

  static getClientSecret(): string {
    return process.env.ILAND_CLIENT_SECRET;
  }

}
