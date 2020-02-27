import { applyMixins } from 'rxjs/internal-compatibility';
import { Entity } from '../common/entity';
import { Iland } from '../../iland';
import { Vm } from '../vm/vm';
import { Vapp } from '../vapp/vapp';
import { Task } from '../task/task';
import { VdcSummary } from './vdc-summary';
import { VdcJson, VdcSummaryJson } from './__json__/vdc-json';
import { EntityType } from '../common/__json__/entity-type';
import { VdcAllocationModel } from './__json__/vdc-allocation-model-type';
import { BuildVappRequestJson, VappJson } from '../vapp/__json__/vapp-json';
import { VmJson } from '../vm/__json__/vm-json';
import { TaskJson } from '../task/__json__/task-json';
import { Metadata } from '../common/metadata/metadata';
import { MetadataType } from '../common/metadata/__json__/metadata-type';
import { MetadataJson } from '../common/metadata/__json__/metadata-json';
import { EntityWithPerfSamples } from '../mixins/perf-samples/entity-with-perf-samples';
import { PerfCounter } from '../mixins/perf-samples/perf-counter';
import { PerfSamplesRequest } from '../mixins/perf-samples/perf-samples-request';
import { PerfSamplesSeries } from '../mixins/perf-samples/perf-samples-series';
import { Media } from '../media/media';
import { MediaJson } from '../media/__json__/media-json';
import { ReportFormat } from '../common/__json__/report-format';
import { OrgVdcNetworkCreateRequest } from '../internal-network/org-vdc-network-create-request';
import { StorageProfileJson } from '../common/__json__/storage-profile-json';
import { StorageProfile } from '../common/storage-profile';
import { BillingSummary } from '../common/billing/billing-summary';
import { BillingSummaryJson } from '../common/billing/__json__/billing-summary-json';
import { Bill } from '../common/billing/bill';
import { BillJson } from '../common/billing/__json__/bill-json';
import { VdcStorageProfileSummary } from './vdc-storage-profile-summary';
import { VdcStorageProfileSummaryJson } from './__json__/vdc-storage-profile-summary-json';
import { BillingSampleSerie } from '../org/billing-sample-serie';
import { BillingSampleSerieJson } from '../org/__json__/billing-sample-serie-json';
import { ReportHeader } from '../common/reports/report-header';
import { ReportHeaderJson } from '../common/__json__/report-header-json';
import { Edge } from '../edge/edge';
import { EdgeJson } from '../edge/__json__/edge-json';
import { InternalNetwork } from '../internal-network/internal-network';
import { InternalNetworkJson } from '../internal-network/__json__/internal-network-json';
import { VdcAddVappFromTemplateRequest } from './vdc-add-vapp-from-template-request';
import { VappResourceSummaryMapJson } from './__json__/vapp-resource-summary-map-json';
import { VappResourceSummaryMap } from './vapp-resource-summary-map';
import { VmAffinityRule } from './vm-affinity-rule';
import { VmAffinityRuleJson } from './__json__/vm-affinity-rule-json';
import { VmAffinityRuleCreateRequest } from './vm-affinity-rule-create-request';
import { VmAffinityRuleUpdateRequest } from './vm-affinity-rule-update-request';
import { VmResourceSummaryMap } from './vm-resource-summary-map';
import { VmResourceSummaryMapJson } from './__json__/vm-resource-summary-map-json';
import { IpSet } from './vdc-microsegmentation/ip-set';
import { IpSetJson } from './vdc-microsegmentation/__json__/ip-set-json';
import { IpSetCreateRequest } from './vdc-microsegmentation/ip-set-create-request';
import { IpSetUpdateRequest } from './vdc-microsegmentation/ip-set-update-request';
import { MacSet } from './vdc-microsegmentation/mac-set';
import { MacSetJson } from './vdc-microsegmentation/__json__/mac-set-json';
import { MacSetCreateRequest } from './vdc-microsegmentation/mac-set-create-request';
import { MacSetUpdateRequest } from './vdc-microsegmentation/mac-set-update-request';
import { Application } from './vdc-microsegmentation/application';
import { ApplicationJson } from './vdc-microsegmentation/__json__/application-json';
import { ApplicationGroup } from './vdc-microsegmentation/application-group';
import { ApplicationGroupJson } from './vdc-microsegmentation/__json__/application-group-json';

/**
 * Virtual Data Center.
 */
export class Vdc extends Entity implements EntityWithPerfSamples {

