import { Entity } from './entity';
import { VappJson } from './json/vapp';
import { Iland } from '../iland';
import { EntityType } from './json/entity-type';
import { VmJson } from './json/vm';
import { Vm } from './vm';
import { VdcJson } from './json/vdc';
import { Vapp } from './vapp';
import { OrgJson } from './json/org';
import { Vdc } from './vdc';

/**
 * IaaS Organization.
 */
export class Org extends Entity {

  constructor(private _json: OrgJson) {
    super(_json);
  }

  /**
   * Gets an Org by UUID.
   * @param uuid Org UUID
   * @returns {Promise<Org>} promise that resolves with the Org
   */
  static async getOrg(uuid: string): Promise<Org> {
    return Iland.getHttp().get(`/org/${uuid}`).then(function(response) {
      let json = response.data as OrgJson;
      return new Org(json);
    });
  }

  getEntityType(): EntityType {
    return 'ORG';
  }

  /**
   * Indicates whether the Org is enabled.
   * @returns {boolean} value
   */
  isEnabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Gets the description.
   * @returns {string} description
   */
  getDescription(): string {
    return this._json.description;
  }

  /**
   * Gets the vCloud HREF
   * @returns {string} vCloud HREF
   */
  getVcloudHref(): string {
    return this._json.vcloud_href;
  }

  /**
   * Gets the datacenter location identifier.
   * @returns {string} location ID
   */
  getLocationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the Orgs max vApp runtime lease setting.
   * @returns {number} vApp max runtime lease
   */
  getVappMaxRuntimeLease(): number {
    return this._json.vapp_max_runtime_lease;
  }

  /**
   * Gets the vApps max storage lease setting.
   * @returns {number} vApp max storage lease
   */
  getVappMaxStorageLease(): number {
    return this._json.vapp_max_storage_lease;
  }

  /**
   * Gets the Orgs vApp template max storage lease setting.
   * @returns {number} vApp template max storage lease
   */
  getVappTemplateMaxStorageLease(): number {
    return this._json.vapp_template_max_storage_lease;
  }

  /**
   * Indicates whether the Org is configured such that vApps are deleted upon storage lease expiration vs. being marked
   * as an expired item.
   * @returns {boolean} value
   */
  isVappDeletedOnStorageLeaseExpiration(): boolean {
    return this._json.vapp_delete_on_storage_expire;
  }

  /**
   * Indicates whether the Org is configured such that vApp templates are deleted upon storage lease expiration vs.
   * being marked as an expired item.
   * @returns {boolean} value
   */
  isVappTemplateDeletedOnStorageLeaseExpiration(): boolean {
    return this._json.vapp_template_delete_on_storage_expire;
  }

  /**
   * Indicates whether the Org is a Zerto continuity target.
   * @returns {boolean} value
   */
  isZertoTarget(): boolean {
    return this._json.zerto_target;
  }

  /**
   * Gets the full name of the organization.
   * @returns {string} full name
   */
  getFullName(): string {
    return this._json.fullname;
  }

  /**
   * Gets the company ID (CRM).
   * @returns {string} company ID
   */
  getCompanyId(): string {
    return this._json.crm;
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
   * @returns {OrgJson} the API json object
   */
  getJson(): OrgJson {
    return Object.assign({}, this._json);
  }

  /**
   * Refreshes the Org data by retrieving it from the API again.
   * @returns {Promise<Org>} promise that resolves with this object
   */
  async refresh(): Promise<Org> {
    let self = this;
    return Iland.getHttp().get(
        `/org/${self.getUuid()}`).then(function(response) {
          self._json = response.data as OrgJson;
          return self;
        });
  }

  /**
   * Gets the Orgs child vDCs.
   * @returns {Promise<Vdc[]>} promise that resolves with an array of child vDCs
   */
  async getVdcs(): Promise<Array<Vdc>> {
    let self = this;
    return Iland.getHttp().get(
        `/org/${self.getUuid()}/vdcs`).then(function(response) {
          let json = response.data as Array<VdcJson>;
          return json.map((vdcJson) => new Vdc(vdcJson));
        });
  }

  /**
   * Gets the Orgs child vApps.
   * @returns {Promise<Vapp[]>} promise that resolves with an array of child vApps
   */
  async getVapps(): Promise<Array<Vapp>> {
    let self = this;
    return Iland.getHttp().get(
        `/org/${self.getUuid()}/vapps`).then(function(response) {
          let json = response.data as Array<VappJson>;
          return json.map((vappJson) => new Vapp(vappJson));
        });
  }

  /**
   * Gets the Orgs child VMs.
   * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
   */
  async getVms(): Promise<Array<Vm>> {
    let self = this;
    return Iland.getHttp().get(
        `/org/${self.getUuid()}/vms`).then(function(response) {
          let json = response.data as Array<VmJson>;
          return json.map((vmJson) => new Vm(vmJson));
        });
  }

}
