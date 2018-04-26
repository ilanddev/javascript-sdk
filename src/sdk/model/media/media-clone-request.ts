import { MediaCloneRequestJson } from './__json__/media-clone-request';

/**
 * Role Creation Request Implementation.
 */
export class MediaCloneRequest {

  private _json: MediaCloneRequestJson;

  constructor(mediaCloneRequest: MediaCloneRequest);
  constructor(mediaCloneRequestJson: MediaCloneRequestJson);
  constructor(vccUuid: string, storageProfileUuid: string, catalogUuid: string, mediaName: string);
  constructor(firstParam: string | MediaCloneRequest | MediaCloneRequestJson, storageProfileUuid?: string,
              catalogUuid?: string, mediaName?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        vdc_uuid: firstParam,
        storage_profile_uuid: storageProfileUuid,
        catalog_uuid: catalogUuid,
        media_name: mediaName
      } as MediaCloneRequestJson;
    } else if (firstParam instanceof MediaCloneRequest) {
      // Copy constructor
      this._json = (firstParam as MediaCloneRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as MediaCloneRequestJson;
    }
  }

  /**
   * Get vDC uuid.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get Storage Profile uuid.
   * @returns {string}
   */
  get storageProfileUuid(): string {
    return this._json.storage_profile_uuid;
  }

  /**
   * Get Catalog uuid.
   * @returns {string}
   */
  get catalogUuid(): string {
    return this._json.catalog_uuid;
  }

  /**
   * Get Media name.
   * @returns {string}
   */
  get mediaName(): string {
    return this._json.media_name;
  }

  /**
   * Gets the raw JSON object.
   * @returns {MediaCloneRequestJson} the JSON representation
   */
  get json(): MediaCloneRequestJson {
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
