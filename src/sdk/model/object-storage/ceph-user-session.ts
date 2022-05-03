import { CephUserSessionJson } from './__json__/ceph-user-session-json';

export class CephUserSession {

  constructor(private _json: CephUserSessionJson) {
  }

  get tenantId(): string {
    return this._json.tenant_id;
  }

  get accessKey(): string {
    return this._json.access_key;
  }

  get secretKey(): string {
    return this._json.secret_key;
  }

  get sessionToken(): string {
    return this._json.session_token;
  }

  get expirationTime(): number {
    return this._json.expiration_time;
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
     * @returns {CephUserSessionJson} the API VM object
     */
  get json(): CephUserSessionJson {
    return Object.assign({}, this._json);
  }
}
