import { Task } from './task';
import { Entity } from './entity';
import { Iland } from '../iland';
import { Vnic } from './vnic';
import {
  OperatingSystem, VmInsertMediaRequestJson, VmJson, VmMemoryUpdateRequestJson, VmPowerOperation,
  VmRelocationRequestJson, VmRestoreBackupRequestJson, VmStatus, VmUpdateDescriptionRequestJson, VmUpdateNameRequestJson
} from './json/vm';
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
import { ScreenTicket } from './screen-ticket';
import { ScreenTicketJson } from './json/screen-ticket';
import { MksScreenTicket } from './mks-screen-ticket';
import { MksScreenTicketJson } from './json/mks-screen-ticket';
import { Bill } from './bill';
import { BillJson } from './json/bill';
import { BillingSummaryJson } from './json/billing-summary';
import { BillingSummary } from './billing-summary';
import { VmCreateSnapshotRequest } from './vm-create-snapshot-request';
import { VmCpuUpdateRequest } from './vm-cpu-update-request';

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
    return Iland.getHttp().get(`/vm/${uuid}`).then((response) => {
      const apiVm = response.data as VmJson;
      return new Vm(apiVm);
    });
  }

  get entityType(): EntityType {
    return 'VM';
  }

  /**
   * Gets the VM's local ID.
   * @returns {string} the VM's local ID
   */
  get vmLocalId(): string {
    return this._apiVm.vm_local_id;
  }

  /**
   * Gets the VM's datastore reference.
   * @returns {string} datastore reference
   */
  get vimDatastoreRef(): string {
    return this._apiVm.vim_datastore_ref;
  }

  /**
   * Gets the UUID of the vDC that the VM belongs to.
   * @returns {string} vDC UUID
   */
  get vdcUuid(): string {
    return this._apiVm.vdc_uuid;
  }

  /**
   * Gets the HREF of the vCloud Director instance that this VM is associated with.
   * @returns {string} vCloud HREF
   */
  get vcloudHref(): string {
    return this._apiVm.vcloud_href;
  }

  /**
   * Gets the name of the vCenter server that the VM is associated with.
   * @returns {string} vCenter name
   */
  get vcenterName(): string {
    return this._apiVm.vcenter_name;
  }

  /**
   * Gets the VM'r vCenter reference.
   * @returns {string} vCenter reference
   */
  get vcenterMoRef(): string {
    return this._apiVm.vcenter_moref;
  }

  /**
   * Gets the UUID of the vCenter instance that the VM is associated with.
   * @returns {string} vCenter UUID
   */
  get vcenterInstanceUuid(): string {
    return this._apiVm.vcenter_instance_uuid;
  }

  /**
   * Gets the HREF of the vCenter instance that the VM is associated with.
   * @returns {string} vCenter HREF
   */
  get vcenterHref(): string {
    return this._apiVm.vcenter_href;
  }

  /**
   * Gets the UUID of the vApp that this VM belongs to.
   * @returns {string} vApp UUID
   */
  get vappUuid(): string {
    return this._apiVm.vapp_uuid;
  }

  /**
   * Gets the list of storage profiles that are available to this VM.
   * @returns {Array<string>} list of storage profile UUIDs
   */
  get storageProfiles(): Array<string> {
    return this._apiVm.storage_profiles;
  }

  /**
   * Gets the power status of the VM.
   * @returns {VmPowerStatus} power status identifier
   */
  get powerStatus(): VmPowerStatus {
    if (this._apiVm.deployed && this._apiVm.status === 'POWERED_OFF') {
      return 'PARTIALLY_POWERED_OFF';
    } else {
      return this._apiVm.status;
    }
  }

  /**
   * Gets the VM's operating system.
   * @returns {OperatingSystem} operating system
   */
  get operatingSystem(): OperatingSystem {
    return this._apiVm.os;
  }

  /**
   * Gets the UUID of the Organization that the VM belongs to.
   * @returns {string} Org UUID
   */
  get orgUuid(): string {
    return this._apiVm.org_uuid;
  }

  /**
   * Gets the datacenter location identifier for the VM.
   * @returns {string} datacenter location ID
   */
  get locationId(): string {
    return this._apiVm.location_id;
  }

  /**
   * Gets the name of the media that is currently inserted in the VM.
   * @returns {string} the name of the inserted media or null if no media is currently inserted
   */
  get insertedMediaName(): string | null {
    return this._apiVm.inserted_media_name && this._apiVm.inserted_media_name.length > 0 ?
        this._apiVm.inserted_media_name : null;
  }

  /**
   * Indicates whether there is currently a media inserted in the VM.
   * @returns {boolean} value
   */
  get mediaInserted(): boolean {
    return this._apiVm.media_inserted;
  }

  /**
   * Gets the VM's hardware version.
   * @returns {string} hardware version
   */
  get hardwareVersion(): string {
    return this._apiVm.hardware_version;
  }

  /**
   * Gets the VM's description.
   * @returns {string} description
   */
  get description(): string {
    return this._apiVm.description;
  }

  /**
   * Indicates whether the VM is deployed.
   * @returns {boolean} value
   */
  get deployed(): boolean {
    return this._apiVm.deployed;
  }

  /**
   * Gets the date that the VM was created.
   * @returns {Date} creation date
   */
  get createdDate(): Date|null {
    return this._apiVm.created_date !== null ? new Date(this._apiVm.created_date) : null;
  }

  /**
   * Gets the number of CPUs for the VM.
   * @returns {number} number of CPUs
   */
  get numberOfCpus(): number {
    return this._apiVm.cpus_number;
  }

  /**
   * Gets the number of cores per CPU socket.
   * @returns {number} cores per CPU socket
   */
  get coresPerSocket(): number {
    return this._apiVm.cores_per_socket;
  }

  /**
   * Gets the VM's configured memory in MB.
   * @returns {number} the VM's configured memory in MB.
   */
  get memorySize(): number {
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
  get json(): VmJson {
    return Object.assign({}, this._apiVm);
  }

  /**
   * Refreshes the VM data by retrieving it from the API again.
   * @returns {Promise<Vm>}
   */
  async refresh(): Promise<Vm> {
    return Iland.getHttp().get(`/vm/${this.uuid}`).then((response) => {
      this._apiVm = response.data as VmJson;
      return this;
    });
  }

  /**
   * Gets the list of VNICs for this VM.
   * @returns {Promise<Vnic[]>}
   */
  async getVnics(): Promise<Array<Vnic>> {
    return Iland.getHttp().get(`/vm/${this.uuid}/vnics`).then((response) => {
      const apiVnics = response.data as Array<VnicJson>;
      return apiVnics.map((apiVnic) => new Vnic(apiVnic));
    });
  }

  /**
   * Updates the VM's description.
   * @param description the new description
   * @returns {Promise<Task>} task promise
   */
  async updateDescription(description: string): Promise<Task> {
    const spec: VmUpdateDescriptionRequestJson = {
      description: description
    };
    return Iland.getHttp().put(`/vm/${this.uuid}/description`, spec).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Updates the VM's name.
   * @param newName the new name
   * @returns {Promise<Task>} task promise
   */
  async updateName(newName: string): Promise<Task> {
    const json: VmUpdateNameRequestJson = {
      name: newName
    };
    return Iland.getHttp().put(`/vm/${this.uuid}/name`, json).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Edit the memory size of the VM.
   * @param memorySizeMb {number} the new memory size in MB
   * @returns {Promise<Task>} task promise
   */
  async updateMemorySize(memorySizeMb: number): Promise<Task> {
    const spec: VmMemoryUpdateRequestJson = {
      memory_size: String(memorySizeMb)
    };
    return Iland.getHttp().put(`/vm/${this.uuid}/mem`, spec).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Edit the number of CPUs.
   * @param request {VmCpuUpdateRequest} specifying new number of CPUs
   * @returns {Promise<Task>} task promise
   */
  async updateNumberOfCpus(request: VmCpuUpdateRequest): Promise<Task> {
    return Iland.getHttp().put(`/vm/${this.uuid}/cpu`, request.json).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Gets the VM's virtual disks.
   * @returns {Promise<VirtualDisk[]>} array of virtual disks
   */
  async getVirtualDisks(): Promise<Array<VirtualDisk>> {
    return Iland.getHttp().get(`/vm/${this.uuid}/virtual-disks`).then((response) => {
      const apiDisks = response.data as Array<VirtualDiskJson>;
      return apiDisks.map((apiDisk) => new VirtualDisk(apiDisk));
    });
  }

  /**
   * Update the VM's virtual disks.
   * @param {Array<VirtualDiskJson>} disksJson array of specs for new disks
   * @returns {Promise<Task>} task promise
   */
  async updateVirtualDisks(disksJson: Array<VirtualDiskJson>): Promise<Task> {
    return Iland.getHttp().put(`/vm/${this.uuid}/virtual-disks`, disksJson).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Update a virtual disk that is attached to this VM.
   * @param {VirtualDiskJson} diskJson updated specification for the disk
   * @returns {Promise<Task>} task promise
   */
  async updateVirtualDisk(diskJson: VirtualDiskJson): Promise<Task> {
    return Iland.getHttp().put(`/vm/${this.uuid}/virtual-disk`, diskJson).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Create a new virtual disk for this VM.
   * @param {VirtualDiskJson} diskJson spec for the new disk
   * @returns {Promise<Task>} task promise
   */
  async createVirtualDisk(diskJson: VirtualDiskJson): Promise<Task> {
    return Iland.getHttp().post(`/vm/${this.uuid}/virtual-disk`, diskJson).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Delete a virtual disk.
   * @param {string} name the name of the disk to delete
   * @returns {Promise<Task>} task promise
   */
  async deleteVirtualDisk(name: string): Promise<Task> {
    return Iland.getHttp().delete(`/vm/${this.uuid}/disks/${name}`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Gets the VM's metadata.
   * @returns {Promise<Metadata<MetadataType>[]>}
   */
  async getMetadata(): Promise<Array<Metadata<MetadataType>>> {
    return Iland.getHttp().get(`/vm/${this.uuid}/metadata`).then((response) => {
      const jsonMetadata = response.data as Array<MetadataJson<MetadataType>>;
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
    return Iland.getHttp().put(`/vm/${this.uuid}/metadata`, metadataJson).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Deletes a metadata entry.
   * @param {string} metadataKey the key of the metadata entry to delete
   * @returns {Promise<Task>} task promise
   */
  async deleteMetadata(metadataKey: string): Promise<Task> {
    return Iland.getHttp().delete(`/vm/${this.uuid}/metadata/${metadataKey}`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Deletes this VM.
   * @returns {Promise<Task>} task promise
   */
  async delete(): Promise<Task> {
    return Iland.getHttp().delete(`/vm/${this.uuid}`).then((response) => {
      const apiTask = response.data as TaskJson;
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
    let config = undefined;
    if (type === 'poweron' && forceGuestCustomization) {
      config = {
        params: {
          forceGuestCustomization: forceGuestCustomization
        }
      };
    }
    return Iland.getHttp().post(`/vm/${this.uuid}/${type}`, undefined, config).then((response) => {
      const apiTask = response.data as TaskJson;
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
    return Iland.getHttp().get(`/vm/${this.uuid}/backups`).then((response) => {
      const restorePointsJson = response.data as Array<BackupRestorePointJson>;
      return restorePointsJson.map((restorePointJson) => new BackupRestorePoint(restorePointJson));
    });
  }

  /**
   * Restores a backup of the VM.
   * @param {Date} timestamp the timestamp of the restore point to be restored
   * @returns {Promise<Task>} task promise
   */
  async restoreBackup(timestamp: Date): Promise<Task> {
    const json: VmRestoreBackupRequestJson = {
      time: timestamp.getTime()
    };
    return Iland.getHttp().post(`/vm/${this.uuid}/restore`, json).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Gets the VMs snapshot details.
   * @returns {Promise<Snapshot>} promise that resolves with the current snapshot details
   * @throws {ApiError} as NotFoundError if the VM doesn't currently have a snapshot
   */
  async getSnapshot(): Promise<Snapshot> {
    return Iland.getHttp().get(`/vm/${this.uuid}/snapshot`).then((response) => {
      const json = response.data as SnapshotJson;
      return new Snapshot(json);
    });
  }

  /**
   * Creates a snapshot of the VM.
   * @param {VmCreateSnapshotRequest} options the snapshot creation options
   * @returns {Promise<Task>} task promise
   */
  async createSnapshot(options: VmCreateSnapshotRequest): Promise<Task> {
    return Iland.getHttp().post(`/vm/${this.uuid}/snapshot`, options.json).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Restore the VMs snapshot.
   * @returns {Promise<Task>} task promise
   */
  async restoreSnapshot(): Promise<Task> {
    return Iland.getHttp().post(`/vm/${this.uuid}/snapshot/restore`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Deletes the VMs snapshot.
   * @returns {Promise<Task>} task promise
   */
  async deleteSnapshot(): Promise<Task> {
    return Iland.getHttp().delete(`/vm/${this.uuid}/snapshot`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Updates the VM's virtual hardware to the latest version available.
   * @returns {Promise<Task>} task promise
   */
  async updateVirtualHardwareVersion(): Promise<Task> {
    return Iland.getHttp().put(`/vm/${this.uuid}/virtual-hardware-version`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Gets the VMs screen ticket for a remote console connection.
   * @returns {Promise<ScreenTicket>} promise that resolves with the screen ticket
   */
  async getScreenTicket(): Promise<ScreenTicket> {
    return Iland.getHttp().get(`/vm/${this.uuid}/screen-ticket`).then((response) => {
      const json = response.data as ScreenTicketJson;
      return new ScreenTicket(json);
    });
  }

  /**
   * Gets the VMs MKS screen ticket for a remote console connection.
   * @returns {Promise<MksScreenTicket>} promise that resolves with the MKS screen ticket
   */
  async getMksScreenTicket(): Promise<MksScreenTicket> {
    return Iland.getHttp().get(`/vm/${this.uuid}/mks-screen-ticket`).then((response) => {
      const json = response.data as MksScreenTicketJson;
      return new MksScreenTicket(json);
    });
  }

  /**
   * Gets the bill for the VM for the specified month and year. Month and year default to current month and year if left
   * unspecified.
   * @returns {Promise<Bill>} promise that resolves with the Bill
   */
  async getBill(month?: number, year?: number): Promise<Bill> {
    return Iland.getHttp().get(`/vm/${this.uuid}/bill`, {
      params: {
        month: month,
        year: year
      }
    }).then((response) => {
      const json = response.data as BillJson;
      return new Bill(json);
    });
  }

  /**
   * Gets the current billing summary for the VM.
   * @returns {Promise<BillingSummary>} promise that resolves with the current billing summary
   */
  async getCurrentBillingSummary(): Promise<BillingSummary> {
    return Iland.getHttp().get(`/vm/${this.uuid}/billing/current`).then((response) => {
      const json = response.data as BillingSummaryJson;
      return new BillingSummary(json);
    });
  }

  /**
   * Inserts a specified media into the VM.
   * @param {string} mediaUuid the UUID of the media to insert
   * @returns {Promise<Task>} task promise
   */
  async insertMedia(mediaUuid: string): Promise<Task> {
    const json: VmInsertMediaRequestJson = {
      media: mediaUuid
    };
    return Iland.getHttp().post(`/vm/${this.uuid}/media/insert`, json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Ejects any media from the VM.
   * @returns {Promise<Task>} task promise
   */
  async ejectMedia(): Promise<Task> {
    return Iland.getHttp().post(`/vm/${this.uuid}/media/eject`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Move the VM to a different storage profile.
   * @returns {Promise<Task>} task promise
   */
  async relocate(storageProfileUuid: string): Promise<Task> {
    const json: VmRelocationRequestJson = {
      storage_profile: storageProfileUuid
    };
    return Iland.getHttp().put(`/vm/${this.uuid}/storage-profile`, json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

}

/**
 * Enumeration of possible VM power statuses.
 */
export type VmPowerStatus = VmStatus |
    'PARTIALLY_POWERED_OFF';
