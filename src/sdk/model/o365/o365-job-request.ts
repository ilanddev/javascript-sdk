import {
  GroupSelectedItem,
  O365JobRequestJson,
  PartialOrganizationSelectedItem,
  SiteSelectedItem,
  UserSelectedItem,
  TeamSelectedItem
} from './__json__/o365-job-request-json';
import { O365JobBackupType } from './__json__/o365-job-json';
import { O365JobSchedulePolicyRequest } from './o365-job-schedule-policy-request';

/**
 * O365 Create & Modify Job Request
 */
/* istanbul ignore next: autogenerated */
export class O365JobRequest {

  constructor(private _json: O365JobRequestJson) {
  }

  /**
   * Get O365 Job creation / modification request name
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get O365 Job creation / modification request description
   * @returns {string | undefined}
   */
  get description(): string | undefined {
    return this._json.description;
  }

  /**
   * Get O365 Job creation / modification request backup type
   * @returns {O365JobBackupType}
   */
  get backupType(): O365JobBackupType {
    return this._json.backup_type;
  }

  /**
   * Get O365 Job creation / modification request run now status
   * @returns {boolean}
   */
  get runNow(): boolean {
    return this._json.run_now;
  }

  /**
   * Get O365 Job creation / modification request job schedule request
   * @returns {O365JobSchedulePolicyRequest}
   */
  get jobScheduleRequest(): O365JobSchedulePolicyRequest {
    return new O365JobSchedulePolicyRequest(this._json.job_schedule_policy_request);
  }

  /**
   * Get O365 Job creation / modification request selected items request
   * @returns {Array<PartialOrganizationSelectedItem | GroupSelectedItem | UserSelectedItem | SiteSelectedItem |
   *   TeamSelectedItem> | undefined}
   */
  get selectedItemsRequest(): Array<PartialOrganizationSelectedItem |
      GroupSelectedItem | UserSelectedItem | SiteSelectedItem | TeamSelectedItem> | undefined {
        return this._json.o365_job_selected_item_requests;
      }

  /**
   * Get O365 Job creation / modification request excluded items request
   * @returns {Array<PartialOrganizationSelectedItem | GroupSelectedItem | UserSelectedItem | SiteSelectedItem |
   *   TeamSelectedItem> | undefined}
   */
  get excludedItemsRequest(): Array<PartialOrganizationSelectedItem |
      GroupSelectedItem | UserSelectedItem | SiteSelectedItem | TeamSelectedItem> | undefined {
        return this._json.o365_job_excluded_item_requests;
      }

  /**
   * Get the json representation of this class.
   * @returns {O365JobRequestJson}
   */
  get json(): O365JobRequestJson {
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
