import { Entity } from '../common/entity';
import { EntityType } from '../common/__json__/entity-type';
import { O365OrganizationJson, O365OrganizationRegion, O365OrganizationType } from './__json__/o365-organization-json';
import { Iland } from '../../iland';
import { O365JobJson } from './__json__/o365-job-json';
import { O365Job } from './o365-job';
import { O365RestoreSession } from './o365-restore-session';
import { O365RestoreSessionJson } from './__json__/o365-restore-session-json';
import { O365RestoreSessionStartRequest } from './o365-restore-session-start-request';
import { O365User } from './o365-user';
import { O365UserJson } from './__json__/o365-user-json';
import { O365Group } from './o365-group';
import { O365GroupJson } from './__json__/o365-group-json';
import { O365JobRequest } from './o365-job-request';
import { O365ModifyCredentialsRequest } from './o365-modify-credentials-request';
import { O365SharePointSite } from './o365-sharepoint-site';
import { O365SharePointSiteJson } from './__json__/o365-sharepoint-site-json';
import { O365BackupRepository } from '../company/o365-backup-repository';
import { O365BackupRepositoryJson } from '../company/__json__/o365-backup-repository-json';
import { Http } from '../../service/http/http';
import { O365Team } from './o365-team';
import { O365TeamJson } from './__json__/o365-team-json';

/**
 * O365 Organization
 */
/* istanbul ignore next: autogenerated */
export class O365Organization extends Entity {

  constructor(private _json: O365OrganizationJson) {
    super(_json);
  }

  /**
   * Gets a O365 Organization by UUID
   * @param uuid
   * @returns {Promise<O365Organization>} promise that resolves with a O365 Organization
   */
  static async getO365Organization(uuid: string): Promise<O365Organization> {
    return Iland.getHttp().get(`/o365-organizations/${uuid}`).then((response) => {
      const json = response.data as O365OrganizationJson;
      return new O365Organization(json);
    });
  }

  /**
   * Get the O365 Organization entity type
   * @returns {EntityType}
   */
  get entityType(): EntityType {
    return 'O365_ORGANIZATION';
  }

  /**
   * Gets the CRM of the O365 Organization
   * @returns {string}
   */
  get crm(): string {
    return this._json.crm;
  }

  /**
   * Gets the location id of the O365 Organization
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the contract uuid of the O365 Organization
   * @returns {string}
   */
  get contractUuid(): string {
    return this._json.contract_uuid;
  }

  /**
   * Gets the Type of the O365 Organization
   * @returns {O365OrganizationType}
   */
  get type(): O365OrganizationType {
    return this._json.type;
  }

  /**
   * Gets the region of the O365 Organization
   * @returns {O365OrganizationRegion}
   */
  get region(): O365OrganizationRegion {
    return this._json.region;
  }

  /**
   * Get whether to use modern authentication.
   * @returns {boolean}
   */
  get useModernAuth(): boolean {
    return this._json.use_modern_auth;
  }

  /**
   * Is O365 Organization backed up
   * @returns {boolean}
   */
  get isBackedUp(): boolean {
    return this._json.is_backed_up;
  }

  /**
   * Gets the first backup time of the O365 Organization
   * @returns {Date}
   */
  get firstBackupTime(): Date {
    return this._json.first_backup_time;
  }

  /**
   * Gets the last backup time of the O365 Organization
   * @returns {Date}
   */
  get lastBackupTime(): Date {
    return this._json.last_backup_time;
  }

  /**
   * Is the O365 Organization teams online
   * @returns {boolean}
   */
  get isTeamsOnline(): boolean {
    return this._json.is_teams_online;
  }

  /**
   * Is the O365 Organization exchange online
   * @returns {boolean}
   */
  get isExchangeOnline(): boolean {
    return this._json.is_exchange_online;
  }

  /**
   * Is the O365 Organization sharePoint online
   * @returns {boolean}
   */
  get isSharePointOnline(): boolean {
    return this._json.is_share_point_online;
  }

  /**
   * Is O365 Organization in trial
   * @returns {boolean}
   */
  get isTrial(): boolean {
    return this._json.is_trial;
  }

