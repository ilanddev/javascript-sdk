import { UserCreateRequestJson } from './__json__/user-create-request-json';

/**
 * User Creation Request.
 */
/* istanbul ignore next: autogenerated */

export class UserCreateRequest {

  private readonly _json: UserCreateRequestJson;

  constructor(userCreateRequest: UserCreateRequest);
  constructor(userCreateRequestJson: UserCreateRequestJson);
  constructor(password: string, domain: string, fullname: string, email: string, username: string, roleUuid?: string,
              sendInvitation?: boolean);
  constructor(firstParam: string | UserCreateRequest | UserCreateRequestJson, domain?: string, fullname?: string,
              email?: string, username?: string, roleUuid?: string, sendInvitation?: boolean) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        password: firstParam,
        domain: domain,
        fullname: fullname,
        email: email,
        username: username,
        role_uuid: roleUuid,
        send_invitation: sendInvitation
      } as UserCreateRequestJson;
    } else if (firstParam instanceof UserCreateRequest) {
      // Copy constructor
      this._json = (firstParam as UserCreateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as UserCreateRequestJson;
    }
  }

  /**
   * Get password.
   * @returns {string | undefined}
   */
  get password(): string | undefined {
    return this._json.password;
  }

  /**
   * Get domain.
   * @returns {string}
   */
  get domain(): string {
    return this._json.domain;
  }

  /**
   * Get fullname.
   * @returns {string}
   */
  get fullname(): string {
    return this._json.fullname;
  }

  /**
   * Get email.
   * @returns {string}
   */
  get email(): string {
    return this._json.email;
  }

  /**
   * Get username.
   * @returns {string}
   */
  get username(): string {
    return this._json.username;
  }

  /**
   * Get role uuid.
   * @returns {string | undefined}
   */
  get roleUuid(): string | undefined {
    return this._json.role_uuid;
  }

  /**
   * Get send invitation.
   * @returns {boolean | undefined}
   */
  get sendInvitation(): boolean | undefined {
    return this._json.send_invitation;
  }

  /**
   * Get the json representation of this class.
   * @returns {UserCreateRequestJson}
   */
  get json(): UserCreateRequestJson {
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