  // EntityWithPerfSamples mixin properties and methods
  apiPrefix = '/vdcs';
  getPerfCounters: () => Promise<Array<PerfCounter>>;
  getPerfSamples: (request: PerfSamplesRequest) => Promise<PerfSamplesSeries>;

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
    return 'IAAS_VDC';
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
   * Gets the vDC allocation __json__
   * @returns {VdcAllocationModel} allocation __json__ identifier
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
    return this._json.max_hardware_version;
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
   * @returns {VdcJson} the API __json__ object
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
      const json = response.data.data as Array<VappJson>;
      return json.map((vappJson) => new Vapp(vappJson));
    });
  }

  /**
   * Gets the vDCs child VMs.
   * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
   */
  async getVms(): Promise<Array<Vm>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/vms`).then((response) => {
      const json = response.data.data as Array<VmJson>;
      return json.map((vmJson) => new Vm(vmJson));
    });
  }

  /**
   * Create a scratch vApp into the vDC.
   * @param {BuildVappRequestJson} buildVappRequest
   * @returns {Promise<Task>} task promise
   */
  async buildVapp(buildVappRequest: BuildVappRequestJson): Promise<Task> {
    return Iland.getHttp().post(`/vdcs/${this.uuid}/actions/build-vapp`, buildVappRequest).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Gets the vDCs Summary.
   * @returns {Promise<VdcSummary>} promise that resolved with a vDC summary
   */
  async getSummary(): Promise<VdcSummary> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/summary`).then((response) => {
      const json = response.data as VdcSummaryJson;
      return new VdcSummary(json);
    });
  }

  /**
   * Add a vApp from template to vDC.
   * @param {VdcAddVappFromTemplateRequest} vdcAddVappFromTemplateRequest
   * @returns {Promise<Task>} task promise
   */
  /* istanbul ignore next: autogenerated */
  async addVappFromTemplate(vdcAddVappFromTemplateRequest: VdcAddVappFromTemplateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vdcs/${this.uuid}/actions/add-vapp-from-template`, vdcAddVappFromTemplateRequest.json)
      .then((response) => {
        const json = response.data as TaskJson;
        return new Task(json);
      });
  }

  /**
   * Get media for the vDC.
   * @returns {Promise<Array<Media>>} promise that is resolved with a list of media
   */
  /* istanbul ignore next: autogenerated */
  async getMedias(): Promise<Array<Media>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/medias`).then((response) => {
      const json = response.data.data as Array<MediaJson>;
      return json.map((it) => new Media(it));
    });
  }

  /**
   * Gets the vDC metadata.
   * @returns {Promise<Metadata<MetadataType>[]>}
   */
  async getMetadata(): Promise<Array<Metadata<MetadataType>>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/metadata`).then((response) => {
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
   * Get the VM inventory reports available for download for the given vDC.
   * @param {string} the report format to filter on
   * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of report headers
   */
  /* istanbul ignore next: autogenerated */
  async getVmInventoryReports(format?: ReportFormat): Promise<Array<ReportHeader>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/vm-inventory-reports`, {
      params: {
        format: format
      }
    }).then((response) => {
      const json = response.data.data as Array<ReportHeaderJson>;
      return json.map((it) => new ReportHeader(it));
    });
  }

  /**
   * Updates the vDC metadata.
   * @param {Array<Metadata<MetadataType>>} metadata the new array of metadata
   * @returns {Promise<Task>} task promise
   */
  async updateMetadata(metadata: Array<Metadata<MetadataType>>): Promise<Task> {
    return Iland.getHttp().put(`/vdcs/${this.uuid}/metadata`, metadata.map(it => it.json))
        .then((response) => {
          const apiTask = response.data as TaskJson;
          return new Task(apiTask);
        });
  }

  /**
   * Deletes a metadata entry for vDC.
   * @param {string} metadataKey the key of the metadata entry to delete
   * @returns {Promise<Task>} task promise
   */
  async deleteMetadata(metadataKey: string): Promise<Task> {
    return Iland.getHttp().delete(`/vdcs/${this.uuid}/metadata/${metadataKey}`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Get the edges for the vDC.
   * @returns {Promise<Edge>} promise that resolves with a list of edges
   */
  /* istanbul ignore next: autogenerated */
  async getEdges(): Promise<Array<Edge>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/edges`).then((response) => {
      const json = response.data.data as Array<EdgeJson>;
      return json.map((it) => new Edge(it));
    });
  }

  /**
   * Gets all org-vdc networks within this vDC.
   * @returns {Promise<Array<InternalNetwork>>} a promise that resolves with the list of org-vdc networks.
   */
  /* istanbul ignore next: autogenerated */
  async getOrgVdcNetworks(): Promise<Array<InternalNetwork>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/org-vdc-networks`).then((response) => {
      const json = response.data.data as Array<InternalNetworkJson>;
      return json.map((it) => new InternalNetwork(it));
    });
  }

  /**
   * Creates a new org-vdc network in this vDC.
   * @param {OrgVdcNetworkCreateRequest} network the specification for the new network
   * @returns {Promise<Task>} a promise that resolves with a task
   */
  /* istanbul ignore next: autogenerated */
  async createOrgVdcNetwork(network: OrgVdcNetworkCreateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vdcs/${this.uuid}/actions/create-org-vdc-network`, network.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Get all storage profiles for the vDC.
   * @param {boolean} includeDisabled whether to also return disabled storage profiles
   * @returns {Promise<Array<StorageProfile>>} a promise that resolves with the list of storage profiles
   */
  /* istanbul ignore next: autogenerated */
  async getStorageProfiles(includeDisabled?: boolean): Promise<Array<StorageProfile>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/storage-profiles`, {
      params: {
        includeDisabled: includeDisabled
      }
    }).then((response) => {
      const json = response.data.data as Array<StorageProfileJson>;
      return json.map((it) => new StorageProfile(it));
    });
  }

  /**
   * Gets the current billing information
   * @returns {Promise<BillingSummary>} a promise that resolves with the current billing information
   */
  /* istanbul ignore next: autogenerated */
  async getCurrentBilling(): Promise<BillingSummary> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/billing-summary`).then((response) => {
      const json = response.data as BillingSummaryJson;
      return new BillingSummary(json);
    });
  }

  /**
   * Get billing for a specified billing period. If the billing period is not specified, the current billing period is
   * used.
   * @param {number} year the year
   * @param {number} month the month in range 0-11
   * @returns {Promise<Bill>} a promise that resolves with the bill
   */
  /* istanbul ignore next: autogenerated */
  async getBilling(year?: number, month?: number): Promise<Bill> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/billing`, {
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
   * Get bills for all child vapps for the specified billing period. If the billing period is not specified, the current
   * billing period is used.
   * @param {number} month the month in range 0-11
   * @param {number} year the year
   * @returns {Promise<Array<Bill>>} a promise that resolves with the list of vapp bills
   */
  /* istanbul ignore next: autogenerated */
  async getVappBills(month?: number, year?: number): Promise<Array<Bill>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/vapp-bills`, {
      params: {
        month: month,
        year: year
      }
    }).then((response) => {
      const json = response.data.data as Array<BillJson>;
      return json.map((it) => new Bill(it));
    });
  }

  /**
   * Get bills for all child VMs for the specified billing period. If the billing period is not specified, the current
   * billing period is used.
   * @param {number} month the month in range 0-11
   * @param {number} year the year
   * @returns {Promise<Array<Bill>>} a promise that resolves with the list of VM bills
   */
  /* istanbul ignore next: autogenerated */
  async getVmBills(month?: number, year?: number): Promise<Array<Bill>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/vm-bills`, {
      params: {
        month: month,
        year: year
      }
    }).then((response) => {
      const json = response.data.data as Array<BillJson>;
      return json.map((it) => new Bill(it));
    });
  }

  /**
   * Gets the storage profile summary for this vDC and the specified billing period.
   * @param {number} year the year
   * @param {number} month the month in range 1-12.
   * @returns {Promise<VdcStorageProfileSummary>} a promise that resolves with the storage profile summary
   */
  /* istanbul ignore next: autogenerated */
  async getStorageProfileSummary(year?: number, month?: number): Promise<VdcStorageProfileSummary> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/storage-profile-summary`, {
      params: {
        year: year,
        month: month
      }
    }).then((response) => {
      const json = response.data as VdcStorageProfileSummaryJson;
      return new VdcStorageProfileSummary(json);
    });
  }

  /**
   * Gets the cost over invoice period samples for the vDC and specified billing period.
   * @param {number} year the year
   * @param {number} month the month in range 1-12
   * @param {Array<string>} additionalFields any additional bill fields that should be included in the results
   * @returns {Promise<BillingSampleSerie>} a promise that resolves with the sample series
   */
  /* istanbul ignore next: autogenerated */
  async getCostOverInvoicePeriodSerie(year?: number, month?: number, additionalFields?: Array<string>):
      Promise<BillingSampleSerie> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/cost-over-invoice-period`, {
      params: {
        year: year,
        month: month,
        additionalFields: additionalFields
      }
    }).then((response) => {
      const json = response.data as BillingSampleSerieJson;
      return new BillingSampleSerie(json);
    });
  }

  /**
   * Generate the vm inventory report for a given vDC.
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateVmInventoryReport(emailOnCompletion?: boolean, email?: string): Promise<Task> {
    return Iland.getHttp().post(`/vdcs/${this.uuid}/actions/generate-vm-inventory-report`, {
      params: {
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Gets all child vApp resource summaries.
   * @returns {Promise<VappResourceSummaryMap>} a promise that resolves with a map of vApp resource summaries, keyed by
   * UUID.
   */
  /* istanbul ignore next: autogenerated */
  async getVappResourceSummaries(): Promise<VappResourceSummaryMap> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/vapp-summary-map`).then((response) => {
      const json = response.data as VappResourceSummaryMapJson;
      return new VappResourceSummaryMap(json);
    });
  }

  /**
   * Gets resource summaries for all child VMs.
   * @returns {Promise<VmResourceSummaryMap>} a promise that resolves with a map of VM resource summaries, keyed by
   * UUID.
   */
  /* istanbul ignore next: autogenerated */
  async getVmResourceSummaries(): Promise<VmResourceSummaryMap> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/vm-summary-map`).then((response) => {
      const json = response.data as VmResourceSummaryMapJson;
      return new VmResourceSummaryMap(json);
    });
  }

  /**
   * Retrieve a CSV report email with all event history for a given vDC.
   * @returns {Promise<void>} there is no response object.
   */
  async emailEventHistory(email: string): Promise<void> {
    return Iland.getHttp().post(`/vdcs/${this.uuid}/actions/email-event-history`, {
      email: email
    }).then(() => undefined);
  }

  /**
   * Create Vm affinity rule.
   * @param {VmAffinityRuleCreateRequest} request
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async createVmAffinityRule(request: VmAffinityRuleCreateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vdcs/${this.uuid}/actions/create-vm-affinity-rule`, request.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Update VM affinity rule.
   * @param {VmAffinityRuleUpdateRequest} vmAffinityRuleUpdateRequest
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async updateVmAffinityRule(vmAffinityRuleUpdateRequest: VmAffinityRuleUpdateRequest): Promise<Task> {
    return Iland.getHttp().put(`/vdcs/${this.uuid}/actions/update-vm-affinity-rule`,
        vmAffinityRuleUpdateRequest.json).then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Delete VM affinity rule.
   * @param {string} ruleUuid
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async deleteVmAffinityRule(ruleUuid: string): Promise<Task> {
    return Iland.getHttp().delete(`/vdcs/${this.uuid}/actions/delete-vm-affinity-rule/${ruleUuid}`)
        .then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Get VM affinity rule list.
   * @returns {Promise<Array<VmAffinityRule>>}
   */
  /* istanbul ignore next: autogenerated */
  async getVmAffinityRules(): Promise<Array<VmAffinityRule>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/vm-affinity-rules`).then((response) => {
      const json = response.data.data as Array<VmAffinityRuleJson>;
      return json.map((it) => new VmAffinityRule(it));
    });
  }

  /**
   * Get IP set.
   * @param {string} ipSetId
   * @returns {Promise<IpSet>}
   */
  /* istanbul ignore next: autogenerated */
  async getIpSet(ipsetId: string): Promise<IpSet> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/ipsets/${ipsetId}`).then((response) => {
      const json = response.data as IpSetJson;
      return new IpSet(json);
    });
  }

  /**
   * Get IP set list.
   * @returns {Promise<Array<IpSet>>}
   */
  /* istanbul ignore next: autogenerated */
  async getIpSets(): Promise<Array<IpSet>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/ipsets`).then((response) => {
      const json = response.data.data as Array<IpSetJson>;
      return json.map((it) => new IpSet(it));
    });
  }

  /**
   * Create IP set.
   * @params {IpSetCreateRequest} ipSetCreateRequest
   * @returns {Promise<IpSet>}
   */
  /* istanbul ignore next: autogenerated */
  async createIpSet(ipSetCreateRequest: IpSetCreateRequest): Promise<IpSet> {
    return Iland.getHttp().post(`/vdcs/${this.uuid}/ipsets`, ipSetCreateRequest.json).then((response) => {
      const json = response.data as IpSetJson;
      return new IpSet(json);
    });
  }

  /**
   * Update IP set.
   * @params {string} ipsetId
   * @params {IpSetUpdateRequest} ipSetUpdateRequest
   * @returns {Promise<IpSet>}
   */
  /* istanbul ignore next: autogenerated */
  async updateIpSet(ipsetId: string, ipSetUpdateRequest: IpSetUpdateRequest): Promise<IpSet> {
    return Iland.getHttp().put(`/vdcs/${this.uuid}/ipsets/${ipsetId}`, ipSetUpdateRequest.json).then((response) => {
      const json = response.data as IpSetJson;
      return new IpSet(json);
    });
  }

  /**
   * Delete IP set.
   * @params {string} ipsetId
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async deleteIpSet(ipsetId: string): Promise<Task> {
    return Iland.getHttp().delete(`/vdcs/${this.uuid}/ipsets/${ipsetId}`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Get MAC set.
   * @params {string} macsetUuid
   * @returns {Promise<MacSet>}
   */
  /* istanbul ignore next: autogenerated */
  async getMacSet(macsetUuid: string): Promise<MacSet> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/macsets/${macsetUuid}`).then((response) => {
      const json = response.data as MacSetJson;
      return new MacSet(json);
    });
  }

  /**
   * Get MAC set list.
   * @returns {Promise<Array<MacSet>>}
   */
  /* istanbul ignore next: autogenerated */
  async getMacSets(): Promise<Array<MacSet>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/macsets`).then((response) => {
      const json = response.data.data as Array<MacSetJson>;
      return json.map((it) => new MacSet(it));
    });
  }

  /**
   * Create MAC set.
   * @params {MacSetCreateRequest} macSetCreateRequest
   * @returns {Promise<MacSet>}
   */
  /* istanbul ignore next: autogenerated */
  async createMacSet(macSetCreateRequest: MacSetCreateRequest): Promise<MacSet> {
    return Iland.getHttp().post(`/vdcs/${this.uuid}/macsets`, macSetCreateRequest.json).then((response) => {
      const json = response.data as MacSetJson;
      return new MacSet(json);
    });
  }

  /**
   * Update MAC set.
   * @params {string} macsetUuid
   * @params {MacSetUpdateRequest} macSetUpdateRequest
   * @returns {Promise<MacSet>}
   */
  /* istanbul ignore next: autogenerated */
  async updateMacSet(macsetUuid: string, macSetUpdateRequest: MacSetUpdateRequest): Promise<MacSet> {
    return Iland.getHttp().put(`/vdcs/${this.uuid}/macsets/${macsetUuid}`, macSetUpdateRequest.json)
      .then((response) => {
        const json = response.data as MacSetJson;
        return new MacSet(json);
      });
  }

  /**
   * Delete MAC set.
   * @params {string} macsetUuid
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async deleteMacSet(macsetUuid: string): Promise<Task> {
    return Iland.getHttp().delete(`/vdcs/${this.uuid}/macsets/${macsetUuid}`).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Get application.
   * @params {string} applicationId
   * @returns {Promise<Application>}
   */
  /* istanbul ignore next: autogenerated */
  async getApplication(applicationId: string): Promise<Application> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/applications/${applicationId}`).then((response) => {
      const json = response.data as ApplicationJson;
      return new Application(json);
    });
  }

  /**
   * Get application list.
   * @returns {Promise<Array<Application>>}
   */
  /* istanbul ignore next: autogenerated */
  async getApplications(): Promise<Array<Application>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/applications`).then((response) => {
      const json = response.data.data as Array<ApplicationJson>;
      return json.map((it) => new Application(it));
    });
  }

  /**
   * Get application group.
   * @params {string} applicationId
   * @returns {Promise<ApplicationGroup>}
   */
  /* istanbul ignore next: autogenerated */
  async getApplicationGroup(applicationId: string): Promise<ApplicationGroup> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/application-groups/${applicationId}`).then((response) => {
      const json = response.data as ApplicationGroupJson;
      return new ApplicationGroup(json);
    });
  }

  /**
   * Get application group list.
   * @returns {Promise<Array<ApplicationGroup>>}
   */
  /* istanbul ignore next: autogenerated */
  async getApplicationGroups(): Promise<Array<ApplicationGroup>> {
    return Iland.getHttp().get(`/vdcs/${this.uuid}/application-groups`).then((response) => {
      const json = response.data.data as Array<ApplicationGroupJson>;
      return json.map((it) => new ApplicationGroup(it));
    });
  }
}

applyMixins(Vdc, [EntityWithPerfSamples]);
