/**
 * O365 Restore Session SharePoint Options Request JSON properties
 */
export interface O365SharePointRestoreOptionsRequestJson {
  user?: string;
  password?: string;
  device_code?: string;
  restore_list_views: boolean;
  changed_items: boolean;
  deleted_items: boolean;
  restore_subsites: boolean;
  restore_master_pages: boolean;
  restore_permissions: boolean;
  document_version: O365SharePointDocumentVersion;
  send_shared_links_notification: boolean;
  document_last_version_action: O365SharePointDocumentLastVersionAction;
  list?: string; // specifies the target SharePoint list by name - needed in item and document restores
  alias?: string; // specifies a target site if restoring to a different location
}

/**
 * SharePoint Document Version enum
 * Specifies, which of the versions of the SharePoint documents will be restored
 */
export enum O365SharePointDocumentVersion {
  ALL = 'ALL',
  LAST = 'LAST'
}

/**
 * SharePoint Document Last Version Action enum
 * Specifies which action will be performed with the
 * last version of the restored SharePoint document on the destination list.
 */
export enum O365SharePointDocumentLastVersionAction {
  OVERWRITE = 'OVERWRITE',
  MERGE = 'MERGE'
}
