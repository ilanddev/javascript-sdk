import { Entity } from '../common/entity';
import { Iland } from '../../iland';
import { Vm } from '../vm/vm';
import { Vapp } from '../vapp/vapp';
import { Vdc } from '../vdc/vdc';
import { Edge } from '../edge/edge';
import { EdgeJson } from '../edge/__json__/edge-json';
import { InternalNetwork } from '../internal-network/internal-network';
import { InternalNetworkJson } from '../internal-network/__json__/internal-network-json';
import { VappNetwork } from '../vapp-network/vapp-network';
import { OrgJson } from './__json__/org-json';
import { EntityType } from '../common/__json__/entity-type';
import { VdcJson } from '../vdc/__json__/vdc-json';
import { VappJson } from '../vapp/__json__/vapp-json';
import { VmJson } from '../vm/__json__/vm-json';
import { VappNetworkJson } from '../vapp-network/__json__/vapp-network-json';
import { Bill, BillJson, BillingSummary, BillingSummaryJson } from '../common/billing';

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
    return Iland.getHttp().get(`/orgs/${uuid}`).then((response) => {
      const json = response.data as OrgJson;
      return new Org(json);
    });
  }

  get entityType(): EntityType {
    return 'IAAS_ORGANIZATION';
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
   * @returns {OrgJson} the API __json__ object
   */
  get json(): OrgJson {
    return Object.assign({}, this._json);
  }

  /**
   * Refreshes the Org data by retrieving it from the API again.
   * @returns {Promise<Org>} promise that resolves with this object
   */
  async refresh(): Promise<Org> {
    return Iland.getHttp().get(`/orgs/${this.uuid}`).then((response) => {
      this._json = response.data as OrgJson;
      return this;
    });
  }

  /**
   * Gets a list of historical bills for the organization. All bills with timestamps between the start and end
   * parameters are returned.
   * @param {Date} start the begin timestamp of the query range
   * @param {Date} end the end timestamp of the query range
   * @returns {Promise<Array<Bill>>} promise that resolves with the list of historical bills
   */
  async getHistoricalBilling(start: Date, end: Date): Promise<Array<Bill>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/historical-billing`, {
      params: {
        start: start.valueOf(),
        end: end.valueOf()
      }
    }).then((response) => {
      const json = response.data.data as Array<BillJson>;
      return json.map((it) => new Bill(it));
    });
  }

  /**
   * Gets the organization's current billing summary.
   * @returns {Promise<BillingSummary>} promise that resolves with the current billing summary
   */
  async getBillingSummary(): Promise<BillingSummary> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/billing-summary`).then((response) => {
      const json = response.data as BillingSummaryJson;
      return new BillingSummary(json);
    });
  }

  /**
   * Gets the Orgs child vDCs.
   * @returns {Promise<Vdc[]>} promise that resolves with an array of child vDCs
   */
  async getVdcs(): Promise<Array<Vdc>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/vdcs`).then((response) => {
      const json = response.data.data as Array<VdcJson>;
      return json.map((vdcJson) => new Vdc(vdcJson));
    });
  }

  /**
   * Gets the Orgs child vApps.
   * @returns {Promise<Vapp[]>} promise that resolves with an array of child vApps
   */
  async getVapps(): Promise<Array<Vapp>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/vapps`).then((response) => {
      const json = response.data.data as Array<VappJson>;
      return json.map((vappJson) => new Vapp(vappJson));
    });
  }

  /**
   * Gets the Orgs child VMs.
   * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
   */
  async getVms(): Promise<Array<Vm>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/vms`).then((response) => {
      const json = response.data.data as Array<VmJson>;
      return json.map((vmJson) => new Vm(vmJson));
    });
  }

  /**
   * Gets the Orgs child Edges.
   * @returns {Promise<Edge[]>} promise that resolves with an array of child Edges
   */
  async getEdges(): Promise<Array<Edge>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/edges`).then((response) => {
      const json = response.data.data as Array<EdgeJson>;
      return json.map((edgeJson) => new Edge(edgeJson));
    });
  }

  /**
   * Gets the Orgs child internal networks.
   * @returns {Promise<InternalNetwork[]>} promise that resolves with an array of child Internal networks
   */
  async getInternalNetworks(): Promise<Array<InternalNetwork>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/vdc-networks`).then((response) => {
      const json = response.data.data as Array<InternalNetworkJson>;
      return json.map((netJson) => new InternalNetwork(netJson));
    });
  }

  /**
   * Gets the Orgs child vApp networks.
   * @returns {Promise<VappNetwork[]>} promise that resolves with an array of child vApp networks
   */
  async getVappNetworks(): Promise<Array<VappNetwork>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/vapp-networks`).then((response) => {
      const json = response.data.data as Array<VappNetworkJson>;
      return json.map((netJson) => new VappNetwork(netJson));
    });
  }

}
