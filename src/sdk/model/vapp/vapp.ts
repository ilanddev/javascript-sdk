import { EntityWithPerfSamples } from '../mixins/perf-samples/entity-with-perf-samples';
import { Entity } from '../common/entity';
import { Iland } from '../../iland';
import { Vm } from '../vm/vm';
import { VappNetwork } from '../vapp-network/vapp-network';
import { Task } from '../task/task';
import { VappJson } from './__json__/vapp-json';
import { EntityType } from '../common/__json__/entity-type';
import { BuildVmRequestJson, VmJson } from '../vm/__json__/vm-json';
import { VappNetworkJson } from '../vapp-network/__json__/vapp-network-json';
import { TaskJson } from '../task/__json__/task-json';
import { VappStatus } from './__json__/vapp-status-type';
import { PerfCounter } from '../mixins/perf-samples/perf-counter';
import { PerfSamplesRequest } from '../mixins/perf-samples/perf-samples-request';
import { PerfSamplesSeries } from '../mixins/perf-samples/perf-samples-series';
import { applyMixins } from 'rxjs/util/applyMixins';
import { VappStartupSectionItemJson } from './__json__/vapp-startup-section-item-json';
import { Snapshot } from '../common/snapshot/snapshot';
import { SnapshotJson } from '../common/snapshot/__json__/snapshot-json';
import { HasSnapshot } from '../common/snapshot/has-snapshot';
import { HasSnapshotJson } from '../common/snapshot/__json__/has-snapshot-json';
import { SnapshotCreateRequest } from '../common/snapshot/snapshot-create-request';
import { VappRenameRequest } from './vapp-rename-request';
import { VappDescriptionUpdateRequest } from './vapp-update-description-request';
import { MetadataType } from '../common/metadata/__json__/metadata-type';
import { MetadataJson } from '../common/metadata/__json__/metadata-json';
import { Metadata } from '../common/metadata/metadata';
import { VappStartupSectionItem } from './vapp-startup-section-item';
import { VappStartupSectionItemRequest } from './vapp-startup-section-item-request';
import { VappNetworkCreateRequest } from './vapp-network-create-request';
import { VappCopyMoveRequest } from './vapp-copy-move-request';
import { RuntimeLeaseUpdateRequest } from './vapp-runtime-lease-update-request';
import { StorageLeaseUpdateRequest } from './vapp-storage-lease-update-request';
import { VappDownloadDetails } from './vapp-download-detail';
import { VappDownloadDetailsJson } from './__json__/vapp-download-detail-json';
import { VmResourceSummaryMapResponse } from './summary/vm-resource-summary-map-response';
import { VmSummaryMapResponseJson } from './summary/__json__/vm-ressource-summary-map-response-json';
import { VappResourceSummary } from './summary/vapp-resource-summary';
import { VappResourceSummaryJson } from './summary/__json__/vapp-resource-summary-json';
import { Bill } from '../common/billing/bill';
import { BillingSummary } from '../common/billing/billing-summary';
import { BillingSummaryJson } from '../common/billing/__json__/billing-summary-json';
import { BillJson } from '../common/billing/__json__/bill-json';
import {VdcAllocationModel} from "../vdc/__json__/vdc-allocation-model-type";

/**
 * Virtual Application.
 */
export class Vapp extends Entity implements EntityWithPerfSamples {

