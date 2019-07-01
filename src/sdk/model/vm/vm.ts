import { applyMixins } from 'rxjs/internal-compatibility';
import { Task } from '../task/task';
import { Entity } from '../common/entity';
import { Iland } from '../../iland';
import { Vnic } from './vnic/vnic';

import { VirtualDisk } from './virtual-disk/virtual-disk';
import { Metadata } from '../common/metadata/metadata';
import { BackupRestorePoint } from './backup-restore-point/backup-restore-point';
import { Snapshot } from '../common/snapshot/snapshot';
import { ScreenTicket } from './screen-ticket/screen-ticket';
import { MksScreenTicket } from './screen-ticket/mks-screen-ticket';
import { Bill } from '../common/billing/bill';
import { SnapshotCreateRequest } from '../common/snapshot/snapshot-create-request';
import {
  VmInsertMediaRequestJson,
  VmJson,
  VmRelocationRequestJson, VmRestoreBackupIntoVAppRequestJson,
  VmRestoreBackupRequestJson,
  VmUpdateDescriptionRequestJson,
  VmUpdateNameRequestJson
} from './__json__/vm-json';
import { EntityType } from '../common/__json__/entity-type';
import { OperatingSystem } from './__json__/operating-system-type';
import { VnicJson } from './vnic/__json__/vnic-json';
import { TaskJson } from '../task/__json__/task-json';
import { VirtualDiskJson } from './virtual-disk/__json__/virtual-disk-json';
import { MetadataType } from '../common/metadata/__json__/metadata-type';
import { MetadataJson } from '../common/metadata/__json__/metadata-json';
import { VmPowerOperation } from './__json__/vm-power-operation-type';
import { BackupRestorePointJson } from './backup-restore-point/__json__/backup-restore-point-json';
import { SnapshotJson } from '../common/snapshot/__json__/snapshot-json';
import { ScreenTicketJson } from './screen-ticket/__json__/screen-ticket-json';
import { MksScreenTicketJson } from './screen-ticket/__json__/mks-screen-ticket-json';
import { BillJson } from '../common/billing/__json__/bill-json';
import { VmStatus } from './__json__/vm-status-type';
import { EntityWithPerfSamples } from '../mixins/perf-samples/entity-with-perf-samples';
import { PerfCounter } from '../mixins/perf-samples/perf-counter';
import { PerfSamplesRequest } from '../mixins/perf-samples/perf-samples-request';
import { PerfSamplesSeries } from '../mixins/perf-samples/perf-samples-series';
import { BootOptions } from './boot-options/boot-options';
import { GuestTools } from './guest-tools/guest-tools';
import { ToolsUpgradePolicy } from './__json__/tools-upgrade-policy';
import { GuestCustomizationUpdateRequest } from './guest-customization/guest-customization-update-request';
import { VmCapabilityUpdateRequest } from './capabilities/capabilities-update-request';
import { VmMemorySizeUpdateRequest } from './vm-memory-size-update-request';
import { VmCpuCountUpdateRequest } from './vm-cpu-count-update-request';
import { VmReconfigureRequest } from './vm-reconfigure-request';
import { JpegImage } from '../common/jpeg-image';
import { VmCopyMoveRequest } from './vm-copy-move-request';
import { BillingSummary } from '../common/billing/billing-summary';
import { BillingSummaryJson } from '../common/billing/__json__/billing-summary-json';
import { BootOptionsJson } from './boot-options/__json__/boot-options-json';
import { Capabilities } from './capabilities/capabilities';
import { CapabilitiesJson } from './capabilities/__json__/capabilities-json';
import { GuestCustomization } from './guest-customization/guest-customization';
import { GuestCustomizationJson } from './guest-customization/__json__/guest-customization-json';
import { GuestToolsJson } from './guest-tools/__json__/guest-tools-json';
import { VmSummary } from './summary/vm-summary';
import { VmSummaryJson } from './summary/__json__/vm-summary-json';
import { VmNetwork } from './vm-network/vm-network';
import { VmNetworkJson } from './vm-network/__json__/vm-network-json';
import { DiskType } from '../common/__json__/disk-type';
import { VmResourceSummary } from './vm-resource-summary';
import { VmResourceSummaryJson } from './__json__/vm-resource-summary-json';
import { VdcAllocationModel } from '../vdc/__json__/vdc-allocation-model-type';
import { StorageProfile } from '../common/storage-profile';
import { StorageProfileJson } from '../common/__json__/storage-profile-json';

