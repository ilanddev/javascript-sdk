import { Task } from './task';
import { Entity } from './entity';
import { Iland } from '../iland';
import { Vnic } from './vnic';
import { VmJson, VmStatus } from './json/vm';
import { VnicJson } from './json/vnic';
import { TaskJson } from './json/task';
import { EntityType } from './json/entity-type';
import { VirtualDiskJson } from './json/virtual-disk';
import { VirtualDisk } from './virtual-disk';
import { Metadata } from './metadata';
import { MetadataJson, MetadataType } from './json/metadata';
import { BackupRestorePoint } from './backup-restore-point';
import { BackupRestorePointJson } from './json/backup-restore-point';
import { Snapshot } from './snapshot';
import { SnapshotJson } from './json/snapshot';

/**
 * Virtual Machine.
 */
export class Vm extends Entity {

  constructor(private _apiVm: VmJson) {
    super(_apiVm);
  }

  /**
   * Gets a VM by UUID.
   * @param uuid VM UUID
   * @returns {Promise<Vm>} promise that resolves with the VM
   */
  static async getVm(uuid: string): Promise<Vm> {
    return Iland.getHttp().get(`/vm/${uuid}`).then(function(response) {
      let apiVm = response.data as VmJson;
      return new Vm(apiVm);
    });
  }

  getEntityType(): EntityType {
    return 'VM';
  }

  /**
   * Gets the VM's local ID.
   * @returns {string} the VM's local ID
   */
  getVmLocalId(): string {
    return this._apiVm.vm_local_id;
  }

  /**
   * Gets the VM's datastore reference.
   * @returns {string} datastore reference
   */
  getVimDatastoreRef(): string {
    return this._apiVm.vim_datastore_ref;
  }

  /**
   * Gets the UUID of the vDC that the VM belongs to.
   * @returns {string} vDC UUID
   */
  getVdcUuid(): string {
    return this._apiVm.vdc_uuid;
  }

  /**
   * Gets the HREF of the vCloud Director instance that this VM is associated with.
   * @returns {string} vCloud HREF
   */
  getVcloudHref(): string {
    return this._apiVm.vcloud_href;
  }

  /**
   * Gets the name of the vCenter server that the VM is associated with.
   * @returns {string} vCenter name
   */
  getVcenterName(): string {
    return this._apiVm.vcenter_name;
  }

  /**
   * Gets the VM'r vCenter reference.
   * @returns {string} vCenter reference
   */
  getVcenterMoRef(): string {
    return this._apiVm.vcenter_moref;
  }

  /**
   * Gets the UUID of the vCenter instance that the VM is associated with.
   * @returns {string} vCenter UUID
   */
  getVcenterInstanceUuid(): string {
    return this._apiVm.vcenter_instance_uuid;
  }

  /**
   * Gets the HREF of the vCenter instance that the VM is associated with.
   * @returns {string} vCenter HREF
   */
  getVcenterHref(): string {
    return this._apiVm.vcenter_href;
  }

  /**
   * Gets the UUID of the vApp that this VM belongs to.
   * @returns {string} vApp UUID
   */
  getVappUuid(): string {
    return this._apiVm.vapp_uuid;
  }

  /**
   * Gets the list of storage profiles that are available to this VM.
   * @returns {Array<string>} list of storage profile UUIDs
   */
  getStorageProfiles(): Array<string> {
    return this._apiVm.storage_profiles;
  }

  /**
   * Gets the power status of the VM.
   * @returns {VmPowerStatus} power status identifier
   */
  getPowerStatus(): VmPowerStatus {
    if (this._apiVm.deployed && this._apiVm.status === 'POWERED_OFF') {
      return 'PARTIALLY_POWERED_OFF';
    } else {
      return this._apiVm.status;
    }
  }

  /**
   * Gets the VM's operating system.
   * @returns {string} operating system
   */
  getOperatingSystem(): string {
    return this._apiVm.os;
  }

  /**
   * Gets the UUID of the Organization that the VM belongs to.
   * @returns {string} Org UUID
   */
  getOrgUuid(): string {
    return this._apiVm.org_uuid;
  }

  /**
   * Gets the datacenter location identifier for the VM.
   * @returns {string} datacenter location ID
   */
  getLocationId(): string {
    return this._apiVm.location_id;
  }

  /**
   * Gets the name of the media that is currently inserted in the VM.
   * @returns {string} the name of the inserted media or null if no media is currently inserted
   */
  getInsertedMediaName(): string | null {
    return this._apiVm.inserted_media_name && this._apiVm.inserted_media_name.length > 0 ?
        this._apiVm.inserted_media_name : null;
  }