  /**
   * Get the total number of backed up active users of account type User.
   * @returns {number}
   */
  get protectedActiveUsers(): number {
    return this._json.protected_active_users;
  }

  /**
   * Get the total number of backed up inactive users of account type User.
   * @returns {number}
   */
  get protectedInactiveUsers(): number {
    return this._json.protected_inactive_users;
  }

  /**
   * Get the total number of backed up users of account type User.
   * @returns {number}
   */
  get totalProtectedUsers(): number {
    return this._json.total_protected_users;
  }

  /**
   * Get the total number of backed up Group/Shared/Public users.
   * @returns {number}
   */
  get protectedSharedUsers(): number {
    return this._json.protected_shared_users;
  }

  /**
   * Get the total number of active users with account type User.
   * @returns {number}
   */
  get totalLicensedUsers(): number {
    return this._json.total_licensed_users;
  }

  /**
   * Get the total number of unprotected active users with account type User.
   * @returns {number}
   */
  get unprotectedLicensedUsers(): number {
    return this._json.unprotected_licensed_users;
  }

  /**
   * Get the number of reserved licenses (per the O365 Org's contract).
   * @returns {number}
   */
  get numberOfReservedLicenses(): number {
    return this._json.number_of_reserved_licenses;
  }

  /**
   * Get the number of licenses used by this O365 Org.
   * @returns {number}
   */
  get numberOfLicensesUsed(): number {
    return this._json.number_of_licenses_used;
  }

  /**
   * Get total users of the O365 Organization
   * @deprecated This O365 Org field is deprecated
   */
  get totalUsers(): number {
    return this._json.total_users;
  }

  /**
   * Get total backed up users of the O365 Organization
   * @deprecated This O365 Org field is deprecated
   */
  get totalBackedupUsers(): number {
    return this._json.total_backedup_users;
  }

  /**
   * Get total licenses consumed by O365 Organization
   * @deprecated This O365 Org field is deprecated
   * @returns {number}
   */
  get totalLicensesConsumed(): number {
    return this._json.total_licenses_consumed;
  }

  /**
   * Get total unprotected users of the O365 Organization
   * @deprecated This O365 Org field is deprecated
   */
  get unprotectedUsers(): number {
    return this._json.unprotected_users;
  }

