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
