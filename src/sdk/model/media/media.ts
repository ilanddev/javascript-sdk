import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Entity } from '../common/entity';
import { Iland } from '../../iland';
import { MediaJson } from './__json__/media-json';
import { EntityType } from '../common/__json__/entity-type';
import { Task } from '../task/task';
import { MediaUpdateRequest } from './media-update-request';
import { MediaCloneRequest } from './media-clone-request';
import { Http } from '../../service/http/http';
import { Metadata } from '../common/metadata/metadata';
import { MetadataJson } from '../common/metadata/__json__/metadata-json';
import { MetadataType } from '../common/metadata/__json__/metadata-type';
import { TaskJson } from '../task/__json__/task-json';

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
    return 'IAAS_MEDIA';
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
   * Deletes current Media
   * @returns {Promise<Task>} promise that resolves with a Task
   */
  async delete(): Promise<Task> {
    return Iland.getHttp().delete(`/media/${this.uuid}`).then(async(response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Updates media name, description and storage profile
   * @param {MediaUpdateRequest} request
   * @returns {Promise<Task>} promise that resolves with a Task
   */
  async update(request: MediaUpdateRequest): Promise<Task> {
    return Iland.getHttp().put(`/media/${this.uuid}`, request.json).then(async(response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Clones current Media.
   * @param {MediaUpdateRequest} request
   * @returns {Promise<Task>} promise that resolves with a Task
   */
  async clone(request: MediaCloneRequest): Promise<Task> {
    return Iland.getHttp().post(`/media/${this.uuid}/actions/clone`, request.json)
        .then(async(response) => {
          const apiTask = response.data as TaskJson;
          return new Task(apiTask);
        });
  }

  /**
   * Synchronize current Media.
   * @returns {Promise<Task>} promise that resolves with a Task
   */
  async sync(): Promise<Task> {
    return Iland.getHttp().post(`/media/${this.uuid}/actions/sync`).then(async(response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Get a link to download the Media.
   * @param {string} filename
   * @returns {Observable<string>}
   */
  getDownloadLink(filename?: string): Observable<string> {
    let href = `${Iland.baseUrl}/media/${this.uuid}/download?accept=` +
        encodeURIComponent(Http.versionMime('application/octet-stream'));
    if (filename) {
      href = href + '&filename=' + encodeURIComponent(filename);
    }
    const observable: Observable<string> = Iland.getAuthProvider().getTokenObservable();
    return observable.pipe(map(token => `${href}&oauth_token=${token}`));
  }

  /**
   * Gets the Media's metadata.
   * @returns {Promise<Metadata<MetadataType>[]>}
   */
  async getMetadata(): Promise<Array<Metadata<MetadataType>>> {
    return Iland.getHttp().get(`/media/${this.uuid}/metadata`).then((response) => {
      const jsonMetadata = response.data.data as Array<MetadataJson<MetadataType>>;
      return jsonMetadata.map<Metadata<MetadataType>>((json) => {
        switch (json.type) {
          case 'number':
            return new Metadata<number>(json as MetadataJson<number>);
          case 'boolean':
            return new Metadata<boolean>(json as MetadataJson<boolean>);
          case 'datetime':
            return new Metadata<Date>(json as MetadataJson<Date>);
          case 'string':
            return new Metadata<string>(json as MetadataJson<string>);
        }
        throw new Error(`Metadata with type ${json.type} is unknown.`);
      });
    });
  }

  /**
   * Updates the Media's metadata.
   * @param {Array<Metadata<MetadataType>>} metadata the new array of metadata
   * @returns {Promise<Task>} task promise
   */
  async updateMetadata(metadata: Array<Metadata<MetadataType>>): Promise<Task> {
    const metadataJson: Array<MetadataJson<MetadataType>> = metadata.map(m => {
      return m.json;
    });
    return Iland.getHttp().put(`/media/${this.uuid}/metadata`, metadataJson).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Deletes a metadata entry.
   * @param {string} metadataKey the key of the metadata entry to delete
   * @returns {Promise<Task>} task promise
   */
  async deleteMetadata(metadataKey: string): Promise<Task> {
    return Iland.getHttp().delete(`/media/${this.uuid}/metadata/${metadataKey}`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
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
