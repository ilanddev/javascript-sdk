import { MediaUpdateRequestJson } from './__json__/media-update-request';

/**
 * Role Creation Request Implementation.
 */
export class MediaUpdateRequest {

  private _json: MediaUpdateRequestJson;

  constructor(name: string, description: string, storageProfileUuid: string);
  constructor(mediaUpdateRequest: MediaUpdateRequest);
  constructor(mediaUpdateRequestJson: MediaUpdateRequestJson);
  constructor(firstParam?: string | MediaUpdateRequest | MediaUpdateRequestJson,
              description?: string, storageProfileUuid?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        name: firstParam,
        description: description,
        storage_profile_uuid: storageProfileUuid
      } as MediaUpdateRequestJson;
    } else if (firstParam instanceof MediaUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as MediaUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as MediaUpdateRequestJson;
    }
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get storage profile ID.
   * @returns {string}
   */
  get storageProfileUuid(): string {
    return this._json.storage_profile_uuid;
  }

  /**
   * Gets the raw JSON object.
   * @returns {MediaUpdateRequestJson} the JSON representation
   */
  get json(): MediaUpdateRequestJson {
    return this._json;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
