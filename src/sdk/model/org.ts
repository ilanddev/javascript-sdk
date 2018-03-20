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
import { Edge } from './edge';
import { EdgeJson } from './json/edge';
import { InternalNetwork } from './internal-network';
import { InternalNetworkJson } from './json/internal-network';
import { VappNetwork } from './vapp-network';
import { VappNetworkJson } from './json/vapp-network';

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
    return Iland.getHttp().get(`/organizations/${uuid}`).then((response) => {
      const json = response.data as OrgJson;
      return new Org(json);
    });
  }

  get entityType(): EntityType {
    return 'ORG';
  }

  /**
   * Indicates whether the Org is enabled.
   * @returns {boolean} value
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Gets the description.
   * @returns {string} description
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Gets the vCloud HREF
   * @returns {string} vCloud HREF
   */
  get vcloudHref(): string {
    return this._json.vcloud_href;
  }

  /**
   * Gets the datacenter location identifier.
   * @returns {string} location ID
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the Orgs max vApp runtime lease setting.
   * @returns {number} vApp max runtime lease
   */
  get vappMaxRuntimeLease(): number {
    return this._json.vapp_max_runtime_lease;
  }

  /**
   * Gets the vApps max storage lease setting.
   * @returns {number} vApp max storage lease
   */
  get vappMaxStorageLease(): number {
    return this._json.vapp_max_storage_lease;
  }

  /**
   * Gets the Orgs vApp template max storage lease setting.
   * @returns {number} vApp template max storage lease
   */
  get vappTemplateMaxStorageLease(): number {
    return this._json.vapp_template_max_storage_lease;
  }

  /**
   * Indicates whether the Org is configured such that vApps are deleted upon storage lease expiration vs. being marked
   * as an expired item.
   * @returns {boolean} value
   */
  get vappDeletedOnStorageLeaseExpiration(): boolean {
    return this._json.vapp_delete_on_storage_expire;
  }

  /**
   * Indicates whether the Org is configured such that vApp templates are deleted upon storage lease expiration vs.
   * being marked as an expired item.
   * @returns {boolean} value
   */
  get vappTemplateDeletedOnStorageLeaseExpiration(): boolean {
    return this._json.vapp_template_delete_on_storage_expire;
  }

  /**
   * Indicates whether the Org is a Zerto continuity target.
   * @returns {boolean} value
   */
  get zertoTarget(): boolean {
    return this._json.zerto_target;
  }

  /**
   * Gets the full name of the organization.
   * @returns {string} full name
   */
  get fullName(): string {
    return this._json.fullname;
  }

  /**
   * Gets the company ID (CRM).
   * @returns {string} company ID
   */
  get companyId(): string {
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
  get json(): OrgJson {
    return Object.assign({}, this._json);
  }

  /**
   * Refreshes the Org data by retrieving it from the API again.
   * @returns {Promise<Org>} promise that resolves with this object
   */
  async refresh(): Promise<Org> {
    return Iland.getHttp().get(`/organizations/${this.uuid}`).then((response) => {
      this._json = response.data as OrgJson;
      return this;
    });
  }

  /**
   * Gets the Orgs child vDCs.
   * @returns {Promise<Vdc[]>} promise that resolves with an array of child vDCs
   */
  async getVdcs(): Promise<Array<Vdc>> {
    return Iland.getHttp().get(`/organizations/${this.uuid}/vdcs`).then((response) => {
      const json = response.data as Array<VdcJson>;
      return json.map((vdcJson) => new Vdc(vdcJson));
    });
  }

  /**
   * Gets the Orgs child vApps.
   * @returns {Promise<Vapp[]>} promise that resolves with an array of child vApps
   */
  async getVapps(): Promise<Array<Vapp>> {
    return Iland.getHttp().get(`/organizations/${this.uuid}/vapps`).then((response) => {
      const json = response.data as Array<VappJson>;
      return json.map((vappJson) => new Vapp(vappJson));
    });
  }

  /**
   * Gets the Orgs child VMs.
   * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
   */
  async getVms(): Promise<Array<Vm>> {
    return Iland.getHttp().get(`/organizations/${this.uuid}/vms`).then((response) => {
      const json = response.data as Array<VmJson>;
      return json.map((vmJson) => new Vm(vmJson));
    });
  }

  /**
   * Gets the Orgs child Edges.
   * @returns {Promise<Edge[]>} promise that resolves with an array of child Edges
   */
  async getEdges(): Promise<Array<Edge>> {
    return Iland.getHttp().get(`/organizations/${this.uuid}/edges`).then((response) => {
      const json = response.data as Array<EdgeJson>;
      return json.map((edgeJson) => new Edge(edgeJson));
    });
  }

  /**
   * Gets the Orgs child internal networks.
   * @returns {Promise<InternalNetwork[]>} promise that resolves with an array of child Internal networks
   */
  async getInternalNetworks(): Promise<Array<InternalNetwork>> {
    return Iland.getHttp().get(`/organizations/${this.uuid}/vdc-networks`).then((response) => {
      const json = response.data as Array<InternalNetworkJson>;
      return json.map((netJson) => new InternalNetwork(netJson));
    });
  }

  /**
   * Gets the Orgs child vApp networks.
   * @returns {Promise<VappNetwork[]>} promise that resolves with an array of child vApp networks
   */
  async getVappNetworks(): Promise<Array<VappNetwork>> {
    return Iland.getHttp().get(`/organizations/${this.uuid}/vapp-networks`).then((response) => {
      const json = response.data as Array<VappNetworkJson>;
      return json.map((netJson) => new VappNetwork(netJson));
    });
  }

}
