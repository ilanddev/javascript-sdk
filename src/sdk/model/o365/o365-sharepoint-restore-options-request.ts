import {
    O365SharePointDocumentLastVersionAction,
    O365SharePointDocumentVersion,
    O365SharePointRestoreOptionsRequestJson
} from './__json__/o365-sharepoint-restore-options-request-json';

/**
 * O365 SharePoint Restore Options Request
 */
/* istanbul ignore next: autogenerated */
export class O365SharePointRestoreOptionsRequest {

  constructor(private _json: O365SharePointRestoreOptionsRequestJson) {
  }

  /**
   * Get user name you want to use for authenticating with the Microsoft organization
   * @returns {string | null}
   */
  get user(): string | null {
    return this._json.user || null;
  }

  /**
   * Get the user password you want to use for authenticating with the Microsoft organization
   * @returns {string | null}
   */
  get password(): string | null {
    return this._json.password || null;
  }

  /**
   * Get the device code you want to use for authenticating with the Microsoft organization
   * @returns {string | null}
   */
  get deviceCode(): string | null {
    return this._json.device_code || null;
  }

  /**
   * Indicates that the SharePoint lists will be restored with all list views
   * @returns {boolean}
   */
  get restoreListViews(): boolean {
    return this._json.restore_list_views;
  }

  /**
   * Indicates that the SharePoint site will be restored with all changed items
   *
   * One or both of changedItems and deletedItems must be set to true
   * @returns {boolean}
   */
  get changedItems(): boolean {
    return this._json.changed_items;
  }

  /**
   * Indicates that the SharePoint site will be restored with all deleted items
   *
   * One or both of changedItems and deletedItems must be set to true
   * @returns {boolean}
   */
  get deletedItems(): boolean {
    return this._json.deleted_items;
  }

  /**
   * Indicates that the SharePoint site will be restored with all subsites
   * @returns {boolean}
   */
  get restoreSubsites(): boolean {
    return this._json.restore_subsites;
  }

  /**
   * Indicates that the SharePoint site will be restored with all master pages
   * @returns {boolean}
   */
  get restoreMasterPages(): boolean {
    return this._json.restore_master_pages;
  }

  /**
   * Indicates that the SharePoint site will be restored with all permissions
   * @returns {boolean}
   */
  get restorePermissions(): boolean {
    return this._json.restore_permissions;
  }

  /**
   * Indicates what versions of the SharePoint documents will be restored
   * @returns {O365SharePointDocumentVersion}
   */
  get documentVersion(): O365SharePointDocumentVersion {
    return this._json.document_version;
  }

  /**
   * Indicates that shared links notifications will be sent.
   * @returns {boolean}
   */
  get sendSharedLinksNotification(): boolean {
    return this._json.send_shared_links_notification;
  }

  /**
   * Indicates which action will be performed with the last version of the restored SharePoint document
   * on the destination list
   * @returns {O365SharePointDocumentLastVersionAction}
   */
  get documentLastCrazyVersionAction(): O365SharePointDocumentLastVersionAction {
    return this._json.document_last_version_action;
  }

  /**
   * Optional - specifies the target SharePoint list by name.
   * Default location if not provided
   * @returns {string | null}
   */
  get list(): string | null {
    return this._json.list || null;
  }

  /**
   * Optional - specifies alias site if restoring a Site to a different location
   * @returns {string | null}
   */
  get alias(): string | null {
    return this._json.alias || null;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365SharePointRestoreOptionsRequestJson}
   */
  get json(): O365SharePointRestoreOptionsRequestJson {
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