  // EntityWithPerfSamples mixin properties and methods
  apiPrefix = '/vapps';
  getPerfCounters: () => Promise<Array<PerfCounter>>;
  getPerfSamples: (request: PerfSamplesRequest) => Promise<PerfSamplesSeries>;

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
    return 'IAAS_VAPP';
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
    return this._json.runtime_lease_in_seconds;
  }

  /**
   * Gets the storage lease setting, in seconds.
   * @returns {number} storage lease
   */
  get storageLease(): number {
    return this._json.storage_lease_in_seconds;
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
   * Get Vapp's Vdc Allocation Model
   * @returns {VdcAllocationModel} allocation model
   */
  get allocationModel(): VdcAllocationModel {
    return this._json.allocation_model;
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
   * @returns {VappJson} the API __json__ object
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
   * Update the vApp name.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async updateName(request: VappRenameRequest): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/update-name`, request.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Update the vApp description.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async updateDescription(request: VappDescriptionUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/update-description`, request.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Gets the vApps child VMs.
   * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
   */
  async getVms(): Promise<Array<Vm>> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/vms`).then((response) => {
      const json = response.data.data as Array<VmJson>;
      return json.map((vmJson) => new Vm(vmJson));
    });
  }

  /**
   * Gets the vApps child vApp Networks.
   * @returns {Promise<VappNetwork[]>} promise that resolves with an array of child vApp Networks
   */
  async getVappNetworks(): Promise<Array<VappNetwork>> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/networks`).then((response) => {
      const json = response.data.data as Array<VappNetworkJson>;
      return json.map((vappNetJson) => new VappNetwork(vappNetJson));
    });
  }

  /**
   * Creates VMs in vApp.
   * @param {Array} buildVmRequestList
   * @returns {Promise<Task>} task response
   */
  async buildVms(buildVmRequestList: Array<BuildVmRequestJson>): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/build-vms`, buildVmRequestList).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Delete the vApp.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async deleteVapp(): Promise<Task> {
    return Iland.getHttp().delete(`/vapps/${this.uuid}`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Power on the vApp.
   * @param {boolean} forceGuestCustomization Optional param to force guest re-customization on restart
   * defaults to false
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async powerOnVapp(forceGuestCustomization?: boolean): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/poweron`, {
      params: {
        forceGuestCustomization: forceGuestCustomization
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Power off the vApp.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async powerOffVapp(): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/poweroff`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Managed shutdown of the vApp using the vApp's startup section settings.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async managedShutdown(): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/managed-shutdown`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Suspend the vApp.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async suspendVapp(): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/suspend`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Shutdown the vApp.
   * This action requires VMWare Tools to be installed on each VM in the vApp.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async shutdownVapp(): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/shutdown`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Reset the vApp.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async resetVapp(): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/reset`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Reboot the vApp.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async rebootVapp(): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/reboot`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Get the resource summary for the given vApp.
   * @returns {Promise<VappResourceSummary>} promise Promise that resolves with VappResourceSummary
   */
  /* istanbul ignore next: autogenerated */
  async getSummary(): Promise<VappResourceSummary> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/summary`).then((response) => {
      const json = response.data as VappResourceSummaryJson;
      return new VappResourceSummary(json);
    });
  }

  /**
   * Get the snapshot for the given vApp.
   * @returns {Promise<Snapshot>} promise Promise that resolves with Snapshot
   */
  /* istanbul ignore next: autogenerated */
  async getSnapshot(): Promise<Snapshot> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/snapshot`).then((response) => {
      const json = response.data as SnapshotJson;
      return new Snapshot(json);
    });
  }

  /**
   * Get whether the given vApp has a snapshot.
   * @returns {Promise<HasSnapshot>} promise Promise that resolves with HasSnapshot
   */
  /* istanbul ignore next: autogenerated */
  async hasVappSnapshot(): Promise<HasSnapshot> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/has-snapshot`).then((response) => {
      const json = response.data as HasSnapshotJson;
      return new HasSnapshot(json);
    });
  }

  /**
   * Create a snapshot.
   * @param {SnapshotCreateRequest} request the snapshot creation request
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async createSnapshot(request: SnapshotCreateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/create-snapshot`, request.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Restore a snapshot.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async restoreSnapshot(): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/restore-snapshot`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Remove a snapshot.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async removeSnapshot(): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/remove-snapshot`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Gets the vApp's metadata.
   * @returns {Promise<Metadata<MetadataType>[]>}
   * @throws Error if type not found for metadata
   */
  async getMetadata(): Promise<Array<Metadata<MetadataType>>> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/metadata`).then((response) => {
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
   * Updates the vApp's metadata.
   * @param {Array<Metadata<MetadataType>>} metadata the new array of metadata
   * @returns {Promise<Task>} task promise
   */
  async updateMetadata(metadata: Array<Metadata<MetadataType>>): Promise<Task> {
    const metadataJson: Array<MetadataJson<MetadataType>> = metadata.map(m => {
      return m.json;
    });
    return Iland.getHttp().put(`/vapps/${this.uuid}/metadata`, metadataJson).then((response) => {
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
    return Iland.getHttp().delete(`/vapps/${this.uuid}/metadata/${metadataKey}`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Returns vApp Billing for a given invoice period.
   * If month and year are not explicitly supplied the current invoice period is used.
   * @param {number} year the invoice period year (defaults to current year)
   * @param {number} month the invoice period month (defaults to the current month) must be in range 1-12
   * @returns {Promise<Bill>} promise Promise that resolves with billing for the vApp and given invoice period
   */
  /* istanbul ignore next: autogenerated */
  async getBilling(year?: number, month?: number): Promise<Bill> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/billing`, {
      params: {
        year: year,
        month: month
      }
    }).then((response) => {
      const json = response.data as BillJson;
      return new Bill(json);
    });
  }

  /**
   * Get the current billing for a vApp.
   * @returns {Promise<BillingSummary>} promise Promise that resolves with vapp billing
   */
  /* istanbul ignore next: autogenerated */
  async getCurrentBilling(): Promise<BillingSummary> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/billing-summary`).then((response) => {
      const json = response.data as BillingSummaryJson;
      return new BillingSummary(json);
    });
  }

  /**
   *  Get the startup section for a particular Vapp.
   * @returns {Promise<Array<VappStartupSectionItem>>} promise Promise that resolves with a list of
   * VappStartupSectionItem
   */
  /* istanbul ignore next: autogenerated */
  async getStartupSection(): Promise<Array<VappStartupSectionItem>> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/startup-section`).then((response) => {
      const json = response.data.data as Array<VappStartupSectionItemJson>;
      return json.map((it) => new VappStartupSectionItem(it));
    });
  }

  /**
   * Add a vapp-network to vapp.
   * @param {VappNetworkCreateRequest} vappNetworkCreateRequest
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async addVappNetwork(vappNetworkCreateRequest: VappNetworkCreateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/add-vapp-network`, vappNetworkCreateRequest.json)
      .then((response) => {
        const apiTask = response.data as TaskJson;
        return new Task(apiTask);
      });
  }

  /**
   * Copy a vApp.
   * @param {VappCopyMoveRequest} the request for the vApp copy
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async copyVapp(spec: VappCopyMoveRequest): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/copy`, spec.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Move a vApp.
   * @param {VappCopyMoveRequest} the request for the vApp move
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async moveVapp(spec: VappCopyMoveRequest): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/move`, spec.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }
  /**
   * Update a vApp runtime lease.
   * @param {RuntimeLeaseUpdateRequest} runtime lease update request
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async updateRuntimeLease(request: RuntimeLeaseUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/update-runtime-lease`, request.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Update a vApp storage lease.
   * @param {StorageLeaseUpdateRequest} storage lease update request
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async updateStorageLease(request: StorageLeaseUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/update-storage-lease`, request.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Update the startup section of a particular Vapp.
   * @param {Array<VappStartupSectionItemRequest>} startupSection
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async updateStartupSection(startupSection: Array<VappStartupSectionItemRequest>): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/update-startup-section`,
        startupSection.map((section) => section.json)).then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Enable the download of the vapp. Returns a TaskResponse which monitors the
   * progress of the download.
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async enableDownload(): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/actions/enable-download`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Gets download details for the vApp. Details include whether the vapp is
   * enabled for download, and, if enabled, the size and name of the download.
   * @returns {Promise<VappDownloadDetails>} promise Promise that resolves with VappDownloadDetails
   */
  /* istanbul ignore next: autogenerated */
  async getDownloadDetails(): Promise<VappDownloadDetails> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/download-details`).then((response) => {
      const json = response.data as VappDownloadDetailsJson;
      return new VappDownloadDetails(json);
    });
  }

  /**
   * Get vm resource summary map.
   * @returns {Promise<VmResourceSummaryMapResponse>}
   */
  /* istanbul ignore next: autogenerated */
  async getVmResourceSummaryMap(): Promise<VmResourceSummaryMapResponse> {
    return Iland.getHttp().get(`/vapps/${this.uuid}/vm-summary-map`).then((response) => {
      const json = response.data as VmSummaryMapResponseJson;
      return new VmResourceSummaryMapResponse(json);
    });
  }

  /**
   * Adds an org vDC network to the vApp.
   * @param {string} networkUuid the UUID of the org vDC network
   * @returns {Promise<Task>} a promise that resolves with the task details
   */
  /* istanbul ignore next: autogenerated */
  async addOrgVdcNetwork(networkUuid: string): Promise<Task> {
    return Iland.getHttp().post(`/vapps/${this.uuid}/org-vdc-network/${networkUuid}`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

}

applyMixins(Vapp, [EntityWithPerfSamples]);

/**
 * Enumeration of possible vApp power statuses.
 */
export type VappPowerStatus = VappStatus |
  'PARTIALLY_POWERED_OFF';
