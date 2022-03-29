import { CephTenantKeyDeleteRequestJson } from './__json__/ceph-tenant-key-delete-request-json';

export class CephTenantKeyDeleteRequest {

  constructor(private _json: CephTenantKeyDeleteRequestJson) {
  }

  get accessKey(): string {
    return this._json.access_key;
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
     * @returns {CephTenantKeyDeleteRequestJson} the API VM object
     */
  get json(): CephTenantKeyDeleteRequestJson {
    return Object.assign({}, this._json);
  }
}