  /**
   * Indicates whether there is currently a media inserted in the VM.
   * @returns {boolean} value
   */
  isMediaInserted(): boolean {
    return this._apiVm.media_inserted;
  }

  /**
   * Gets the VM's hardware version.
   * @returns {string} hardware version
   */
  getHardwareVersion(): string {
    return this._apiVm.hardware_version;
  }

  /**
   * Gets the VM's description.
   * @returns {string} description
   */
  getDescription(): string {
    return this._apiVm.description;
  }

  /**
   * Indicates whether the VM is deployed.
   * @returns {boolean} value
   */
  isDeployed(): boolean {
    return this._apiVm.deployed;
  }

  /**
   * Gets the date that the VM was created.
   * @returns {Date} creation date
   */
  getCreatedDate(): Date|null {
    return this._apiVm.created_date !== null ? new Date(this._apiVm.created_date) : null;
  }

  /**
   * Gets the number of CPUs for the VM.
   * @returns {number} number of CPUs
   */
  getNumberOfCpus(): number {
    return this._apiVm.cpus_number;
  }

  /**
   * Gets the number of cores per CPU socket.
   * @returns {number} cores per CPU socket
   */
  getCoresPerSocket(): number {
    return this._apiVm.cores_per_socket;
  }

  /**
   * Gets the VM's configured memory in MB.
   * @returns {number} the VM's configured memory in MB.
   */
  getMemorySize(): number {
    return this._apiVm.memory_size;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._apiVm, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VmJson} the API VM object
   */
  getJson(): VmJson {
    return Object.assign({}, this._apiVm);
  }

  /**
   * Refreshes the VM data by retrieving it from the API again.
   * @returns {Promise<Vm>}
   */
  async refresh(): Promise<Vm> {
    let self = this;
    return Iland.getHttp().get(
        `/vm/${self.getUuid()}`).then(function(response) {
          self._apiVm = response.data as VmJson;
          return self;
        });
  }

  /**
   * Gets the list of VNICs for this VM.
   * @returns {Promise<Vnic[]>}
   */
  async getVnics(): Promise<Array<Vnic>> {
    let self = this;
    return Iland.getHttp().get(
        `/vm/${self.getUuid()}/vnics`).then(function(response) {
          let apiVnics = response.data as Array<VnicJson>;
          return apiVnics.map((apiVnic) => new Vnic(apiVnic));
        });
  }

  /**
   * Updates the VM's description.
   * @param description the new description
   * @returns {Promise<Task>} task promise
   */
  async updateDescription(description: string): Promise<Task> {
    let self = this;
    let spec: VmUpdateDescriptionJson = {
      description: description
    };
    return Iland.getHttp().put(`/vm/${self.getUuid()}/description`, spec)
                .then(function(response) {
                  let apiTask = response.data as TaskJson;
                  return new Task(apiTask);
                });
  }

  /**
   * Updates the VM's name.
   * @param newName the new name
   * @returns {Promise<Task>} task promise
   */
  async updateName(newName: string): Promise<Task> {
    let self = this;
    let json: VmUpdateNameJson = {
      name: newName
    };
    return Iland.getHttp().put(`/vm/${self.getUuid()}/name`, json)
                .then(function(response) {
                  let apiTask = response.data as TaskJson;
                  return new Task(apiTask);
                });
  }

  /**
   * Edit the memory size of the VM.
   * @param memorySizeMb {number} the new memory size in MB
   * @returns {Promise<Task>} task promise
   */
  async updateMemorySize(memorySizeMb: number): Promise<Task> {
    let self = this;
    let spec: VmMemoryUpdateJson = {
      memory_size: String(memorySizeMb)
    };
    return Iland.getHttp().put(`/vm/${self.getUuid()}/mem`, spec)
                .then(function(response) {
                  let apiTask = response.data as TaskJson;
                  return new Task(apiTask);
                });
  }

  /**
   * Edit the number of CPUs.
   * @param spec {VmCpuUpdateJson} specifying new number of CPUs
   * @returns {Promise<Task>} task promise
   */
  async updateNumberOfCpus(spec: VmCpuUpdateJson): Promise<Task> {
    let self = this;
    return Iland.getHttp().put(`/vm/${self.getUuid()}/cpu`, spec)
                .then(function(response) {
                  let apiTask = response.data as TaskJson;
                  return new Task(apiTask);
                });
  }

  /**
   * Gets the VM's virtual disks.
   * @returns {Promise<VirtualDisk[]>} array of virtual disks
   */
  async getVirtualDisks(): Promise<Array<VirtualDisk>> {
    let self = this;
    return Iland.getHttp().get(`/vm/${self.getUuid()}/virtual-disks`).then(function(response) {
      let apiDisks = response.data as Array<VirtualDiskJson>;
      return apiDisks.map((apiDisk) => new VirtualDisk(apiDisk));
    });
  }

