/**
 * O365 OneDrive Restore Option Request JSON properties
 */
export interface O365OneDriveRestoreOptionsRequestJson {
  user?: string;
  password?: string;
  device_code?: string;
  action: O365OneDriveDocumentAction;
  version: O365OneDriveDocumentVersion;
  document_last_version_action?: O365OneDriveDocumentLastVersionAction;
  folder?: string;
  one_drive_id_to_restore_to?: string;
  changed_items?: boolean;
  deleted_items?: boolean;
  restore_permissions?: boolean;
  send_shared_links_notification?: boolean;
}

/**
 * O365 OneDrive Document Action enum
 */
export enum O365OneDriveDocumentAction {
  OVERWRITE = 'overwrite',
  KEEP = 'keep'
}

/**
 * O365 OneDrive Document Version enum
 */
export enum O365OneDriveDocumentVersion {
  ALL = 'all',
  LAST = 'last'
}

/**
 * O365 OneDrive document last version action enum
 */
export enum O365OneDriveDocumentLastVersionAction {
  OVERWRITE = 'overwrite',
  MERGE = 'merge'
}
