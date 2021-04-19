import { OrgIntegratedBackupStatusJson } from './__json__/org-integrated-backup-status-json';
import { IntegratedBackupStatus } from './__json__/integrated-backup-status';
import { VdcIntegratedBackupStatus } from './vdc-integrated-backup-status';

/**
 * Org Integrated Backup Status.
 */
/* istanbul ignore next: autogenerated */
export class OrgIntegratedBackupStatus {

  constructor(private _json: OrgIntegratedBackupStatusJson) {
  }

  /**
   * Get the UUID of the org.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get the org's backup configuration status.
   * @returns {IntegratedBackupStatus}
   */
  get status(): IntegratedBackupStatus {
    return this._json.status;
  }

  /**
   * Get the statuses of child vDCs.
   * @returns {Array<VdcIntegratedBackupStatus>}
   */
  get vdcStatuses() {
    return this._json.vdc_statuses.map(it => new VdcIntegratedBackupStatus(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {OrgIntegratedBackupStatusJson}
   */
  get json(): OrgIntegratedBackupStatusJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}