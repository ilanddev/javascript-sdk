import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Iland } from '../../iland';
import { ServiceProfileJson, VpgJson, VpgVmJson } from './__json__/vpg';
import { VpgSubEntityRequest } from './__json__/vpg-sub-entity-request';
import { VpgFailoverTestAlertJson } from './vpg-failover/__json__/vpg-failover-test-alert';
import { VpgFailoverTestAlert } from './vpg-failover/vpg-failover-test-alert';
import { VpgFailoverTestAlertRequest } from './vpg-failover/vpg-failover-test-alert-request';
import { Task } from '../task/task';
import { VpgFailoverCreateRequest } from './vpg-failover/vpg-failover-create-request';
import { VpgCheckpoint } from './vpg-checkpoint/vpg-checkpoint';
import { VpgCheckpointJson } from './vpg-checkpoint/__json__/vpg-checkpoint';
import { VpgFailoverReportDetailsJson } from './vpg-failover/__json__/vpg-failover-report-detail';
import { VpgFailoverReportDetails } from './vpg-failover/vpg-failover-report-details';
import { ServiceProfile } from './service-profile';
import { VpgVm } from './vpg-vm';
import { VpgEntities } from './vpg-entities';
import { Entity } from '../common/entity';
import { EntityType } from '../common/__json__/entity-type';
import { TaskJson } from '../task/__json__/task-json';
import { Http } from '../../service/http/http';
import { VpgStatus } from './__json__/vpg-status-type';
import { VpgSubStatus } from './__json__/vpg-sub-status-type';
import { VpgPriority } from './__json__/vpg-priority-type';
import { ActiveProcessStage } from './__json__/vpg-active-process-stage';
import { PerfCounter } from '../mixins/perf-samples/perf-counter';
import { PerfCounterJson, PerfSamplesSeriesJson } from '../mixins/perf-samples/__json__/perf-samples';
import { PerfSamplesSeries } from '../mixins/perf-samples/perf-samples-series';

/**
 * Virtual Protection Group
 */
export class Vpg extends Entity {

  constructor(private _json: VpgJson) {
    super(_json);
  }

  /**
   * Gets a Vpg by UUID.
   * @param {string} uuid vpg UUID
   * @param {Array<VpgSubEntityRequest>} vpgSubEntities query params
   * @returns {Promise<Vpg>} promise that resolves with the Vpg
   */
  static async getVpg(uuid: string, vpgSubEntities: Array<VpgSubEntityRequest>): Promise<Vpg> {
    return Iland.getHttp().get(`/vpgs/${uuid}`, {
      params: {
        expand: vpgSubEntities
      }
    }).then((response) => {
      const apiVpg = response.data as VpgJson;
      return new Vpg(apiVpg);
    });
  }

  get entityType(): EntityType {
    return 'IAAS_VPG';
  }

  /**
   * Get service profile for Vpg
   * @returns {ServiceProfile} service profile
   */
  get serviceProfile(): ServiceProfile {
    return new ServiceProfile(this._json.service_profile);
  }

  /**
   * Get VMs for Vpg
   * @returns {Array<VpgVm>} list of Vpg VMs
   */
  get vms(): Array<VpgVm> {
    return this._json.vms.map((vm) => new VpgVm(vm));
  }

  /**
   * Get the org uuid of Vpg
   * @returns {string} org uuid
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get the location id of Vpg
   * @returns {string} location id
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get service profile uuid of Vpg
   * @returns {string} service profile uuid
   */
  get serviceProfileUuid(): string {
    return this._json.service_profile_uuid;
  }

  /**
   * Get the Vpg identifier of Vpg
   * @returns {string} vpg identifier
   */
  get vpgIdentifier(): string {
    return this._json.vpg_identifier;
  }

  /**
   * Get the Vpg name
   * @returns {string} name
   */
  get vpgName(): string {
    return this._json.vpg_name;
  }

  /**
   *  Get org name of Vpg
   * @returns {string} org name
   */
  get orgName(): string {
    return this._json.organization_name;
  }

  /**
   * Get actual rpo of Vpg
   * @returns {number} actual rpo
   */
  get actualRpo(): number {
    return this._json.actual_rpo;
  }

  /**
   * Get entities for Vpg
   * @returns {VpgEntities} entities
   */
  get entities(): VpgEntities {
    return new VpgEntities(this._json.entities);
  }

  /**
   * Get status of Vpg
   * @returns {VpgStatus} status
   */
  get status(): VpgStatus {
    return this._json.status;
  }

  /**
   * Get sub status of Vpg
   * @returns {VpgSubStatus} sub status
   */
  get subStatus(): VpgSubStatus {
    return this._json.sub_status;
  }

  /**
   * Get priority of Vpg
   * @returns {VpgPriority} priority
   */
  get priority(): VpgPriority {
    return this._json.priority;
  }

  /**
   * Get VMs count for Vpg
   * @returns {number} VMs count
   */
  get vmsCount(): number {
    return this._json.vms_count;
  }

