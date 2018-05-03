import { Entity } from '../../common/entity';
import { Iland } from '../../../iland';
import { MediaJson } from './__json__/media-json';
import { EntityType } from '../../common/__json__/entity-type';

/**
 * Media.
 */
export class Media extends Entity {

  constructor(private _json: MediaJson) {
    super(_json);
  }

  /**
   * Get the Media from API.
   * @param {string} uuid
   * @returns {Promise<Media>} promise that resolves with the Media
   */
  static async getMedia(uuid: string): Promise<Media> {
    return Iland.getHttp().get(`/media/${uuid}`).then((response) => {
      const json = response.data as MediaJson;
      return new Media(json);
    });
  }

  /**
   * Get entity type for Media
   * @returns {EntityType}
   */
  get entityType(): EntityType {
    return 'MEDIA';
  }

  /**
   * Refreshes the Media data by retrieving it from the API again.
   * @returns {Promise<Media>} promise that resolves with the Media
   */
  async refresh(): Promise<Media> {
    return Iland.getHttp().get(`/media/${this.uuid}`).then((response) => {
      this._json = response.data as MediaJson;
      return this;
    });
  }

  /**
   * Get Media status.
   * @returns {number}
   */
  get status(): number {
    return this._json.status;
  }

  /**
   * Get Media size.
   * @returns {number}
   */
  get size(): number {
    return this._json.size;
  }

  /**
   * Indicate whether the Media is public or not.
   * @returns {boolean}
   */
  get isPublic(): boolean {
    return this._json.public;
  }

  /**
   * Get Media location ID
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get Media org uuid.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get Media catalog uuid.
   * @returns {string}
   */
  get catalogUuid(): string {
    return this._json.catalog_uuid;
  }

  /**
   * Get Media storageProfile uuid.
   * @returns {string}
   */
  get storageProfileUuid(): string {
    return this._json.storage_profile_uuid;
  }

  /**
   * Get Media vDc uuid.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get Media description
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get Media vCloudHref.
   * @returns {string}
   */
  get vcloudHref(): string {
    return this._json.vcloud_href;
  }

  /**
   * Get Media creation date.
   * @returns {Date}
   */
  get createdDate(): Date {
    return new Date(this._json.created_date);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {MediaJson} the JSON representation
   */
  get json(): MediaJson {
    return Object.assign({}, this._json);
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
