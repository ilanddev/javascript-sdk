import { Entity } from './entity';
import { VappJson } from './json/vapp';
import { Iland } from '../iland';
import { EntityType } from './json/entity-type';
import { VmJson } from './json/vm';
import { Vm } from './vm';
import { VdcAllocationModel, VdcJson } from './json/vdc';
import { Vapp } from './vapp';

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
    return Iland.getHttp().get(`/vdc/${uuid}`).then(function(response) {
      let json = response.data as VdcJson;
      return new Vdc(json);
    });
  }

  getEntityType(): EntityType {
    return 'VDC';
  }

  /**
   * Indicates whether the vDC is enabled.
   * @returns {boolean} value
   */
  isEnabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Gets the vCenter HREF.
   * @returns {string} vCenter HREF
   */
  getVcenterMoref(): string {
    return this._json.vcenter_moref;
  }

  /**
   * Gets the vCenter name.
   * @returns {string} vCenter name
   */
  getVcenterName(): string {
    return this._json.vcenter_name;
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
   * Gets the vCenter instance UUID.
   * @returns {string} vCenter instance UUID
   */
  getVcenterInstanceUuid(): string {
    return this._json.vcenter_instance_uuid;
  }

  /**
   * Gets the vCenter HREF
   * @returns {string} vCenter HREF
   */
  getVcenterHref(): string {
    return this._json.vcenter_href;
  }

  /**
   * Gets the vDC allocation model
   * @returns {VdcAllocationModel} allocation model identifier
   */
  getAllocationModel(): VdcAllocationModel {
    return this._json.allocation_model;
  }

  /**
   * Gets the amount of reserved CPU
   * @returns {number} reserved cpu
   */
  getReservedCpu(): number {
    return this._json.reserved_cpu;
  }

  /**
   * Gets the amount of reserved memory.
   * @returns {number} reserved memory
   */
  getReservedMemory(): number {
    return this._json.reserved_mem;
  }

  /**
   * Gets the disk limit within the vDc.
   * @returns {number} disk limit
   */
  getDiskLimit(): number {
    return this._json.disk_limit;
  }

  /**
   * Gets the amount of CPU allocated
   * @returns {number} allocated CPU
   */
  getAllocatedCpu(): number {
    return this._json.alloc_cpu;
  }

  /**
   * Gets the amount of memory allocated
   * @returns {number} allocated memory
   */
  getAllocatedMemory(): number {
    return this._json.alloc_mem;
  }

  /**
   * Gets the maximum hardware version of the vDC.
   * @returns {string} max hardware version
   */
  getMaxHardwareVersion(): string {
    return this._json.max_hdw_version;
  }

  /**
   * Gets the network quota.
   * @returns {number} network quota
   */
  getNetworkQuota(): number {
    return this._json.network_quota;
  }

  /**
   * Gets the number of networks that exist within this vDC.
   * @returns {number} used network count
   */
  getUsedNetworkCount(): number {
    return this._json.used_network_count;
  }

  /**
   * Gets the datacenter location identifier.
   * @returns {string} location ID
   */
  getLocationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the UUID of the organization that the vDC is associated with.
   * @returns {string} Org UUID
   */
  getOrgUuid(): string {
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
  getJson(): VdcJson {
    return Object.assign({}, this._json);
  }

  /**
   * Refreshes the vDC data by retrieving it from the API again.
   * @returns {Promise<Vdc>}
   */
  async refresh(): Promise<Vdc> {
    let self = this;
    return Iland.getHttp().get(
        `/vdc/${self.getUuid()}`).then(function(response) {
          self._json = response.data as VdcJson;
          return self;
        });
  }

  /**
   * Gets the vDCs child vApps.
   * @returns {Promise<Vapp[]>} promise that resolves with an array of child vApps
   */
  async getVapps(): Promise<Array<Vapp>> {
    let self = this;
    return Iland.getHttp().get(
        `/vdc/${self.getUuid()}/vapps`).then(function(response) {
          let json = response.data as Array<VappJson>;
          return json.map((vappJson) => new Vapp(vappJson));
        });
  }

  /**
   * Gets the vDCs child VMs.
   * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
   */
  async getVms(): Promise<Array<Vm>> {
    let self = this;
    return Iland.getHttp().get(
        `/vdc/${self.getUuid()}/vms`).then(function(response) {
          let json = response.data as Array<VmJson>;
          return json.map((vmJson) => new Vm(vmJson));
        });
  }

}
