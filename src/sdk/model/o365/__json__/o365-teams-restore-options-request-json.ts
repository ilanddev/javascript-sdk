/**
 * O365 Teams restore options request JSON properties
 */
export interface O365TeamsRestoreOptionsRequestJson {
  user: string;
  password: string;
  restore_settings?: boolean;
  restore_missing_items?: boolean;
  restore_members?: boolean;
  restore_changed_items?: boolean;
  file_version?: O365TeamsFileVersion;
  file_last_version_action?: O365TeamsFileLastVersionAction;
  item_ids?: Array<string>;
  from?: number;
  to?: number;
}

/**
 * O365 Teams file version enum
 */
export enum O365TeamsFileVersion {
  ALL = 'all',
  LAST = 'last'
}

/**
 * O365 Teams file last version action enum
 */
export enum O365TeamsFileLastVersionAction {
  OVERWRITE = 'overwrite',
  MERGE = 'merge'
}