/**
 * Virtual Machine.
 */
export class Vm extends Entity implements EntityWithPerfSamples {

  // EntityWithPerfSamples mixin properties and methods
  apiPrefix = '/vms';
  getPerfCounters: () => Promise<Array<PerfCounter>>;
  getPerfSamples: (request: PerfSamplesRequest) => Promise<PerfSamplesSeries>;

  constructor(private _apiVm: VmJson) {
    super(_apiVm);
  }

  /**
   * Gets a VM by UUID.
   * @param uuid VM UUID
   * @returns {Promise<Vm>} promise that resolves with the VM
   */
  static async getVm(uuid: string): Promise<Vm> {
    return Iland.getHttp().get(`/vms/${uuid}`).then((response) => {
      const apiVm = response.data as VmJson;
      return new Vm(apiVm);
    });
  }

  get entityType(): EntityType {
    return 'IAAS_VM';
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
  get createdDate(): Date | null {
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
   * Gets the VM's Vdc Allocation Model.
   * @returns {VdcAllocationModel} allocation model
   */
  get allocationModel(): VdcAllocationModel {
    return this._apiVm.allocation_model;
  }

  /**
   * Gets the VM's nested hypervisor enabled property
   * @returns {boolean}
   */
  get isNestedHypervisorEnabled(): boolean {
    return this._apiVm.nested_hypervisor_enabled;
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
   * Deletes this VM.
   * @returns {Promise<Task>} task promise
   */
  async delete(): Promise<Task> {
    return Iland.getHttp().delete(`/vms/${this.uuid}`).then((response) => {
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
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/add-virtual-disk`, diskJson).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Creates a new Vm in the vApp based on an existing Vm.
   * @param {VmCopyMoveRequest} copyMoveRequest Vm properties
   * @returns {Promise<Task>} task promise
   */
  async copy(copyMoveRequest: VmCopyMoveRequest): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/copy`, copyMoveRequest.json).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Creates a snapshot of the VM.
   * @param {SnapshotCreateRequest} request the snapshot creation request
   * @returns {Promise<Task>} task promise
   */
  async createSnapshot(request: SnapshotCreateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/create-snapshot`, request.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Disable Nested Hypervisor
   * @returns {Promise<Task>}
   */
  async disableNestedHypervisor(): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/disable-nested-hypervisor`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Ejects any media from the VM.
   * @returns {Promise<Task>} task promise
   */
  async ejectMedia(): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/eject-media`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Retrieve a CSV report email with all event history for a given Vm.
   * @returns {Promise<void>} there is no response object.
   */
  async emailEventHistory(email: string): Promise<void> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/email-event-history`, {
      email: email
    }).then(() => undefined);
  }

  /**
   * Enable Nested Hypervisor
   * @returns {Promise<Task>}
   */
  async enableNestedHypervisor(): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/enable-nested-hypervisor`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
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
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/insert-media`, json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Install VmWare Tools.
   * @returns {Promise<Task>} task promise
   */
  async installVmWareTools(): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/install-vmware-tools`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Moves an existing VM into the specified Vapp.
   * @param {VmCopyMoveRequest} spec Specification for newly moved vm
   * @returns {Promise<Task>} task Promise
   */
  /* istanbul ignore next: autogenerated */
  async moveVm(spec: VmCopyMoveRequest): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/move`, spec.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Powers off the VM.
   * @returns {Promise<Task>} task promise
   */
  async powerOff(): Promise<Task> {
    return this.performPowerOperation('poweroff');
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
   * Requests that the guest OS restart.
   * @returns {Promise<Task>} task promise
   */
  async rebootGuestOs(): Promise<Task> {
    return this.performPowerOperation('reboot');
  }

  /**
   * Update the name and description of the VM as well as the guest customization section, the cpu, memory,
   * and disk specifications. Any sections left out of the VmReconfigureRequest will be left unchanged.
   * @param {VmReconfigureRequest} request
   * @returns {Promise<Task>}
   */
  async reconfigure(request: VmReconfigureRequest): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/reconfigure`, request.json).then((response) => {
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
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/relocate`, json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Performs a hard reset power operation.
   * @returns {Promise<Task>} task promise
   */
  async reset(): Promise<Task> {
    return this.performPowerOperation('reset');
  }

  /**
   * Reset MAC Addresses
   * @returns {Promise<Task>}
   */
  async resetMacAddresses(): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/reset-mac-addresses`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
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
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/restore`, json).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Restore a backup of the VM into another vApp.
   * @param {Date} timestamp the timestamp of the restore point to be restored
   * @param {string} vappUuid the uuid of the vApp in which VM will be restored
   * @returns {Promise<Task>}
   */
  async restoreBackupIntoVapp(timestamp: Date, vappUuid: string): Promise<Task> {
    const json: VmRestoreBackupIntoVAppRequestJson = {
      time: timestamp.getTime(),
      vapp_uuid: vappUuid
    };
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/restore-into-vapp`, json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Restore the VMs snapshot.
   * @returns {Promise<Task>} task promise
   */
  async restoreSnapshot(): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/restore-snapshot`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Shuts down the VMs guest operating system.
   * @returns {Promise<Task>} task promise
   */
  async shutdownGuestOs(): Promise<Task> {
    return this.performPowerOperation('shutdown');
  }

  /**
   * Suspends VM.
   * @returns {Promise<Task>} task promise
   */
  async suspend(): Promise<Task> {
    return this.performPowerOperation('suspend');
  }

  /**
   * Update VM boot options
   * @returns {Promise<Task>}
   */
  async updateBootOptions(bootDelay: number, enterBios: boolean): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/update-boot-options`, {
      boot_delay: bootDelay,
      is_enter_bios: enterBios
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Update VM capabilities
   * @param {CapabilitiesUpdateRequest} request VM capabilities update request
   * @returns {Promise<Task>}
   */
  async updateCapabilities(request: VmCapabilityUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/update-capabilities`,request.json)
      .then((response) => {
        const json = response.data as TaskJson;
        return new Task(json);
      });
  }

  /**
   * Edit the number of CPUs.
   * @param request {VmCpuCountUpdateRequest} specifying new number of CPUs
   * @returns {Promise<Task>} task promise
   */
  async updateCpuCount(request: VmCpuCountUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/update-cpu-count`, request.json).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
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
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/update-description`, spec).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Updates the VM's guest customization.
   * @param {GuestCustomizationUpdateRequest} request
   * @returns {Promise<Task>}
   */
  async updateGuestCustomization(request: GuestCustomizationUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/update-guest-customization`, request.json)
      .then((response) => {
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
    const request = new VmMemorySizeUpdateRequest({ memory_size: memorySizeMb });
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/update-memory-size`, request.json)
      .then((response) => {
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
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/update-name`, json).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Updates the VM's tools upgrade policy.
   * @param {ToolsUpgradePolicy} policy The new policy
   * @returns {Promise<Task>} task promise
   */
  async updateToolsUpgradePolicy(policy: ToolsUpgradePolicy): Promise<Task> {
    const json = { upgrade_policy: policy };
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/update-tools-upgrade-policy`, json)
      .then((response) => {
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
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/update-virtual-disk`, diskJson).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Update the VM's virtual disks.
   * @param {Array<VirtualDiskJson>} disksJson array of specs for new disks
   * @returns {Promise<Task>} task promise
   */
  async updateVirtualDisks(disksJson: Array<VirtualDiskJson>): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/update-virtual-disks`, disksJson).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Update virtual network cards for a VM.
   * @param {Array<Vnic>} vnics
   * @returns {Promise<Task>}
   */
  async updateVnics(vnics: Array<Vnic>): Promise<Task> {
    const spec: Array<VnicJson> = vnics.map((vnic) => {
      return vnic.json;
    });
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/update-vnics`, spec).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Upgrade the VM's guest tools.
   * @returns {Promise<Task>} task promise
   */
  async upgradeGuestTools(): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/upgrade-guest-tools`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Gets the VMs available backup restore points.
   * @returns {Promise<BackupRestorePoint[]>} promise that resolves with the list of backup restore points
   */
  async getBackupRestorePoints(): Promise<Array<BackupRestorePoint>> {
    return Iland.getHttp().get(`/vms/${this.uuid}/backups`).then((response) => {
      const restorePointsJson = response.data.data as Array<BackupRestorePointJson>;
      return restorePointsJson.map((restorePointJson) => new BackupRestorePoint(restorePointJson));
    });
  }

  /**
   * Gets the bill for the VM for the specified month and year. Month and year default to current month and year if left
   * unspecified.
   * @returns {Promise<Bill>} promise that resolves with the Bill
   */
  async getBill(month?: number, year?: number): Promise<Bill> {
    return Iland.getHttp().get(`/vms/${this.uuid}/billing`, {
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
   * Gets the VMs boot options
   * @returns {Promise<BootOptions>} promise that resolves with the vm boot options
   */
  async getBootOptions(): Promise<BootOptions> {
    return Iland.getHttp().get(`/vms/${this.uuid}/boot-options`).then((response) => {
      const bootOptionsJson = response.data as BootOptionsJson;
      return new BootOptions(bootOptionsJson);
    });
  }

  /**
   * Gets the VM capabilities
   * @returns {Promise<Capabilities>} promise that resolves with the vm capabilities
   */
  async getCapabilities(): Promise<Capabilities> {
    return Iland.getHttp().get(`/vms/${this.uuid}/capabilities`).then((response) => {
      const capabilitiesJson = response.data as CapabilitiesJson;
      return new Capabilities(capabilitiesJson);
    });
  }

  /**
   * Gets the VM recommended disk bus type
   * @returns {Promise<DiskType>} promise that resolves with the vm recommended disk bus type
   */
  async getRecommendedDiskBusType(): Promise<DiskType> {
    return Iland.getHttp().get(`/vms/${this.uuid}/recommended-disk-bus-type`).then((response) => {
      return response.data.bus_type as DiskType;
    });
  }

  /**
   * Gets the VM guest customization section includes properties of the guest operating system that can be modified
   * such as passwords, and domain names.
   * @param {boolean} omitPasswords Whether to omit passwords (default: false)
   * @returns {Promise<GuestCustomization>} promise that resolves with the vm guest customization object
   */
  async getGuestCustomization(omitPasswords: boolean = false): Promise<GuestCustomization> {
    return Iland.getHttp().get(`/vms/${this.uuid}/guest-customization`, {
      params: {
        omitPasswords: omitPasswords
      }
    }).then((response) => {
      const guestCustomizationJson = response.data as GuestCustomizationJson;
      return new GuestCustomization(guestCustomizationJson);
    });
  }

  /**
   * Gets the VM guest tools information
   * @returns {Promise<GuestCustomization>} promise that resolves with the vm guest tools
   */
  async getGuestToolsInfo(): Promise<GuestTools> {
    return Iland.getHttp().get(`/vms/${this.uuid}/guest-tools`).then((response) => {
      const guestToolsJson = response.data as GuestToolsJson;
      return new GuestTools(guestToolsJson);
    });
  }

  /**
   * Returns true if VM has a snapshot
   * @returns {Promise<boolean>} promise that resolves with a boolean that indicates if VM has a snapshot
   */
  async hasSnapshot(): Promise<boolean> {
    return Iland.getHttp().get(`/vms/${this.uuid}/has-snapshot`).then((response) => {
      return response.data.has_snapshot;
    });
  }

  /**
   * Gets the VM summary
   * @returns {Promise<VmSummary>} promise that resolves with the vm guest tools
   */
  async getSummary(): Promise<VmSummary> {
    return Iland.getHttp().get(`/vms/${this.uuid}/summary`).then((response) => {
      const summary = response.data as VmSummaryJson;
      return new VmSummary(summary);
    });
  }

  /**
   * Gets the VM tools upgrade policy
   * @returns {Promise<ToolsUpgradePolicy>} promise that resolves with tools upgrade policy string
   */
  async getToolUpgradePolicy(): Promise<ToolsUpgradePolicy> {
    return Iland.getHttp().get(`/vms/${this.uuid}/tools-upgrade-policy`).then((response) => {
      return response.data.upgrade_policy as ToolsUpgradePolicy;
    });
  }

  /**
   * Delete a virtual disk.
   * @param {string} name the name of the disk to delete
   * @returns {Promise<Task>} task promise
   */
  async deleteVirtualDisk(name: string): Promise<Task> {
    return Iland.getHttp().delete(`/vms/${this.uuid}/disks/${name}`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Gets the VM's metadata.
   * @returns {Promise<Metadata<MetadataType>[]>}
   */
  async getMetadata(): Promise<Array<Metadata<MetadataType>>> {
    return Iland.getHttp().get(`/vms/${this.uuid}/metadata`).then((response) => {
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
   * Updates the VM's metadata.
   * @param {Array<Metadata<MetadataType>>} metadata the new array of metadata
   * @returns {Promise<Task>} task promise
   */
  async updateMetadata(metadata: Array<Metadata<MetadataType>>): Promise<Task> {
    const metadataJson: Array<MetadataJson<MetadataType>> = metadata.map(m => {
      return m.json;
    });
    return Iland.getHttp().put(`/vms/${this.uuid}/metadata`, metadataJson).then((response) => {
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
    return Iland.getHttp().delete(`/vms/${this.uuid}/metadata/${metadataKey}`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Gets the VMs MKS screen ticket for a remote console connection.
   * @returns {Promise<MksScreenTicket>} promise that resolves with the MKS screen ticket
   */
  async getMksScreenTicket(): Promise<MksScreenTicket> {
    return Iland.getHttp().get(`/vms/${this.uuid}/mks-screen-ticket`).then((response) => {
      const json = response.data as MksScreenTicketJson;
      return new MksScreenTicket(json);
    });
  }

  /**
   * Get the networks for current VM.
   * @returns {Promise<Array<VmNetwork>>}
   */
  async getNetworks(): Promise<Array<VmNetwork>> {
    return Iland.getHttp().get(`/vms/${this.uuid}/networks`).then((response) => {
      return response.data.data.map((data: VmNetworkJson) => {
        return new VmNetwork(data);
      });
    });
  }

  /**
   * Gets the VMs screen ticket for a remote console connection.
   * @returns {Promise<ScreenTicket>} promise that resolves with the screen ticket
   */
  async getScreenTicket(): Promise<ScreenTicket> {
    return Iland.getHttp().get(`/vms/${this.uuid}/screen-ticket`).then((response) => {
      const json = response.data as ScreenTicketJson;
      return new ScreenTicket(json);
    });
  }

  /**
   * Gets the current screen JPEG thumbnail image.
   * @returns {Promise<JpegImage>} promise Promise that resolves with a JpegImage
   */
  /* istanbul ignore next: autogenerated */
  async getScreen(): Promise<JpegImage> {
    return Iland.getHttp().get(`/vms/${this.uuid}/screen`, {
      headers: {
        'Accept': 'image/jpeg'
      },
      responseType: 'arraybuffer'
    }).then((response) => {
      return new JpegImage(response.data);
    });
  }

  /**
   * Deletes the VMs snapshot.
   * @returns {Promise<Task>} task promise
   */
  async deleteSnapshot(): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/remove-snapshot`).then((response) => {
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
    return Iland.getHttp().get(`/vms/${this.uuid}/snapshot`).then((response) => {
      const json = response.data as SnapshotJson;
      return new Snapshot(json);
    });
  }

  /**
   * Gets the VM's virtual disks.
   * @returns {Promise<VirtualDisk[]>} array of virtual disks
   */
  async getVirtualDisks(): Promise<Array<VirtualDisk>> {
    return Iland.getHttp().get(`/vms/${this.uuid}/virtual-disks`).then((response) => {
      const apiDisks = response.data.data as Array<VirtualDiskJson>;
      return apiDisks.map((apiDisk) => new VirtualDisk(apiDisk));
    });
  }

  /**
   * Updates the VM's virtual hardware to the latest version available.
   * @returns {Promise<Task>} task promise
   */
  async updateVirtualHardwareVersion(): Promise<Task> {
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/update-virtual-hardware-version`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Gets the list of VNICs for this VM.
   * @returns {Promise<Vnic[]>}
   */
  async getVnics(): Promise<Array<Vnic>> {
    return Iland.getHttp().get(`/vms/${this.uuid}/vnics`).then((response) => {
      const apiVnics = response.data.data as Array<VnicJson>;
      return apiVnics.map((apiVnic) => new Vnic(apiVnic));
    });
  }

  /**
   * Delete a VNIC from this VM.
   * @returns {Promise<Task>} a promise that resolves with the task
   */
  async deleteVnic(vnicId: number): Promise<Task> {
    return Iland.getHttp().delete(`/vms/${this.uuid}/vnics/${vnicId}`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Refreshes the VM data by retrieving it from the API again.
   * @returns {Promise<Vm>}
   */
  async refresh(): Promise<Vm> {
    return Iland.getHttp().get(`/vms/${this.uuid}`).then((response) => {
      this._apiVm = response.data as VmJson;
      return this;
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
    return Iland.getHttp().post(`/vms/${this.uuid}/actions/${type}`, undefined, config).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Get the billing summary for a VM.
   * @returns {Promise<BillingSummary>} a promise that resolves with the current billing information
   */
  /* istanbul ignore next: autogenerated */
  async getCurrentBilling(): Promise<BillingSummary> {
    return Iland.getHttp().get(`/vms/${this.uuid}/billing-summary`).then((response) => {
      const json = response.data as BillingSummaryJson;
      return new BillingSummary(json);
    });
  }

  /**
   * Gets the VM's resource summary.
   * @returns {Promise<VmResourceSummary>} a promise that resolves with the resource summary information
   */
  /* istanbul ignore next: autogenerated */
  async getVmSummary(): Promise<VmResourceSummary> {
    return Iland.getHttp().get(`/vms/${this.uuid}/summary`).then((response) => {
      const json = response.data as VmResourceSummaryJson;
      return new VmResourceSummary(json);
    });
  }

  /**
   * Gets the VM's available storage profiles.
   * @returns {Promise<Array<StorageProfile>>} a promise that resolves with the available storage profiles
   */
  /* istanbul ignore next: autogenerated */
  async getAvailableStorageProfiles(): Promise<Array<StorageProfile>> {
    return Iland.getHttp().get(`/vms/${this.uuid}/available-storage-profiles`).then((response) => {
      const json = response.data.data as Array<StorageProfileJson>;
      return json.map(it => new StorageProfile(it));
    });
  }
}

applyMixins(Vm, [EntityWithPerfSamples]);

/**
 * Enumeration of possible VM power statuses.
 */
export type VmPowerStatus = VmStatus |
  'PARTIALLY_POWERED_OFF';
