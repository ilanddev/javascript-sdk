import { Entity } from './entity';
import { CatalogJson, EntityType } from './json';
import { Iland } from '../iland';

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
    return 'CATALOG';
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
}