  /**
   * Update the VM's virtual disks.
   * @param {Array<VirtualDiskJson>} disksJson array of specs for new disks
   * @returns {Promise<Task>} task promise
   */
  async updateVirtualDisks(disksJson: Array<VirtualDiskJson>): Promise<Task> {
    let self = this;
    return Iland.getHttp().put(`/vm/${self.getUuid()}/virtual-disks`, disksJson)
                .then(function(response) {
                  let apiTask = response.data as TaskJson;
                  return new Task(apiTask);
                });
  }

  /**
   * Update a virtual disk that is attached to this VM.
   * @param {VirtualDiskJson} diskJson updated specification for the disk
   * @returns {Promise<Task>} task promise
   */
  async updateVirtualDisk(diskJson: VirtualDiskJson): Promise<Task> {
    let self = this;
    return Iland.getHttp().put(`/vm/${self.getUuid()}/virtual-disk`, diskJson)
                .then(function(response) {
                  let apiTask = response.data as TaskJson;
                  return new Task(apiTask);
                });
  }

  /**
   * Create a new virtual disk for this VM.
   * @param {VirtualDiskJson} diskJson spec for the new disk
   * @returns {Promise<Task>} task promise
   */
  async createVirtualDisk(diskJson: VirtualDiskJson): Promise<Task> {
    let self = this;
    return Iland.getHttp().post(`/vm/${self.getUuid()}/virtual-disk`, diskJson)
                .then(function(response) {
                  let apiTask = response.data as TaskJson;
                  return new Task(apiTask);
                });
  }

  /**
   * Delete a virtual disk.
   * @param {string} name the name of the disk to delete
   * @returns {Promise<Task>} task promise
   */
  async deleteVirtualDisk(name: string): Promise<Task> {
    let self = this;
    return Iland.getHttp().delete(`/vm/${self.getUuid()}/disks/${name}`)
                .then(function(response) {
                  let apiTask = response.data as TaskJson;
                  return new Task(apiTask);
                });
  }