  /**
   * Refreshes the O365 Organization data by retrieving it from the API again.
   * @returns {Promise<O365Organization>} promise that resolves with this object
   */
  async refresh(): Promise<O365Organization> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}`).then((response) => {
      this._json = response.data as O365OrganizationJson;
      return this;
    });
  }

  /**
   * Get O365Organization Jobs.
   * @returns {Promise<Array<O365Job>>}
   */
  /* istanbul ignore next: autogenerated */
  async getJobs(): Promise<Array<O365Job>> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}/jobs`).then((response) => {
      const json = response.data.data as Array<O365JobJson>;
      return json.map((it) => new O365Job(it));
    });
  }

  /**
   * Get O365 Organization's Inactive Restore Sessions
   * Ordered by creation time for the pagination
   * @param {number} page - page to get the restore sessions from. API page holds max 100 entries
   * @param {number} pageSize - how many restore sessions from a certain page to get, cannot get more than 100
   * @returns {Promise<Array<O365RestoreSession>>}
   */
  /* istanbul ignore next: autogenerated */
  async getInactiveRestoreSessions(page?: number, pageSize?: number): Promise<Array<O365RestoreSession>> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}/inactive-restore-sessions`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365RestoreSessionJson>;
      return json.map((it) => new O365RestoreSession(it));
    });
  }

  /**
   * Get O365 Organization's Active Restore Sessions
   * @returns {Promise<Array<O365RestoreSession>>}
   */
  /* istanbul ignore next: autogenerated */
  async getActiveRestoreSessions(): Promise<Array<O365RestoreSession>> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}/active-restore-sessions`).then((response) => {
      const json = response.data.data as Array<O365RestoreSessionJson>;
      return json.map((it) => new O365RestoreSession(it));
    });
  }

  /**
   * Start an O365 Restore Session
   * @param {O365RestoreSessionStartRequest} startRequest
   * @returns {Promise<O365RestoreSession>} the restore session created
   */
  /* istanbul ignore next: autogenerated */
  async createRestoreSession(startRequest: O365RestoreSessionStartRequest): Promise<O365RestoreSession> {
    return Iland.getHttp().post(`/o365-organizations/${this.uuid}/actions/start-restore-session`, startRequest.json)
        .then((response) => {
          const json = response.data as O365RestoreSessionJson;
          return new O365RestoreSession(json);
        });
  }

  /**
   * Get the paginated users for the Office 365 Organization
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365User>>}
   */
  /* istanbul ignore next: autogenerated */
  async getOrgUsers(page?: number, pageSize?: number): Promise<Array<O365User>> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}/users`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365UserJson>;
      return json.map((it) => new O365User(it));
    });
  }

  /**
   * Delete the O365 Organization
   * @returns {Promise}
   */
  /* istanbul ignore next: autogenerated */
  async deleteOrg(): Promise<unknown> {
    return Iland.getHttp().delete(`/o365-organizations/${this.uuid}`);
  }

  /**
   * Get the O365 Organization's groups
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365Group>>}
   */
  /* istanbul ignore next: autogenerated */
  async getOrgGroups(page?: number, pageSize?: number): Promise<Array<O365Group>> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}/groups`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365GroupJson>;
      return json.map((it) => new O365Group(it));
    });
  }

  /**
   * Create an o365 backup job for this organization
   * @param o365CreateJobRequest {O365JobRequest}
   * @returns {Promise<O365Job>} the backup job created
   */
  /* istanbul ignore next: autogenerated */
  async createBackupJob(o365CreateJobRequest: O365JobRequest): Promise<O365Job> {
    return Iland.getHttp().post(`/o365-organizations/${this.uuid}/actions/create-job`, o365CreateJobRequest.json)
        .then((response) => {
          const json = response.data as O365JobJson;
          return new O365Job(json);
        });
  }

  /**
   * Modify the credentials of a Microsoft Office 365 VBO organization given its uuid
   * @params request {O365ModifyCredentialsRequest}
   * @returns {Promise<unknown>}
   */
  /* istanbul ignore next: autogenerated */
  async modifyCredentials(request: O365ModifyCredentialsRequest): Promise<unknown> {
    return Iland.getHttp().post(`/o365-organizations/${this.uuid}/actions/modify`, request.json);
  }

  /**
   * Get the O365 Organization's SharePoint sites
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365SharePointSite>>}
   */
  /* istanbul ignore next: autogenerated */
  async getOrgSites(page?: number, pageSize?: number): Promise<Array<O365SharePointSite>> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}/sharepoint-sites`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365SharePointSiteJson>;
      return json.map((it) => new O365SharePointSite(it));
    });
  }

  /**
   * Get the O365 Organization's Teams
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365Team>>}
   */
  /* istanbul ignore next: autogenerated */
  async getOrgTeams(page?: number, pageSize?: number): Promise<Array<O365Team>> {
    return Iland.getHttp().get(`o365-organizations/${this.uuid}/teams`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365TeamJson>;
      return json.map((it) => new O365Team(it));
    });
  }

  /**
   * Get the O365 Organization's backup repositories to use in creation of a Backup Job
   * @returns {Promise<Array<O365BackupRepository>>}
   */
  /* istanbul ignore next: autogenerated */
  async getOrgRepositories(): Promise<Array<O365BackupRepository>> {
    return Iland.getHttp().get(`/o365-organizations/${this.uuid}/backup-repositories`).then((response) => {
      const json = response.data.data as Array<O365BackupRepositoryJson>;
      return json.map(it => new O365BackupRepository(it));
    });
  }

  /**
   * Get the O365 organization users download in csv format
   * @param downloadProgress {function} optional progress callback if user wishes to receive progress events
   * for their download
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async downloadUsers(downloadProgress?: (e: any) => void): Promise<Blob> {
    return Iland.getHttp().post(`/o365-organizations/${this.uuid}/users-export`, null, {
      headers: {
        'Accept': Http.versionMime('application/octet-stream')
      },
      responseType: 'arraybuffer',
      onDownloadProgress: downloadProgress
    }).then((response) => {
      return new Blob([response.data], { type: 'text/csv' });
    });
  }
}
