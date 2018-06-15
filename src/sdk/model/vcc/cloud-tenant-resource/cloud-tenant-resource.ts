import { CloudRepository } from '../cloud-repository/cloud-repository';
import { CloudTenantResourceJson } from './__json__/cloud-tenant-resource-json';

/**
 * Cloud Tenant Resource.
 */
export class CloudTenantResource {

  constructor(private _json: CloudTenantResourceJson) {
  }

  /**
   * Gets a CloudRepository object
   * @returns {CloudRepository} cloud repository object
   */
  get repository(): CloudRepository {
    return new CloudRepository(this._json.repository);
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
   * @returns {CloudTenantResourceJson} the API __json__ object
   */
  get json(): CloudTenantResourceJson {
    return Object.assign({}, this._json);
  }
}
