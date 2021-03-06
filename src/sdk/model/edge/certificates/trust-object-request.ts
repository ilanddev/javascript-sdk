import { TrustObjectRequestJson } from './__json__/trust-object-request-json';

/* istanbul ignore next: autogenerated */
export class TrustObjectRequest {

  private readonly _json: TrustObjectRequestJson;

  constructor(trustObjectRequest: TrustObjectRequest);
  constructor(trustObjectRequestJson: TrustObjectRequestJson);
  constructor(pemEncoding: string, privateKey: string, passphrase: string, description: string);
  constructor(firstParam: string | TrustObjectRequest | TrustObjectRequestJson, privateKey?: string,
              passphrase?: string, description?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        pem_encoding: firstParam,
        private_key: privateKey,
        passphrase: passphrase,
        description: description
      } as TrustObjectRequestJson;
    } else if (firstParam instanceof TrustObjectRequest) {
      // Copy constructor
      this._json = (firstParam as TrustObjectRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as TrustObjectRequestJson;
    }
  }

  /**
   * Get pem encoding.
   * @returns {string}
   */
  get pemEncoding(): string {
    return this._json.pem_encoding;
  }

  /**
   * Get private key.
   * @returns {string}
   */
  get privateKey(): string | undefined {
    return this._json.private_key;
  }

  /**
   * Get passphrase.
   * @returns {string}
   */
  get passphrase(): string | undefined {
    return this._json.passphrase;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string | undefined {
    return this._json.description;
  }

  /**
   * Get the json representation of this class.
   * @returns {TrustObjectRequestJson}
   */
  get json(): TrustObjectRequestJson {
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
