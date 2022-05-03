import { CephTenantKeyPairJson } from './__json__/ceph-tenant-key-pair-json';

export class CephTenantKeyPair {

  constructor(private _json: CephTenantKeyPairJson) {
  }

  get accessKey(): string {
    return this._json.access_key;
  }

  get secretKey(): string | undefined {
    return this._json.secret_key;
  }

  get username(): string | undefined {
    return this._json.username;
  }

  /**
   * Created date timestamp comes back in seconds from API so we convert it to milliseconds to properly
   * get js Date
   */
  get createdDate(): Date | undefined {
    return this._json.created_date ? new Date(this._json.created_date * 1000) : undefined;
  }

  get description(): string | undefined {
    return this._json.description;
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
     * @returns {CephTenantKeyPairJson} the API VM object
     */
  get json(): CephTenantKeyPairJson {
    return Object.assign({}, this._json);
  }
}
