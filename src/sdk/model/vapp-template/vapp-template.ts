import { Iland } from '../../iland';
import { VappTemplateJson } from './__json__/vapp-template-json';
import { EntityType } from '../common/__json__/entity-type';
import { Entity } from '../common/entity';

/**
 * VappTemplate
 */
export class VappTemplate extends Entity {

  constructor(private _json: VappTemplateJson) {
    super(_json);
  }

  /**
   * Get the VappTemplate from API.
   * @param {string} uuid
   * @returns {Promise<VappTemplate>} promise that resolves with the VappTemplate.
   */
  static async getVappTemplate(uuid: string): Promise<VappTemplate> {
    return Iland.getHttp().get(`/vapp-templates/${uuid}`).then((response) => {
      const json = response.data as VappTemplateJson;
      return new VappTemplate(json);
    });
  }

  /**
   * Get VappTemplate entity type.
   * @returns {EntityType}
   */
  get entityType(): EntityType {
    return 'IAAS_VAPP_TEMPLATE';
  }

  /**
   * Get VappTemplate description
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get VappTemplate vCloudHref.
   * @returns {string}
   */
  get vcloudHref(): string {
    return this._json.vcloud_href;
  }

  /**
   * Get VappTemplate status
   * @returns {number}
   */
  get status(): number {
    return this._json.status;
  }

  /**
   * Get VappTemplate size.
   * @returns {number}
   */
  get size(): number {
    return this._json.size;
  }

  /**
   * Indicate whether the VappTemplate is customisable or not.
   * @returns {boolean}
   */
  get isCustomisable(): boolean {
    return this._json.customizable;
  }

  /**
   * Indicate whether the VappTemplate customization is required or not.
   * @returns {boolean}
   */
  get isCustomizationRequired(): boolean {
    return this._json.customization_required;
  }

  /**
   * Indicate whether the VappTemplate is gold master or not.
   * @returns {boolean}
   */
  get isGoldMaster(): boolean {
    return this._json.gold_master;
  }

  /**
   * Indicate whether the VappTemplate is public or not.
   * @returns {boolean}
   */
  get isPublic(): boolean {
    return this._json.public;
  }

  /**
   * Get VappTemplate storage profile uuid.
   * @returns {string}
   */
  get storageProfileUuid(): string {
    return this._json.storage_profile_uuid;
  }

  /**
   * Get VappTemplate vDc uuid
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get VappTemplate location ID
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get VappTemplate org uuid
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get VappTemplate catalog uuid
   * @returns {string}
   */
  get catalogUuid(): string {
    return this._json.catalog_uuid;
  }

  /**
   * Get VappTemplate creation date
   * @returns {Date}
   */
  get createdDate(): Date {
    return new Date(this._json.created_date);
  }

  /**
   * Indicate whether the VappTemplate is expired or not.
   * @returns {boolean}
   */
  get isExpired(): boolean {
    return this._json.is_expired;
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VappTemplateJson} the API __json__ object
   */
  get json(): VappTemplateJson {
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
   * Refreshes the VappTemplate data by retrieving it from the API again.
   * @returns {Promise<VappTemplate>} promise that resolves with this object
   */
  async refresh(): Promise<VappTemplate> {
    return Iland.getHttp().get(`/vapp-templates/${this.uuid}`).then((response) => {
      this._json = response.data as VappTemplateJson;
      return this;
    });
  }
}