  /**
   * Get last test for Vpg
   * @returns {number} last test
   */
  get lastTest(): number {
    return this._json.last_test;
  }

  /**
   * Get source site for Vpg
   * @returns {string} source sit
   */
  get sourceSite(): string {
    return this._json.source_site;
  }

  /**
   * Get target site for Vpg
   * @returns {string} target site
   */
  get targetSite(): string {
    return this._json.target_site;
  }

  /**
   * Get provisioned storage in mb for Vpg
   * @returns {number} provisioned storage in bm
   */
  get provisionedStorageInMb(): number {
    return this._json.provisioned_storage_in_mb;
  }

  /**
   * Get used storage in percent for Vpg
   * @returns {number} used storage in percent
   */
  get usedStorageInMb(): number {
    return this._json.used_storage_in_mb;
  }

  /**
   * Get iops for Vpg
   * @returns {number} iops
   */
  get iops(): number {
    return this._json.iops;
  }

  /**
   * Get throughput in mb for Vpg
   * @returns {number} throughput in mb
   */
  get throughputInMb(): number {
    return this._json.throughput_in_mb;
  }

  /**
   * Get service profile identifier for Vpg
   * @returns {string} service profile identifier
   */
  get serviceProfileIdentifier(): string {
    return this._json.service_profile_identifier;
  }

  /**
   * Get is backup enabled boolean for Vpg
   * @returns {boolean} backup enabled
   */
  get isBackupEnabled(): boolean {
    return this._json.backup_enabled;
  }

  /**
   * Get recovery site identifier for Vpg
   * @returns {string} recovery site identifier
   */
  get recoverySiteIdentifier(): string {
    return this._json.recovery_site_identifier;
  }

  /**
   * Get protected site identifer for Vpg
   * @returns {string} protected site identifier
   */
  get protectedSiteIdentifier(): string {
    return this._json.protected_site_identifier;
  }

  /**
   * Get active provess stage for Vpg
   * @returns {ActiveProcessStage} active process stage
   */
  get activeProcessStage(): ActiveProcessStage {
    return this._json.active_process_stage;
  }