  /**
   * Gets the VM's metadata.
   * @returns {Promise<Metadata<MetadataType>[]>}
   */
  async getMetadata(): Promise<Array<Metadata<MetadataType>>> {
    let self = this;
    return Iland.getHttp().get(`/vm/${self.getUuid()}/metadata`).then(function(response) {
      let jsonMetadata = response.data as Array<MetadataJson<MetadataType>>;
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
   * Updates the VM's metadata.
   * @param {Array<MetadataJson<MetadataType>>} metadataJson the new array of metadata
   * @returns {Promise<Task>} task promise
   */
  async updateMetadata(metadataJson: Array<MetadataJson<MetadataType>>): Promise<Task> {
    let self = this;
    return Iland.getHttp().put(`/vm/${self.getUuid()}/metadata`, metadataJson).then(function(response) {
      let apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Deletes a metadata entry.
   * @param {string} metadataKey the key of the metadata entry to delete
   * @returns {Promise<Task>} task promise
   */
  async deleteMetadata(metadataKey: string): Promise<Task> {
    let self = this;
    return Iland.getHttp().delete(`/vm/${self.getUuid()}/metadata/${metadataKey}`).then(function(response) {
      let apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Deletes this VM.
   * @returns {Promise<Task>} task promise
   */
  async delete(): Promise<Task> {
    let self = this;
    return Iland.getHttp().delete(`/vm/${self.getUuid()}`).then(function(response) {
      let apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Performs a power operation on the VM.
   * @param {VmPowerOperation} type the type of power operation to perform
   * @param {boolean} forceGuestCustomization whether to force guest customization (only applicable when powering on)
   * @returns {Promise<Task>} task promise
   */
  async performPowerOperation(type: VmPowerOperation, forceGuestCustomization?: boolean): Promise<Task> {
    let self = this;
    let config = undefined;
    if (type === 'poweron' && forceGuestCustomization) {
      config = {
        params: {
          forceGuestCustomization: forceGuestCustomization
        }
      };
    }
    return Iland.getHttp().post(`/vm/${self.getUuid()}/${type}`, undefined, config).then(function(response) {
      let apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Powers on the VM.
   * @param {boolean} forceGuestCustomization whether to force guest customization
   * @returns {Promise<Task>} task promise
   */
  async powerOn(forceGuestCustomization?: boolean): Promise<Task> {
    return this.performPowerOperation('poweron', forceGuestCustomization);
  }

  /**
   * Powers off the VM.
   * @returns {Promise<Task>} task promise
   */
  async powerOff(): Promise<Task> {
    return this.performPowerOperation('poweroff');
  }

  /**
   * Suspends VM.
   * @returns {Promise<Task>} task promise
   */
  async suspend(): Promise<Task> {
    return this.performPowerOperation('suspend');
  }

  /**
   * Shuts down the VMs guest operating system.
   * @returns {Promise<Task>} task promise
   */
  async shutdownGuestOs(): Promise<Task> {
    return this.performPowerOperation('shutdown');
  }

  /**
   * Performs a hard reset power operation.
   * @returns {Promise<Task>} task promise
   */
  async reset(): Promise<Task> {
    return this.performPowerOperation('reset');
  }

  /**
   * Requests that the guest OS restart.
   * @returns {Promise<Task>} task promise
   */
  async rebootGuestOs(): Promise<Task> {
    return this.performPowerOperation('reboot');
  }

  /**
   * Gets the VMs available backup restore points.
   * @returns {Promise<BackupRestorePoint[]>} promise that resolves with the list of backup restore points
   */
  async getBackupRestorePoints(): Promise<Array<BackupRestorePoint>> {
    let self = this;
    return Iland.getHttp().get(`/vm/${self.getUuid()}/backups`).then(function(response) {
      let restorePointsJson = response.data as Array<BackupRestorePointJson>;
      return restorePointsJson.map((restorePointJson) => new BackupRestorePoint(restorePointJson));
    });
  }

  /**
   * Restores a backup of the VM.
   * @param {Date} timestamp the timestamp of the restore point to be restored
   * @returns {Promise<Task>} task promise
   */
  async restoreBackup(timestamp: Date): Promise<Task> {
    let self = this;
    const json: VmRestoreBackupJson = {
      time: timestamp.getTime()
    };
    return Iland.getHttp().post(`/vm/${self.getUuid()}/restore`, json).then(function(response) {
      let apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Gets the VMs snapshot details.
   * @returns {Promise<Snapshot>} promise that resolves with the current snapshot details
   * @throws {ApiError} if the VM doesn't currently have a snapshot
   */
  async getSnapshot(): Promise<Snapshot> {
    let self = this;
    return Iland.getHttp().get(`/vm/${self.getUuid()}/snapshot`).then(function(response) {
      let json = response.data as SnapshotJson;
      return new Snapshot(json);
    });
  }

  /**
   * Creates a snapshot of the VM.
   * @param {VmCreateSnapshotJson} options the snapshot creation options
   * @returns {Promise<Task>} task promise
   */
  async createSnapshot(options: VmCreateSnapshotJson): Promise<Task> {
    let self = this;
    return Iland.getHttp().post(`/vm/${self.getUuid()}/snapshot`, options).then(function(response) {
      let apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Restore the VMs snapshot.
   * @returns {Promise<Task>} task promise
   */
  async restoreSnapshot(): Promise<Task> {
    let self = this;
    return Iland.getHttp().post(`/vm/${self.getUuid()}/snapshot/restore`).then(function(response) {
      let apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Deletes the VMs snapshot.
   * @returns {Promise<Task>} task promise
   */
  async deleteSnapshot(): Promise<Task> {
    let self = this;
    return Iland.getHttp().delete(`/vm/${self.getUuid()}/snapshot`).then(function(response) {
      let apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Updates the VM's virtual hardware to the latest version available.
   * @returns {Promise<Task>} task promise
   */
  async updateVirtualHardwareVersion(): Promise<Task> {
    let self = this;
    return Iland.getHttp().put(`/vm/${self.getUuid()}/virtual-hardware-version`).then(function(response) {
      let apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

}

/**
 * Specifiation for VM snapshot creation request.
 */
export interface VmCreateSnapshotJson {
  memory: boolean;
  quiesce: boolean;
  name: string;
  description: string;
}

/**
 * Specification for VM memory configuration update request.
 */
export interface VmMemoryUpdateJson {
  memory_size: string;
}

/**
 * Specification for VM description update request.
 */
export interface VmUpdateDescriptionJson {
  description: string;
}

/**
 * Specification for VM name update request.
 */
export interface VmUpdateNameJson {
  name: string;
}

/**
 * Specification for VM CPU configuration update request.
 */
export interface VmCpuUpdateJson {
  cpus_number: number;
  cores_per_socket?: number;
}

/**
 * Specification for VM backup restore request.
 */
export interface VmRestoreBackupJson {
  time: number;
}

/**
 * Enumeration of the available power operations for a VM.
 */
export type VmPowerOperation = 'poweron' | 'poweroff' | 'suspend' | 'shutdown' | 'reset' | 'reboot';

/**
 * Enumeration of possible VM power statuses.
 */
export type VmPowerStatus = VmStatus |
    'PARTIALLY_POWERED_OFF';
