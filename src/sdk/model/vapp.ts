import { Entity } from './entity';
import { VappJson, VappStatus } from './json/vapp';
import { Iland } from '../iland';
import { EntityType } from './json/entity-type';
import { BuildVmRequestJson, VmJson } from './json/vm';
import { Vm } from './vm';
import { VappNetwork } from './vapp-network';
import { VappNetworkJson } from './json/vapp-network';
import { Task } from './task';
import { TaskJson } from './json/task';

/**
 * Virtual Application.
 */
export class Vapp extends Entity {

  constructor(private _json: VappJson) {
    super(_json);
  }

  /**
   * Gets a vApp by UUID.
   * @param uuid vApp UUID
   * @returns {Promise<Vapp>} promise that resolves with the vApp
   */
  static async getVapp(uuid: string): Promise<Vapp> {
    return Iland.getHttp().get(`/vapps/${uuid}`).then((response) => {
      const json = response.data as VappJson;
      return new Vapp(json);
    });
  }

  get entityType(): EntityType {
    return 'VAPP';
  }

  /**
   * Indicates whether this vApp is currently deployed.
   * @returns {boolean} value
   */
  get deployed(): boolean {
    return this._json.deployed;
  }

  /**
   * Gets the vApps current power status.
   * @returns {VappPowerStatus} power status
   */
  get powerStatus(): VappPowerStatus {
    if (this._json.deployed && this._json.status === 'POWERED_OFF') {
      return 'PARTIALLY_POWERED_OFF';
    } else {
      return this._json.status;
    }
  }

  /**
   * Gets the storage profiles that are associated with this VM
   * @returns {Array<string>} array of storage profile UUIDs
   */
  get storageProfiles(): Array<string> {
    return this._json.storage_profiles;
  }

  /**
   * Gets the runtime lease setting, in seconds.
   * @returns {number} runtime lease
   */
  get runtimeLease(): number {
    return this._json.runtime_lease;
  }

  /**
   * Gets the storage lease setting, in seconds.
   * @returns {number} storage lease
   */
  get storageLease(): number {
    return this._json.storage_lease;
  }

  /**
   * Gets the expiration date of the runtime lease, if one is currently active.
   * @returns {Date} runtime lease expiration date
   */
  get runtimeLeaseExpirationDate(): Date | null {
    return this._json.runtime_expire === null ? null : new Date(this._json.runtime_expire);
  }

  /**
   * Gets the expiration date of the storage lease, if one is currently active.
   * @returns {Date} storage lease expiration date
   */
  get storageLeaseExpirationDate(): Date | null {
    return this._json.storage_expire === null ? null : new Date(this._json.storage_expire);
  }

  /**
   * Gets the UUID of the vDC that this vApp is associated with.
   * @returns {string} vDC UUID
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Gets the UUID of the Org that this vApp is associated with.
   * @returns {string} org UUID
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Gets the datacenter location identifier for the vApp.
   * @returns {string} datacenter location ID
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the vApps description.
   * @returns {string} description
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Gets the vCloud HREF of the vApp.
   * @returns {string} vCloud HREF
   */
  get vcloudHref(): string {
    return this._json.vcloud_href;
  }

  /**
   * Gets the date that this vApp was created.
   * @returns {Date} creation date
   */
  get creationDate(): Date {
    return new Date(this._json.created_date);
  }

  /**
   * Indicates whether this vApp is currently in the expired items bin.
   * @returns {boolean} value
   */
  get expired(): boolean {
    return this._json.is_expired;
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
   * @returns {VappJson} the API json object
   */
  get json(): VappJson {
    return Object.assign({}, this._json);
  }

  /**
   * Refreshes the vApp data by retrieving it from the API again.
   * @returns {Promise<Vapp>}
   */
  async refresh(): Promise<Vapp> {
    return Iland.getHttp().get(`/vapps/${this.uuid}`).then((response) => {
      this._json = response.data as VappJson;
      return this;
    });
  }

  /**
   * Gets the vApps child VMs.
   * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
   */
  async getVms(): Promise<Array<Vm>> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/vms`).then((response) => {
      const json = response.data as Array<VmJson>;
      return json.map((vmJson) => new Vm(vmJson));
    });
  }

  /**
   * Gets the vApps child vApp Networks.
   * @returns {Promise<VappNetwork[]>} promise that resolves with an array of child vApp Networks
   */
  async getVappNetworks(): Promise<Array<VappNetwork>> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/networks`).then((response) => {
      const json = response.data as Array<VappNetworkJson>;
      return json.map((vappNetJson) => new VappNetwork(vappNetJson));
    });
  }

  /**
   * Creates VMs in vApp.
   * @param {Array} buildVmRequestList
   * @returns {Promise<Task>} task response
   */
  async buildVms(buildVmRequestList: Array<BuildVmRequestJson>): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/add-vms`, buildVmRequestList).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

}

/**
 * Enumeration of possible vApp power statuses.
 */
export type VappPowerStatus = VappStatus |
    'PARTIALLY_POWERED_OFF';