  /**
   * Get recovery journal used storage in gb for Vpg
   * @returns {number} recovery journal used storage in gb
   */
  get recoveryJournalUsedStorageGb(): number {
    return this._json.recovery_journal_used_storage_gb;
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
   * @returns {VpgJson} the API Vpg object
   */
  get json(): VpgJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the failover test alert for Vpg
   * @returns {Promise<VpgFailoverTestAlert>} vpg failover test alert
   */
  async getVpgFailoverTestAlert(): Promise<VpgFailoverTestAlert> {
    return Iland.getHttp().get(`/vpgs/${this.uuid}/failover-test-alerts`).then((response) => {
      const json = response.data as VpgFailoverTestAlertJson;
      return new VpgFailoverTestAlert(json);
    });
  }

  /**
   * Add a Vpg Failover Test Alert
   * @param {VpgFailoverTestAlertRequest} alertRequest
   * @returns {Promise<VpgFailoverTestAlert>}
   */
  async addVpgFailoverTestAlert(alertRequest: VpgFailoverTestAlertRequest): Promise<VpgFailoverTestAlert> {
    return Iland.getHttp().post(`/vpgs/${this.uuid}/actions/add-failover-test-alert`, alertRequest.json)
      .then((response) => {
        const json = response.data as VpgFailoverTestAlertJson;
        return new VpgFailoverTestAlert(json);
      });
  }

  /**
   * Remove a Vpg Failover Test Alert
   * @returns {Promise<any>}
   */
  async removeVpgFailoverTestAlert(): Promise<any> {
    return Iland.getHttp().delete(`/vpgs/${this.uuid}/actions/remove-failover-test-alert`, {});
  }

  /**
   * Returns VPG performance samples given a performance series information
   * @param {string} group
   * @param {string} name
   * @param {string} type
   * @param {number} start
   * @param {number} end
   * @returns {Promise<PerfSampleSerie>} perf sample serie
   */
  async getVpgPerfFor(group: string, name: string, type: string,
                      start?: number, end?: number): Promise<PerfSamplesSeries> {
    return Iland.getHttp().get(`/vpgs/${this.uuid}/performance/${group}::${name}::${type}`, {
      params: {
        start: start,
        end: end
      }
    }).then((response) => {
      const perfSampleJson = response.data as PerfSamplesSeriesJson;
      return new PerfSamplesSeries(perfSampleJson);
    });
  }

  /**
   * Test failover for Vpg.
   * @param {string} checkpointId
   * @returns {Promise<Task>} task
   */
  async failoverTest(checkpointId: string): Promise<Task> {
    const failoverTestCreateRequest = {
      checkpoint_id: checkpointId
    };
    return Iland.getHttp().post(`/vpgs/${this.uuid}/actions/failover-test`, failoverTestCreateRequest)
      .then((response) => {
        const taskJson = response.data as TaskJson;
        return new Task(taskJson);
      });
  }

  /**
   * Stop a Vpg failover test and provide feedback as to whether the test was successful
   * @param {boolean} success
   * @param {string} summary
   * @returns {Promise<Task>} task
   */
  async failoverTestStop(success: boolean, summary: string): Promise<Task> {
    const failoverTestStopRequest = {
      failover_test_success: success,
      failover_test_summary: summary
    };
    return Iland.getHttp().post(`/vpgs/${this.uuid}/actions/failover-test-stop`, failoverTestStopRequest)
      .then((response) => {
        const taskJson = response.data as TaskJson;
        return new Task(taskJson);
      });
  }

  /**
   * Gets the VMs that belong to the Vpg
   * @returns {Promise<Array<VpgVm>>} vpg vms
   */
  async getVmsForVpg(): Promise<Array<VpgVm>> {
    return Iland.getHttp().get(`/vpgs/${this.uuid}/vms`).then((response) => {
      const vms = response.data.data as Array<VpgVmJson>;
      return vms.map((vm) => new VpgVm(vm));
    });
  }

  /**
   * Gets the service profile for the Vpg
   * @returns {Promise<ServiceProfile>} service profile
   */
  async getServiceProfile(): Promise<ServiceProfile> {
    return Iland.getHttp().get(`/vpgs/${this.uuid}/service-profile`).then((response) => {
      const spJson = response.data as ServiceProfileJson;
      return new ServiceProfile(spJson);
    });
  }

  /**
   * Initiates a live failover on the Vpg
   * @param {VpgFailoverCreateRequest} failoverCreateRequest
   * @returns {Promise<Task>} task
   */
  async failover(failoverCreateRequest: VpgFailoverCreateRequest): Promise<Task> {
    return Iland.getHttp().post(`/vpgs/${this.uuid}/actions/failover`, failoverCreateRequest.json).then((response) => {
      const taskJson = response.data as TaskJson;
      return new Task(taskJson);
    });
  }

  /**
   * Commits changes after a live failover for Vpg
   * @returns {Promise<Task>} task
   */
  async commitFailover(): Promise<Task> {
    return Iland.getHttp().post(`/vpgs/${this.uuid}/actions/failover-commit`).then((response) => {
      const taskJson = response.data as TaskJson;
      return new Task(taskJson);
    });
  }

  /**
   * Rolls back changes after a live failover for Vpg
   * @returns {Promise<Task>} task
   */
  async rollbackFailover(): Promise<Task> {
    return Iland.getHttp().post(`/vpgs/${this.uuid}/actions/failover-rollback`).then((response) => {
      const taskJson = response.data as TaskJson;
      return new Task(taskJson);
    });
  }

  /**
   * Get checkpoints for Vpg
   * @returns {Promise<Array<VpgCheckpoint>>} vpg checkpoints
   */
  async getCheckpoints(): Promise<Array<VpgCheckpoint>> {
    return Iland.getHttp().get(`/vpgs/${this.uuid}/checkpoints`).then((response) => {
      const vpgCheckpoints = response.data.data as Array<VpgCheckpointJson>;
      return vpgCheckpoints.map((cp) => new VpgCheckpoint(cp));
    });
  }

  /**
   * Gets failover task details for a failover.
   * @param {string} taskUuid
   * @returns {Promise<VpgFailoverReportDetails>} vpg failover report detail
   */
  async getFailoverTaskDetails(taskUuid: string): Promise<VpgFailoverReportDetails> {
    return Iland.getHttp().get(`/vpgs/${this.uuid}/failover-task-details/${taskUuid}`).then((response) => {
      const reportJson = response.data as VpgFailoverReportDetailsJson;
      return new VpgFailoverReportDetails(reportJson);
    });
  }

  /**
   * Get a failover report file for a task
   * @param {string} reportUuid the UUID of the task to retrieve the report for
   * @param {string} fileName
   * @returns {Observable<String>}
   */
  downloadFailoverReport(reportUuid: string, fileName?: string): Observable<String> {
    let href = `${Iland.baseUrl}/vpgs/${this.uuid}/failover-reports/${reportUuid}?accept=` +
      encodeURIComponent(Http.versionMime('application/octet-stream'));
    if (fileName) {
      href = href + '&filename=' + encodeURIComponent(fileName);
    }
    const observable: Observable<string> = Iland.getAuthProvider().getTokenObservable();
    return observable.map(token => `${href}&oauth_token=${token}`);
  }

    /**
     * Get performance counters for vpg.
     * @return {Promise<Array<PerfCounter>>} performance counters
     */
    /* istanbul ignore next: autogenerated */
  async getPerformanceCounters(): Promise<Array<PerfCounter>> {
    return Iland.getHttp().get(`/vpgs/${this.uuid}/performance-counters`).then((response) => {
      const json = response.data.data as Array<PerfCounterJson>;
      return json.map((it) => new PerfCounter(it));
    });
  }
}
