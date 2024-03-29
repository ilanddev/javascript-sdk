import { Entity } from '../common/entity';
import { O365JobBackupType, O365JobJson, O365JobSchedulePolicy, O365JobStatus } from './__json__/o365-job-json';
import { Iland } from '../../iland';
import { EntityType } from '../common/__json__/entity-type';
import { O365JobSession } from './o365-job-session';
import { O365JobSessionJson } from './__json__/O365-job-session-json';
import { O365RestoreSession } from './o365-restore-session';
import { O365RestoreSessionJson } from './__json__/o365-restore-session-json';
import { O365RestoreSessionStartRequest } from './o365-restore-session-start-request';
import { O365JobSchedulePolicyRequest } from './o365-job-schedule-policy-request';
import { O365BackupJobSelectedExcludedItems } from './__json__/o365-job-selected-excluded-items';
import { O365JobRequest } from './o365-job-request';

/**
 * O365 Backup Job entity
 */
/* istanbul ignore next: autogenerated */
export class O365Job extends Entity {

  constructor(private _json: O365JobJson) {
    super(_json);
  }

  /**
   * Get a O365 Job by UUID
   * @param uuid
   * @returns {Promise<O365Job>} promise that resolves with a O365 Job
   */
  static async getO365Job(uuid: string): Promise<O365Job> {
    return Iland.getHttp().get(`/o365-jobs/${uuid}`).then((res) => {
      const json = res.data as O365JobJson;
      return new O365Job(json);
    });
  }

  /**
   * Get the O365 Job entity type
   * @returns {EntityType}
   */
  get entityType(): EntityType {
    return 'O365_JOB';
  }

  /**
   * Get the location id of the O365 Job
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get the O365 organization uuid of the O365 Job
   * @returns {string}
   */
  get o365OrganizationUuid(): string {
    return this._json.o365_organization_uuid;
  }

  /**
   * Get the O365 Job description
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get the Last Run of the O365 Job
   * @returns {number}
   */
  get lastRun(): number {
    return this._json.last_run;
  }

  /**
   * Get the Next Run of the O365 Job
   * @returns {number}
   */
  get nextRun(): number {
    return this._json.next_run;
  }

  /**
   * Is the O365 Job enabled
   * @returns {boolean}
   */
  get isEnabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get the O365 Job Backup Type
   * @returns {O365JobBackupType}
   */
  get backupType(): O365JobBackupType {
    return this._json.backup_type;
  }

  /**
   * Get the last status of the O365 Job
   * @returns {O365JobStatus}
   */
  get lastStatus(): O365JobStatus {
    return this._json.last_status;
  }

  /**
   * Get the schedule policy of the O365 Job
   * @returns {O365JobSchedulePolicy}
   */
  get schedulePolicy(): O365JobSchedulePolicy {
    return this._json.schedule_policy;
  }

  /**
   * Indicates whether the Backup Job has the OneDrive service
   * @returns {boolean}
   */
  get hasOneDrive(): boolean {
    return this._json.type_veod;
  }

  /**
   * Indicates whether the Backup Job has the Exchange service
   * @returns {boolean}
   */
  get hasExchange(): boolean {
    return this._json.type_vex;
  }

  /**
   * Indicates whether the Backup Job has the SharePoint service
   * @returns {boolean}
   */
  get hasSharepoint(): boolean {
    return this._json.type_vesp;
  }

  /**
   * Indicates whether the Backup Job has the Teams service
   * @returns {boolean}
   */
  get hasTeams(): boolean {
    return this._json.type_vet;
  }

  /**
   * Gets the Excluded Items for a SelectedItems type of Backup Job
   * @returns {O365BackupJobSelectedExcludedItems | null}
   */
  get excludedItems(): O365BackupJobSelectedExcludedItems | null {
    return this._json.excluded_items ? new O365BackupJobSelectedExcludedItems(this._json.excluded_items) : null;
  }

