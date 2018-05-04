import { UserCreationRequestJson } from './__json__/user-creation-request-json';

/**
 * User Creation Request.
 */
export class UserCreationRequest {

  public domain: string;
  public username: string;
  public fullName: string;
  public email: string;
  public password: string;

  /**
   * Creates a new user creation request.
   * @param {string} domain the users' domain
   * @param {string} username the user's username
   * @param {string} fullName the users's full name
   * @param {string} email the user's email address
   * @param {string} password the user's initial password
   */
  constructor(domain: string, username: string, fullName: string, email: string, password: string) {
    this.domain = domain;
    this.username = username;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {UserCreationRequestJson} the JSON representation
   */
  get json(): UserCreationRequestJson {
    return {
      password: this.password,
      domain: this.domain,
      fullname: this.fullName,
      email: this.email,
      name: this.username
    };
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this.json, undefined, 2);
  }

}
