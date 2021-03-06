import { VdiUserUpdateRequestJson } from './__json__/vdi-user-update-request-json';

/**
 * VDI User Create/Update Request.
 */
/* istanbul ignore next: autogenerated */
export class VdiUserUpdateRequest {

  private readonly _json: VdiUserUpdateRequestJson;

  constructor(vdiUserUpdateRequest: VdiUserUpdateRequest);
  constructor(vdiUserUpdateRequestJson: VdiUserUpdateRequestJson);
  constructor(email: string, name: string);
  constructor(firstParam: string | VdiUserUpdateRequest | VdiUserUpdateRequestJson, name?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        email: firstParam,
        name: name
      } as VdiUserUpdateRequestJson;
    } else if (firstParam instanceof VdiUserUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as VdiUserUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as VdiUserUpdateRequestJson;
    }
  }

  /**
   * Get email.
   * @returns {string}
   */
  get email(): string {
    return this._json.email;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get the json representation of this class.
   * @returns {VdiUserUpdateRequestJson}
   */
  get json(): VdiUserUpdateRequestJson {
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
