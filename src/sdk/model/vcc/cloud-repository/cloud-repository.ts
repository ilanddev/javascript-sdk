import { WanAccelerator } from '../wan-accelerator/wan-accelerator';
import { CloudRepositoryJson } from './__json__/cloud-repository-json';

/**
 * Cloud Repository.
 */
export class CloudRepository {

  constructor(private _json: CloudRepositoryJson) {
  }

  /**
   * Gets the display name for the Cloud Repository
   * @returns {string} display name
   */
  get displayName(): string {
    return this._json.display_name;
  }

  /**
   * Gets the quota for the Cloud Repository
   * @returns {number} quota
   */
  get quota(): number {
    return this._json.quota;
  }

  /**
   * Gets the used quota for the Cloud Repository
   * @returns {number} used quota
   */
  get usedQuota(): number {
    return this._json.used_quota;
  }

  /**
   * Gets the Wan Accelerator uuid for the Cloud Repository
   * @returns {string} wan accelerator uuid
   */
  get wanAcceleratorUuid(): string | null {
    return this._json.wan_accelerator_uuid;
  }

  /**
   * Gets the Wan Accelerator object for the Cloud Repository
   * @returns {WanAccelerator} wan accelerator
   */
  get wanAccelerator(): WanAccelerator | null {
    return (this._json.wan_accelerator ? new WanAccelerator(this._json.wan_accelerator) : null);
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
   * @returns {CloudRepositoryJson} the API __json__ object
   */
  get json(): CloudRepositoryJson {
    return Object.assign({}, this._json);
  }
}
