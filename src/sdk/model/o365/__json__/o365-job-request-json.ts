import { O365JobBackupType } from './o365-job-json';
import { O365JobSchedulePolicyRequestJson } from './o365-job-schedule-policy-request-json';

/**
 * O365 Create & Modify Job request json
 */
export interface O365JobRequestJson {
  name: string;
  description?: string;
  backup_type: O365JobBackupType;
  run_now: boolean;
  job_schedule_policy_request: O365JobSchedulePolicyRequestJson;
  o365_job_selected_item_requests?: Array<PartialOrganizationSelectedItem |
      GroupSelectedItem | UserSelectedItem | SiteSelectedItem>;
  o365_job_excluded_item_requests?: Array<PartialOrganizationSelectedItem |
      GroupSelectedItem | UserSelectedItem | SiteSelectedItem>;
}

/**
 * O365 Partial Organization selected item
 */
export interface PartialOrganizationSelectedItem {
  type: O365ItemRequestType; // PartialOrganization
  mailbox: boolean;
  archive_mailbox: boolean;
  one_drive: boolean;
  site: boolean;
}

/**
 * O365 Group selected item
 */
export interface GroupSelectedItem {
  type: O365ItemRequestType; // Group
  group: SelectedItemNestedGroup;
  members: boolean;
  member_mailbox: boolean;
  member_archive_mailbox: boolean;
  member_onedrive: boolean;
  member_site: boolean;
  mail: boolean;
  site: boolean;
  mailbox?: boolean; // for O365 type Group
}

/**
 * O365 Group nested selected item
 */
export interface SelectedItemNestedGroup {
  display_name: string;
  id: string;
  is_backed_up: boolean;
  name: string;
  type: string;
}

/**
 * O365 User selected item
 */
export interface UserSelectedItem {
  type: O365ItemRequestType; // User
  user: SelectedItemNestedUser;
  mailbox: boolean;
  archive_mailbox: boolean;
  one_drive: boolean;
  site: boolean;
}

/**
 * O365 user nested selected item
 */
export interface SelectedItemNestedUser {
  id: string;
  display_name: string;
  name: string;
  type: string;
  backed_up: boolean;
}

/**
 * O365 SharePoint Site selected item
 */
export interface SiteSelectedItem {
  type: O365ItemRequestType; // Site
  site: SelectedItemNestedSite;
}

/**
 * O365 SharePoint Site nested selected item
 */
export interface SelectedItemNestedSite {
  id: string;
  url: string;
  name: string;
  cloud: boolean;
  title: string;
  backed_up: boolean;
}

/**
 * Enumeration of the available included/excluded items type of an O365 Backup Job
 */
export type O365ItemRequestType = 'User' | 'Site' | 'Group' | 'PartialOrganization';
