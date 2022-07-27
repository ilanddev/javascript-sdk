import { Iland } from '../../iland';
import { BaJobBottleneck, BaJobJson, BaJobSchedulingType, BaJobStatus, BaJobType } from './__json__/ba-job';
import { Task } from '../task/task';
import { TaskJson } from '../task/__json__/task-json';

/* istanbul ignore next: autogenerated */
export class BaJob {

  constructor(private _json: BaJobJson) {
  }

  /**
   * Get a VAC Job by UUID
   * @param uuid
   * @returns {Promise<BaJob>} promise that resolves with a VAC Job
   */
  static async getBackupJob(uuid: string): Promise<BaJob> {
    return Iland.getHttp().get(`/vac-jobs/${uuid}`).then((res) => {
      const json = res.data as BaJobJson;
      return new BaJob(json);
    });
  }

  /**
   * Get the UUID.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Name of the job configured in Veeam Backup & Replication.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Status of the latest job session. Possible values: Success, Warning, Failed, Running, No Info
   * @returns {BaJobStatus}
   */
  get status(): BaJobStatus {
    return this._json.status;
  }

  /**
   * Veeam Backup & Replication job type.
   * @returns {BaJobType}
   */
  get type(): BaJobType {
    return this._json.type;
  }

  /**
   * Gets date and time when the latest job session started.
   * @returns {Date | null}
   */
  get lastRun(): Date | null {
    return this._json.last_run ? new Date(this._json.last_run) : null;
  }

  /**
   * Gets date and time when the latest job session finished.
   * @returns {Date | null}
   */
  get endTime(): Date | null {
    return this._json.end_time ? new Date(this._json.end_time) : null;
  }

  /**
   * Gets time taken to complete the latest job session in seconds.
   * @returns {number}
   */
  get duration(): number {
    return this._json.duration;
  }

  /**
   * Gets rate at which VM data was processed during the latest job session in bytes per second (MB/s).
   * @returns {number}
   */
  get processionRate(): number {
    return this._json.procession_rate;
  }

  /**
   * Gets average time taken to complete a job session in seconds.
   * @returns {number}
   */
  get avgDuration(): number {
    return this._json.avg_duration;
  }

  /**
   * Gets total amount of data that was transferred to target during the latest job session in MB.
   * @returns {number}
   */
  get transferredData(): number {
    return this._json.transferred_data;
  }

  /**
   * Gets bottleneck in the process of transferring the data from source to target.
   * @returns {BaJobBottleneck}
   */
  get bottleneck(): BaJobBottleneck {
    return this._json.bottleneck;
  }

  /**
   * Gets name of the Veeam Backup & Replication or Veeam Cloud Connect server on which a job was configured.
   * @returns {string}
   */
  get serverName(): string {
    return this._json.server_name;
  }

  /**
   * Indicates whether a job schedule is enabled.
   * @returns {boolean}
   */
  get isEnabled(): boolean {
    return this._json.is_enabled;
  }

  /**
   * Gets number of VMs protected by the job.
   * @returns {number}
   */
  get protectedVms(): number {
    return this._json.protected_vms;
  }

  /**
   * Gets type of schedule configured for the job.
   * @returns {BaJobSchedulingType}
   */
  get schedulingType(): BaJobSchedulingType {
    return this._json.scheduling_type;
  }

  /**
   * Gets the company id.
   * @returns {string}
   */
  get companyId(): string {
    return this._json.company_id;
  }

  /**
   * Gets the location id.
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the iland company uuid for the VAC job.
   * @returns {string}
   */
  get companyUuid(): string {
    return this._json.company_uuid;
  }

  /**
   * Get the json representation of this class.
   * @returns {BaJobJson}
   */
  get json(): BaJobJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Refreshes the VAC Job data by retrieving it from the API again.
   * @returns {Promise<BaJob>}
   */
  async refresh(): Promise<BaJob> {
    return Iland.getHttp().get(`/vac-jobs/${this.uuid}`).then((response) => {
      this._json = response.data as BaJobJson;
      return this;
    });
  }

  /**
   * Enable a VAC job.
   * @returns {Promise<Task>>}
   */
  async enableVacJob(): Promise<Task> {
    return Iland.getHttp().post(`/vac-jobs/${this.uuid}/action/enable`).then((response) => {
      const taskJson = response.data as TaskJson;
      return new Task(taskJson);
    });
  }

  /**
   * Disable a VAC job.
   * @returns {Promise<Task>>}
   */
  async disableVacJob(): Promise<Task> {
    return Iland.getHttp().post(`/vac-jobs/${this.uuid}/action/disable`).then((response) => {
      const taskJson = response.data as TaskJson;
      return new Task(taskJson);
    });
  }

  /**
   * Start a VAC job.
   * @returns {Promise<Task>}
   */
  async startVacJob(): Promise<Task> {
    return Iland.getHttp().post(`/vac-jobs/${this.uuid}/action/start`).then((response) => {
      const taskJson = response.data as TaskJson;
      return new Task(taskJson);
    });
  }

  /**
   * Stop a VAC job.
   * @returns {Promise<Task>}
   */
  async stopVacJob(): Promise<Task> {
    return Iland.getHttp().post(`/vac-jobs/${this.uuid}/action/stop`).then((response) => {
      const taskJson = response.data as TaskJson;
      return new Task(taskJson);
    });
  }

  /**
   * Retry a VAC job.
   * @returns {Promise<Task>}
   */
  async retryVacJob(): Promise<Task> {
    return Iland.getHttp().post(`/vac-jobs/${this.uuid}/action/retry`).then((response) => {
      const taskJson = response.data as TaskJson;
      return new Task(taskJson);
    });
  }

  /**
   * Get the history for a VAC job given a start and end date.
   * If start or end is not passed then it defaults start to a week ago and sets end as current time.
   * @param {number} start Start date in milliseconds
   * @param {number} end End date in milliseconds
   * @returns {Promise<Array<BaJob>>} List of jobs for the given period
   */
  /* istanbul ignore next: autogenerated */
  async getVacJobHistory(start?: number, end?: number): Promise<Array<BaJob>> {
    return Iland.getHttp().get(`/vac-jobs/${this.uuid}/history`, {
      params: {
        start: start,
        end: end
      }
    }).then((response) => {
      const json = response.data.data as Array<BaJobJson>;
      return json.map((it) => new BaJob(it));
    });
  }
}
