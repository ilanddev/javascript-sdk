import { Entity } from '../common/entity';
import { Iland } from '../../iland';
import { Metadata } from '../common/metadata/metadata';
import { Media } from '../media/media';
import { VappTemplate } from '../vapp-template/vapp-template';
import { CatalogJson } from './__json__/catalog-json';
import { EntityType } from '../common/__json__/entity-type';
import { ItemDownloadJson } from './__json__/item-downloads-json';
import { MediaJson } from '../media/__json__/media-json';
import { VappTemplateJson } from '../vapp-template/__json__/vapp-template-json';
import { MetadataJson } from '../common/metadata/__json__/metadata-json';
import { MetadataType } from '../common/metadata/__json__/metadata-type';
import { VappTemplateFromVappCreateRequest } from './vapp-template-from-vapp-create-request';
import { Task, TaskJson } from '../task';
import { CatalogUpdateRequest } from './catalog-update-request';

/**
 * Catalog.
 */
export class Catalog extends Entity {

  constructor(private _json: CatalogJson) {
    super(_json);
  }

  /**
   * Get the Catalog from API.
   * @param {string} uuid
   * @returns {Promise<Catalog>} promise that resolves with the Catalog
   */
  static async getCatalog(uuid: string): Promise<Catalog> {
    // TODO: Once the API implement the public keyword in uuid, we should remove this.
    // We make sure that we are using the original uuid not the overridden one...
    uuid = uuid.replace('public:', '');
    return Iland.getHttp().get(`/catalogs/${uuid}`).then((response) => {
      const json = response.data as CatalogJson;
      return new Catalog(json);
    });
  }

  get originalUuid(): string {
    return this._json.uuid;
  }

  get uuid(): string {
    return (this.isPublic && this.isShared) ? `public:${this._json.uuid}` : this._json.uuid;
  }

  /**
   * Get entity type for catalog.
   * @returns {EntityType}
   */
  get entityType(): EntityType {
    return 'IAAS_CATALOG';
  }

  /**
   * Get location ID
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Indicate whether the catalog is shared or not.
   * @returns {boolean}
   */
  get isShared(): boolean {
    return this._json.shared;
  }

  /**
   * Indicate whether the catalog is public or not.
   * @returns {boolean}
   */
  get isPublic(): boolean {
    return this._json.public;
  }

  /**
   * Get the catalog version
   * @returns {number}
   */
  get version(): number {
    return this._json.version;
  }

  /**
   * Get org uuid for catalog.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get description for catalog
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get vCloudHref for catalog
   * @returns {string}
   */
  get vcloudHref(): string {
    return this._json.vcloud_href;
  }

  /**
   * Get the creation date
   * @returns {Date}
   */
  get createdDate(): Date {
    return new Date(this._json.created_date);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {CatalogJson} the JSON representation
   */
  get json(): CatalogJson {
    return Object.assign({}, this._json);
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Refreshes the Catalog data by retrieving it from the API again.
   * @returns {Promise<Catalog>} promise that resolves with the Catalog
   */
  async refresh(): Promise<Catalog> {
    return Iland.getHttp().get(`/catalogs/${this.originalUuid}`).then((response) => {
      this._json = response.data as CatalogJson;
      return this;
    });
  }

  /**
   * Gets Catalog's item downloads.
   * @description There are two types of catalog items that will show up: 'media' or 'template'.
   * The item type field will report 'media' or 'vapp_template'.If the item is a media,
   * the 'template' field will be null and vice-versa. (null 'media' field if item is a vapp_template).
   * Only private catalogs will have a list of catalog item downloads returned.
   * @returns {Promise<Array<ItemDownloadJson>>}
   */
  async getItemDownloads(): Promise<Array<ItemDownloadJson>> {
    return Iland.getHttp().get(`/catalogs/${this.originalUuid}/item-downloads`).then((response) => {
      return response.data.data as Array<ItemDownloadJson>;
    });
  }

  /**
   * Gets the Catalog's Medias
   * @returns {Promise<Array<Media>>}
   */
  async getMedia(): Promise<Array<Media>> {
    return Iland.getHttp().get(`/catalogs/${this.originalUuid}/media`).then((response) => {
      const medias = response.data.data as Array<MediaJson>;
      return medias.map(media => new Media(media));
    });
  }

  /**
   * Gets the Catalog's vApp-Templates
   * @returns {Promise<Array<VappTemplate>>}
   */
  async getVappTemplates(): Promise<Array<VappTemplate>> {
    return Iland.getHttp().get(`/catalogs/${this.originalUuid}/vapp-templates`).then((response) => {
      const vappTemplates = response.data.data as Array<VappTemplateJson>;
      return vappTemplates.map(vappTemplate => new VappTemplate(vappTemplate));
    });
  }

  /**
   * Add a Vapp Template to the catalog based on an existing vapp.
   * The json can contain params "name" and "description" for the new vapp
   * template.
   * @param {VappTemplateFromVappCreateRequest} spec vapp template spec
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async addVappTemplateFromVapp(spec: VappTemplateFromVappCreateRequest): Promise<Task> {
    return Iland.getHttp().post(`/catalogs/${this.uuid}/actions/add-vapp-template-from-vapp`, spec.json)
        .then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Gets the Catalog's metadata.
   * @returns {Promise<Metadata<MetadataType>[]>}
   * @throws Error Throw an error if the type is unrecognized.
   */
  async getMetadata(): Promise<Array<Metadata<MetadataType>>> {
    return Iland.getHttp().get(`/catalogs/${this.originalUuid}/metadata`).then((response) => {
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
   * Updates the catalog.
   * @param {CatalogUpdateRequest} catalog
   * @return {Promise<Catalog>}
   */
  /* istanbul ignore next: autogenerated */
  async updateCatalog(catalog: CatalogUpdateRequest): Promise<Catalog> {
    return Iland.getHttp().put(`/catalogs/${this.uuid}`, catalog.json).then((response) => {
      const json = response.data as CatalogJson;
      return new Catalog(json);
    });
  }

  /**
   * Deletes the catalog.
   */
  /* istanbul ignore next: autogenerated */
  async deleteCatalog(): Promise<any> {
    return Iland.getHttp().delete(`/catalogs/${this.uuid}`);
  }
}
