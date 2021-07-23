import { EntityJson } from '../../common/__json__/entity-json';

/**
 * Interface for O365 Job JSON properties
 */
export interface O365JobJson extends EntityJson {
  location_id: string;
  o365_organization_uuid: string;
  description: string;
  last_run: number;
  next_run: number;
  enabled: boolean;
  backup_type: O365JobBackupType;
  last_status: O365JobStatus;
  schedule_policy: O365JobSchedulePolicy;
  type_vex: boolean;
  type_vesp: boolean;
  type_veod: boolean;
  type_vet: boolean;
  excluded_items?: SelectedExcludedItems;
  selected_items?: SelectedExcludedItems;
}

/**
 * O365 Job Backup Type JSON enum
 */
export enum O365JobBackupType {
  SELECTED_ITEMS = 'SelectedItems',
  ENTIRE_ORGANIZATION = 'EntireOrganization'
}

/**
 * O365 Job status JSON type
 */
export type O365JobStatus = 'Stopped' | 'Running' | 'Success' | 'Warning' | 'Failed';

/**
 * Interface for O365 Job Schedule Policy JSON properties
 */
export interface O365JobSchedulePolicy {
  type: O365JobSchedulePolicyType;
  daily_type: O365JobSchedulePolicyDailyType;
  daily_time: string;
  periodically_every: O365JobSchedulePolicyPeriodicallyEvery;
  backup_window_enabled: boolean;
  backup_window: Array<boolean>;
  backup_window_minute_offset: number;
  retry_enabled: boolean;
  retry_number: number;
  retry_wait_interval: number;
}

/**
 * O365 Job Schedule Policy Type JSON enum
 */
export enum O365JobSchedulePolicyType {
  DAILY = 'Daily',
  PERIODICALLY = 'Periodically'
}

/**
 * O365 Job Schedule Policy Daily Type JSON enum
 */
export enum O365JobSchedulePolicyDailyType {
  EVERYDAY = 'Everyday',
  WEEKENDS = 'Weekends',
  WORKDAYS = 'Workdays',
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday'
}

/**
 * O365 Job Schedule Policy Periodically Every JSON enum
 */
export enum O365JobSchedulePolicyPeriodicallyEvery {
  MINUTES5 = 'Minutes5',
  MINUTES10 = 'Minutes10',
  MINUTES15 = 'Minutes15',
  MINUTES30 = 'Minutes30',
  HOURS1 = 'Hours1',
  HOURS2 = 'Hours2',
  HOURS4 = 'Hours4',
  HOURS8 = 'Hours8'
}

/**
 * Selected or Excluded Items interface pertaining to any included or excluded items
 * from O365 Backup Job
 */
export interface SelectedExcludedItems {
  group_responses: Array<GroupResponse>;
  partial_org_responses: Array<PartialOrgResponse>;
  share_point_site_responses: Array<SharePointSiteResponse>;
  user_responses: Array<UserResponse>;
  team_responses: Array<TeamResponse>;
}

/**
 * Selected or Excluded Group Response interface
 */
export interface GroupResponse {
  group_response: InnerGroupResponse;
  mail?: boolean;
  mailbox?: boolean;
  member_archive_mailbox: boolean;
  member_mailbox: boolean;
  member_onedrive: boolean;
  member_site: boolean;
  members: boolean;
  site: boolean;
}

/**
 * Selected or Excluded Inner Group Response interface
 */
export interface InnerGroupResponse {
  display_name: string;
  is_backed_up: boolean;
  is_deleted_from_org: boolean;
  name: string;
  native_id: string;
  organization_name: string;
  organization_uuid: string;
  type: string;
}

/**
 * Selected or Excluded Partial Org Response interface
 */
export interface PartialOrgResponse {
  archive_mailbox: boolean;
  id: string;
  mailbox: boolean;
  one_drive: boolean;
  site: boolean;
  teams: boolean;
}

/**
 * Selected or Excluded SharePoint Site Response interface
 */
export interface SharePointSiteResponse {
  available: boolean;
  backed_up: boolean;
  cloud: boolean;
  id: string;
  name: string;
  title: string;
  url: string;
}

/**
 * Selected or Excluded User Response interface
 */
export interface UserResponse {
  archive_mailbox: boolean;
  mailbox: boolean;
  one_drive: boolean;
  site: boolean;
  user_response: InnerUserResponse;
}

/**
 * Selected or Excluded Inner User Response interface
 */
export interface InnerUserResponse {
  display_name: string;
  is_backed_up: boolean;
  is_deleted_from_org: boolean;
  name: string;
  native_id: string;
  organization_name: string;
  organization_uuid: string;
  type: string;
}

/**
 * Selected or Excluded Team Response interface
 */
export interface TeamResponse {
  description: string;
  display_name: string;
  is_backed_up: boolean;
  mail: string;
  native_id: string;
  organization_uuid: string;
}
