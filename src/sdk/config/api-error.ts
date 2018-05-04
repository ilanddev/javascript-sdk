/**
 * Wrapper for iland API errors.
 */
export class ApiError extends Error {

  /**
   * Constructor.
   * @param {ApiErrorJson} _json error JSON from the API
   */
  constructor(private _json: ApiErrorJson) {
    super(_json.detail_message ? _json.detail_message : _json.message);
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  /**
   * Gets the error message.
   * @returns {string}
   */
  getMessage(): string {
    return this._json.message;
  }

  /**
   * Gets the error detail message.
   * @returns {string|any} detailed message or null if none exists
   */
  getDetailMessage(): string|null {
    return this._json.detail_message || null;
  }

  /**
   * Gets the error type.
   * @returns {ApiErrorType} the type of API error
   */
  getType(): ApiErrorType {
    return this._json.type;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {ApiErrorJson} the API Error JSON object
   */
  getJson(): ApiErrorJson {
    return Object.assign({}, this._json);
  }
}

/**
 * Interface for API errors.
 */
export interface ApiErrorJson {
  message: string;
  detail_message?: string;
  type: ApiErrorType;
}

/**
 * Enumeration of possible API error types.
 */
export type ApiErrorType = 'BadRequestError' |
    'NotFoundError' |
    'InternalServerError' |
    'VCloudDirectorError' |
    'VShieldManagerError' |
    'UnauthorizedError' |
    'UnknownError' |
    'ConnectionError';