  /**
   * Gets the Selected Items for a SelectedItems type of Backup Job
   * @returns {O365BackupJobSelectedExcludedItems | null}
   */
  get selectedItems(): O365BackupJobSelectedExcludedItems | null {
    return this._json.selected_items ? new O365BackupJobSelectedExcludedItems(this._json.selected_items) : null;
  }

  /**
   * Indicates whether the Backup Job has at least 1 restore session with a status of success or warning
   * @returns {boolean}
   */
  get restoreSessionExist(): boolean {
    return this._json.is_restore_session_exist;
  }

  /**
   * Refreshes the O365 Job data by retrieving it from the API again.
   * @return {Promise<O365Job>}
   */
  async refresh(): Promise<O365Job> {
    return Iland.getHttp().get(`/o365-jobs/${this.uuid}`).then((response) => {
      this._json = response.data as O365JobJson;
      return this;
    });
  }

  /**
   * Gets paginated Job Sessions for O365 Job
   * @param {number} [page]
   * @param {number} [pageSize]
   * @returns {Promise<Array<O365JobSession>>}
   */
  /* istanbul ignore next: autogenerated */
  async getJobSessions(page?: number, pageSize?: number): Promise<Array<O365JobSession>> {
    return Iland.getHttp().get(`/o365-jobs/${this.uuid}/job-sessions`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365JobSessionJson>;
      return json.map((it) => new O365JobSession(it));
    });
  }

  /**
   * Start an O365 Restore Session
   * @param {O365RestoreSessionStartRequest} request
   * @returns {Promise<O365RestoreSession>} the restore session created
   */
  /* istanbul ignore next: autogenerated */
  async startRestoreSession(request: O365RestoreSessionStartRequest): Promise<O365RestoreSession> {
    return Iland.getHttp().post(`/o365-jobs/${this.uuid}/actions/start-restore-session`, request.json)
        .then((response) => {
          const json = response.data as O365RestoreSessionJson;
          return new O365RestoreSession(json);
        });
  }

  /**
   * Start O365 Backup Job
   * @return {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async startJob(): Promise<any> {
    return Iland.getHttp().post(`/o365-jobs/${this.uuid}/actions/start-backup-job`);
  }

  /**
   * Stop O365 Backup Job
   * @return {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async stopJob(): Promise<any> {
    return Iland.getHttp().post(`/o365-jobs/${this.uuid}/actions/stop-backup-job`);
  }

  /**
   * Enable O365 Backup Job
   * @return {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async enableJob(): Promise<any> {
    return Iland.getHttp().post(`/o365-jobs/${this.uuid}/actions/enable`);
  }

  /**
   * Disable O365 Backup Job
   * @return {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async disableJob(): Promise<any> {
    return Iland.getHttp().post(`/o365-jobs/${this.uuid}/actions/disable`);
  }

  /**
   * Modify an O365 Job's schedule policy
   * @param {O365JobSchedulePolicyRequest} request - the job schedule policy request object
   * @returns {Promise<O365Job>} the modified o365 job
   */
  /* istanbul ignore next: autogenerated */
  async updateSchedulePolicy(request: O365JobSchedulePolicyRequest): Promise<O365Job> {
    return Iland.getHttp().put(`/o365-jobs/${this.uuid}/actions/modify`, request.json).then((response) => {
      this._json = response.data as O365JobJson;
      return this;
    });
  }

  /**
   * Modify an O365 backup job
   * @param {O365JobRequest} request
   * @returns {Promise<O365Job>}
   */
  /* istanbul ignore next: autogenerated */
  async updateJob(request: O365JobRequest): Promise<O365Job> {
    return Iland.getHttp().put(`/o365-jobs/${this.uuid}/actions/modifyJob`, request.json).then((response) => {
      this._json = response.data as O365JobJson;
      return this;
    });
  }

  /**
   * Delete O365 Backup Job
   * @return {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async deleteJob(): Promise<any> {
    return Iland.getHttp().delete(`/o365-jobs/${this.uuid}`);
  }

}
