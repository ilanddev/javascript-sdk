import { CephTenantKeyCreateRequestJson } from './__json__/ceph-tenant-key-create-request-json';

export class CephTenantKeyCreateRequest {

  constructor(private _json: CephTenantKeyCreateRequestJson) {
  }

  get accessKey(): string | undefined {
    return this._json.access_key;
  }

  get secretKey(): string | undefined {
    return this._json.secret_key;
  }

  get username(): string | undefined {
    return this._json.username;
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
     * @returns {CephTenantKeyCreateRequestJson} the API VM object
     */
  get json(): CephTenantKeyCreateRequestJson {
    return Object.assign({}, this._json);
  }
}
