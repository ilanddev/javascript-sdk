import { Task } from '../task/task';
import { Iland } from '../../iland';
import { EntityType } from '../common/__json__/entity-type';
import { Entity } from '../common/entity';
import { VappTemplateConfigurationJson } from './__json__/vapp-template-configuration-json';
import { VappTemplateDownloadDetailsJson } from './__json__/vapp-template-download-details-json';
import { VappTemplateJson } from './__json__/vapp-template-json';
import { VappTemplateDownloadDetails } from './vapp-template-download-details';
import { VappTemplateVm } from './vapp-template-vm';
import { VappTemplateVmJson } from './__json__/vapp-template-vm-json';
import { VappTemplateConfiguration } from './vapp-template-configuration';
import { VappTemplateUpdateRequest } from './vapp-template-update-request';
import { TaskJson } from '../task/__json__/task-json';
import { Metadata } from '../common/metadata/metadata';
import { MetadataType } from '../common/metadata/__json__/metadata-type';
import { MetadataJson } from '../common/metadata/__json__/metadata-json';

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
    return this._json.is_public;
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
   * Get vm templates.
   * @returns {Array<VappTemplateVm>}
   */
  get vmTemplates(): Array<VappTemplateVm> {
    return this._json.vm_templates.map(it => new VappTemplateVm(it));
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

  /**
   * Update a Vapp Template.
   * Capable of updating the templates name, and description.
   * @param {VappTemplateUpdateRequest} req vapp template update request
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async updateVappTemplate(req: VappTemplateUpdateRequest): Promise<Task> {
    return Iland.getHttp().put(`/vapp-templates/${this.uuid}`, req.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Delete a Vapp template.
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async deleteVappTemplate(): Promise<Task> {
    return Iland.getHttp().delete(`/vapp-templates/${this.uuid}`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Retrieve a vApp Template's VMs.
   * @returns {Promise<Array<VappTemplateVm>>} promise Promise that resolves with a list of VappTemplateVm
   */
  /* istanbul ignore next: autogenerated */
  async getVappTemplateVms(): Promise<Array<VappTemplateVm>> {
    return Iland.getHttp().get(`/vapp-templates/${this.uuid}/vms`).then((response) => {
      const json = response.data.data as Array<VappTemplateVmJson>;
      return json.map((it) => new VappTemplateVm(it));
    });
  }

  /**
   * Retrieve a vApp Template's detailed configuration.
   * @returns {Promise<VappTemplateConfiguration>} promise Promise that resolves with VappTemplateConfiguration
   */
  /* istanbul ignore next: autogenerated */
  async getVappTemplateConfiguration(): Promise<VappTemplateConfiguration> {
    return Iland.getHttp().get(`/vapp-templates/${this.uuid}/configuration`).then((response) => {
      const json = response.data as VappTemplateConfigurationJson;
      return new VappTemplateConfiguration(json);
    });
  }
  /**
   * Enable the download of the vapp template. Returns a CoreTask which monitors
   * the progress of the download.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async enableVappTemplateDownload(): Promise<Task> {
    return Iland.getHttp().post(`/vapp-templates/${this.uuid}/actions/enable-download`)
        .then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Gets download details for the vApp Template. Details include whether the
   * template is enabled for download, and, if enabled, the size and name of the
   * download.
   * @returns {Promise<VappTemplateDownloadDetails>} promise Promise that resolves with VappTemplateDownloadDetails
   */
  /* istanbul ignore next: autogenerated */
  async getDownloadDetails(): Promise<VappTemplateDownloadDetails> {
    return Iland.getHttp().get(`/vapp-templates/${this.uuid}/download-details`).then((response) => {
      const json = response.data as VappTemplateDownloadDetailsJson;
      return new VappTemplateDownloadDetails(json);
    });
  }

  /**
   * Gets the vApp Template's metadata.
   * @returns {Promise<Array<Metadata<MetadataType>>>} promise Promise that resolves with a list of Metadata
   */
  /* istanbul ignore next: autogenerated */
  async getMetadata(): Promise<Array<Metadata<MetadataType>>> {
    return Iland.getHttp().get(`/vapp-templates/${this.uuid}/metadata`).then((response) => {
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
   * Updates the vApp Template's metadata.
   * @param {Array<Metadata<MetadataType>>} metadata the new array of metadata
   * @returns {Promise<Task>} task promise
   */
  async updateMetadata(metadata: Array<Metadata<MetadataType>>): Promise<Task> {
    const metadataJson: Array<MetadataJson<MetadataType>> = metadata.map(m => {
      return m.json;
    });
    return Iland.getHttp().put(`/vapp-templates/${this.uuid}/metadata`, metadataJson).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Delete a specific piece of metadata associated with a vapp template by its
   * key.
   * @param {string} key metadata key
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async deleteMetadata(key: string): Promise<Task> {
    return Iland.getHttp().delete(`/vapp-templates/${this.uuid}/metadata/${key}`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }
}
