import { Entity } from './entity';
import { VappJson, BuildVappRequestJson } from './json/vapp';
import { Iland } from '../iland';
import { EntityType } from './json/entity-type';
import { VmJson } from './json/vm';
import { Vm } from './vm';
import { VdcAllocationModel, VdcJson } from './json/vdc';
import { Vapp } from './vapp';
import { Task } from './task';
import { TaskJson } from './json/task';

/**
 * Virtual Data Center.
 */
export class Vdc extends Entity {

  constructor(private _json: VdcJson) {
    super(_json);
  }

  /**
   * Gets a vDC by UUID.
   * @param uuid vDC UUID
   * @returns {Promise<Vdc>} promise that resolves with the vDC
   */
  static async getVdc(uuid: string): Promise<Vdc> {
    return Iland.getHttp().get(`/vdcs/${uuid}`).then((response) => {
      const json = response.data as VdcJson;
      return new Vdc(json);
    });
  }

  get entityType(): EntityType {
    return 'VDC';
  }

  get apiPrefix(): string {
    return '/vdcs';
  }

  /**
   * Indicates whether the vDC is enabled.
   * @returns {boolean} value
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Gets the vCenter HREF.
   * @returns {string} vCenter HREF
   */
  get vcenterMoref(): string {
    return this._json.vcenter_moref;
  }

  /**
   * Gets the vCenter name.
   * @returns {string} vCenter name
   */
  get vcenterName(): string {
    return this._json.vcenter_name;
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
   * Gets the vCenter instance UUID.
   * @returns {string} vCenter instance UUID
   */
  get vcenterInstanceUuid(): string {
    return this._json.vcenter_instance_uuid;
  }

  /**
   * Gets the vCenter HREF
   * @returns {string} vCenter HREF
   */
  get vcenterHref(): string {
    return this._json.vcenter_href;
  }

  /**
   * Gets the vDC allocation model
   * @returns {VdcAllocationModel} allocation model identifier
   */
  get allocationModel(): VdcAllocationModel {
    return this._json.allocation_model;
  }

  /**
   * Gets the amount of reserved CPU
   * @returns {number} reserved cpu
   */
  get reservedCpu(): number {
    return this._json.reserved_cpu;
  }

  /**
   * Gets the amount of reserved memory.
   * @returns {number} reserved memory
   */
  get reservedMemory(): number {
    return this._json.reserved_mem;
  }

  /**
   * Gets the disk limit within the vDc.
   * @returns {number} disk limit
   */
  get diskLimit(): number {
    return this._json.disk_limit;
  }

  /**
   * Gets the amount of CPU allocated
   * @returns {number} allocated CPU
   */
  get allocatedCpu(): number {
    return this._json.alloc_cpu;
  }

  /**
   * Gets the amount of memory allocated
   * @returns {number} allocated memory
   */
  get allocatedMemory(): number {
    return this._json.alloc_mem;
  }

  /**
   * Gets the maximum hardware version of the vDC.
   * @returns {string} max hardware version
   */
  get maxHardwareVersion(): string {
    return this._json.max_hdw_version;
  }

  /**
   * Gets the network quota.
   * @returns {number} network quota
   */
  get networkQuota(): number {
    return this._json.network_quota;
  }

  /**
   * Gets the number of networks that exist within this vDC.
   * @returns {number} used network count
   */
  get usedNetworkCount(): number {
    return this._json.used_network_count;
  }

  /**
   * Gets the datacenter location identifier.
   * @returns {string} location ID
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the UUID of the organization that the vDC is associated with.
   * @returns {string} Org UUID
   */
  get orgUuid(): string {
    return this._json.org_uuid;
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
   * @returns {VdcJson} the API json object
   */
  get json(): VdcJson {
    return Object.assign({}, this._json);
  }

  /**
   * Refreshes the vDC data by retrieving it from the API again.
   * @returns {Promise<Vdc>}
   */
  async refresh(): Promise<Vdc> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}`).then((response) => {
      this._json = response.data as VdcJson;
      return this;
    });
  }

  /**
   * Gets the vDCs child vApps.
   * @returns {Promise<Vapp[]>} promise that resolves with an array of child vApps
   */
  async getVapps(): Promise<Array<Vapp>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/vapps`).then((response) => {
      const json = response.data as Array<VappJson>;
      return json.map((vappJson) => new Vapp(vappJson));
    });
  }

  /**
   * Gets the vDCs child VMs.
   * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
   */
  async getVms(): Promise<Array<Vm>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/vms`).then((response) => {
      const json = response.data as Array<VmJson>;
      return json.map((vmJson) => new Vm(vmJson));
    });
  }

  /**
   * Create a scratch vApp into the vDC.
   * @param {BuildVappRequestJson} buildVappRequest
   * @returns {Promise<Task>} task promise
   */
  async buildVapp(buildVappRequest: BuildVappRequestJson): Promise<Task> {
    return Iland.getHttp().post(`/vdcs/${this.uuid}/build-vapp`, buildVappRequest).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

}
