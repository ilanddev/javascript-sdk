import { Entity } from '../common/entity';
import {
    O365RestoreSessionJson,
    O365RestoreSessionResult, O365RestoreSessionState,
    O365RestoreSessionType
} from './__json__/o365-restore-session-json';
import { Iland } from '../../iland';
import { EntityType } from '../common/__json__/entity-type';
import { O365RestoreSessionEvent } from './o365-restore-session-event';
import { O365RestoreSessionEventJson } from './__json__/o365-restore-session-event-json';
import { O365Mailbox } from './o365-mailbox';
import { O365MailboxJson } from './__json__/o365-mailbox-json';
import { O365MailboxFolder } from './o365-mailbox-folder';
import { O365MailboxFolderJson } from './__json__/o365-mailbox-folder-json';
import { O365MailboxFolderItem } from './o365-mailbox-folder-item';
import { O365MailboxFolderItemJson } from './__json__/o365-mailbox-folder-item.json';
import { O365OneDrive } from './o365-onedrive';
import { O365OneDriveJson } from './__json__/o365-onedrive-json';
import { O365OneDriveFolder } from './o365-onedrive-folder';
import { O365OneDriveFolderJson } from './__json__/o365-onedrive-folder-json';
import { O365OneDriveDocument } from './o365-onedrive-document';
import { O365OneDriveDocumentJson } from './__json__/o365-onedrive-document-json';
import { O365SharePointSite } from './o365-sharepoint-site';
import { O365SharePointSiteJson } from './__json__/o365-sharepoint-site-json';
import { O365SharePointFolder } from './o365-sharepoint-folder';
import { O365SharePointFolderJson } from './__json__/o365-sharepoint-folder-json';
import { O365SharePointDocument } from './o365-sharepoint-document';
import { O365SharePointDocumentJson } from './__json__/o365-sharepoint-document-json';
import { O365SharePointItem } from './o365-sharepoint-item';
import { O365SharePointItemJson } from './__json__/o365-sharepoint-item-json';
import { O365SharePointLibrary } from './o365-sharepoint-library';
import { O365SharePointLibraryJson } from './__json__/o365-sharepoint-library-json';
import { O365SharePointAttachment } from './o365-sharepoint-attachment';
import { O365SharePointAttachmentJson } from './__json__/o365-sharepoint-attachment-json';
import { O365SharePointListJson } from './__json__/o365-sharepoint-list-json';
import { O365SharePointList } from './o365-sharepoint-list';
import { O365MailboxRestoreOptionsRequest } from './o365-mailbox-restore-options-request';
import { O365OneDriveRestoreOptionsRequest } from './o365-onedrive-restore-option-request';
import { O365SharePointRestoreOptionsRequest } from './o365-sharepoint-restore-options-request';
import { O365Team } from './o365-team';
import { O365TeamJson } from './__json__/o365-team-json';
import { O365TeamChannel } from './o365-team-channel';
import { O365TeamChannelJson } from './__json__/o365-team-channel-json';
import { O365TeamFile } from './o365-team-file';
import { O365TeamFileJson } from './__json__/o365-team-file-json';
import { O365TeamPost } from './o365-team-post';
import { O365TeamPostJson } from './__json__/o365-team-post-json';
import { O365TeamTab } from './o365-team-tab';
import { O365TeamTabJson } from './__json__/o365-team-tab-json';
import { Http } from '../../service/http/http';
import { Task } from '../task/task';
import { TaskJson } from '../task/__json__/task-json';
import { O365TeamsRestoreOptionsRequest } from './o365-teams-restore-options-request';
import { O365TeamsSendToEmailRequest } from './o365-teams-send-to-email-request';
import { O365TeamItemsExportRequest } from './o365-team-items-export-request';
import { O365TeamsRangeExportRequest } from './o365-teams-range-export-request';
import { O365DeviceCode } from '../company/o365-device-code';
import { O365DeviceCodeJson } from '../company/__json__/o365-device-code-json';

/**
 * O365 Restore Session
 */
export class O365RestoreSession extends Entity {

  constructor(private _json: O365RestoreSessionJson) {
    super(_json);
  }

  /**
   * Get a O365 Restore Session by UUID
   * @param uuid
   * @returns {Promise<O365RestoreSession>} promise that resolves with a O365 Restore Session
   */
  static async getO365RestoreSession(uuid: string): Promise<O365RestoreSession> {
    return Iland.getHttp().get(`/o365-restore-sessions/${uuid}`).then((response) => {
      const json = response.data as O365RestoreSessionJson;
      return new O365RestoreSession(json);
    });
  }

  /**
   * Get the O365 Restore Session entity type
   */
  get entityType(): EntityType {
    return 'O365_RESTORE_SESSION';
  }

  /**
   * Gets the location id of O365 Restore Session
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the O365 Organization uuid of the O365 Restore Session
   */
  get O365OrganizationUuid(): string {
    return this._json.o365_organization_uuid;
  }

  /**
   * Get the O365 Restore Session's type
   */
  get type(): O365RestoreSessionType {
    return this._json.type;
  }

  /**
   * Get the O365 Restore Session's result
   */
  get result(): O365RestoreSessionResult {
    return this._json.result;
  }

  /**
   * Get the O365 Restore Session's state
   */
  get state(): O365RestoreSessionState {
    return this._json.state;
  }

  /**
   * Get the O365 Restore Session's creation time
   */
  get creationTime(): number {
    return this._json.creation_time;
  }

  /**
   * Get the O365 Restore Session's end time
   */
  get endTime(): number {
    return this._json.end_time;
  }

  /**
   * Get the O365 Restore Session's initiated by
   */
  get initiatedBy(): string {
    return this._json.initiated_by;
  }

  /**
   * Get the O365 Restore Session's details
   */
  get details(): string {
    return this._json.details;
  }

  /**
   * Get the O365 Restore Session's ancestors
   */
  get ancestors(): any {
    return this._json.ancestors;
  }

  /**
   * Refresh the O365 Restore Session data by retrieving it from the API again.
   * @returns {Promise<O365RestoreSession>}
   */
  /* istanbul ignore next: autogenerated */
  async refresh(): Promise<O365RestoreSession> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}`).then((response) => {
      this._json = response.data as O365RestoreSessionJson;
      return this;
    });
  }

  /**
   * Get O365 Restore Session events given the restore session uuid
   * @return {Promise<Array<O365RestoreSessionEvent>>}
   */
  /* istanbul ignore next: autogenerated */
  async getEvents(): Promise<Array<O365RestoreSessionEvent>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/events`).then((response) => {
      const json = response.data.data as Array<O365RestoreSessionEventJson>;
      return json.map((it) => new O365RestoreSessionEvent(it));
    });
  }

  /**
   * Stop O365 Restore Session
   * @return {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async stopRestoreSession(): Promise<any> {
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/actions/stop`);
  }

  /**
   * Get O365 Restore Session Exchange mailboxes
   *
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365Mailbox>>} the list of O365 mailboxes
   */
  /* istanbul ignore next: autogenerated */
  async getMailboxes(page?: number, pageSize?: number): Promise<Array<O365Mailbox>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/exchange-mailboxes`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365MailboxJson>;
      return json.map((it) => new O365Mailbox(it));
    });
  }

  /**
   * Get O365 Restore Session Exchange mailbox folders
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param mailboxId
   * @param folderId
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365MailboxFolder>>} the list of O365 mailbox folders
   */
  /* istanbul ignore next: autogenerated */
  async getMailboxFolders(mailboxId: string, folderId: string | null,
                          page?: number, pageSize?: number): Promise<Array<O365MailboxFolder>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/exchange-mailboxes/${mailboxId}/folders`, {
      params: {
        parentId: folderId,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365MailboxFolderJson>;
      return json.map(it => new O365MailboxFolder(it));
    });
  }

  /**
   * Get O365 Restore Session Exchange mailbox folder items
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param mailboxId
   * @param folderId
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365MailboxFolderItem>>} the list of O365 mailbox folder items
   */
  /* istanbul ignore next: autogenerated */
  async getMailboxFolderItems(mailboxId: string, folderId: string | null,
                              page?: number, pageSize?: number): Promise<Array<O365MailboxFolderItem>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/exchange-mailboxes/${mailboxId}/items`, {
      params: {
        folderId: folderId,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365MailboxFolderItemJson>;
      return json.map(it => new O365MailboxFolderItem(it));
    });
  }

  /**
   * Restore an Office 365 VBO Exchange mailbox to either original location
   * or a different location given the restore session UUID and mailbox ID.
   * This method will return TaskResponse object immediately and submits the
   * restoration task in the background.
   * @param {string} mailboxId
   * @param {O365MailboxRestoreOptionsRequest} request
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreMailbox(mailboxId: string, request: O365MailboxRestoreOptionsRequest): Promise<Task> {
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/exchange-mailboxes/${mailboxId}/actions/restore`,
        request.json).then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Restore O365 Exchange mailbox folder to its original location
   * @param mailboxId
   * @param folderId
   * @param request
   */
  /* istanbul ignore next: autogenerated */
  async restoreMailboxFolderToOriginalLocation(mailboxId: string, folderId: string,
                                               request: O365MailboxRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/exchange-mailboxes/${mailboxId}/folders/${folderId}/actions/restore`, request.json);
  }

  /**
   * Restore O365 Exchange mailbox item to its original location
   * @param mailboxId
   * @param itemId
   * @param request
   */
  /* istanbul ignore next: autogenerated */
  async restoreMailboxItemToOriginalLocation(mailboxId: string, itemId: string,
                                             request: O365MailboxRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/exchange-mailboxes/${mailboxId}/items/${itemId}/actions/restore`, request.json);
  }

  /**
   * Get an Exchange Mailbox download as PST
   * @param mailboxId {string} the Exchange mailbox id
   * @param downloadProgressCallback {function} optional progress callback if user wishes to receive progress events
   * for their download
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async getMailboxDownload(mailboxId: string, downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/exchange-mailboxes/${mailboxId}/actions/save`, null, {
      headers: {
        'Accept': Http.versionMime('application/octet-stream')
      },
      responseType: 'arraybuffer',
      onDownloadProgress: downloadProgressCallback
    }).then((response) => {
      return new Blob([response.data], { type: 'application/octet-stream' });
    });
  }

  /**
   * Get an Exchange Mailbox folder download as PST
   * @param mailboxId {string} the Exchange mailbox id
   * @param folderId {string} the Exchange mailbox folder id
   * @param downloadProgressCallback {function} optional progress callback if user wishes to receive progress events
   * for their download
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async getMailboxFolderDownload(mailboxId: string, folderId: string,
                                 downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/exchange-mailboxes/${mailboxId}/folders/${folderId}/actions/save`, null, {
      headers: {
        'Accept': Http.versionMime('application/octet-stream')
      },
      responseType: 'arraybuffer',
      onDownloadProgress: downloadProgressCallback
    }).then((response) => {
      return new Blob([response.data], { type: 'application/octet-stream' });
    });
  }

  /**
   * Get an Exchange Mailbox item download as an MSG or PST
   * @param mailboxId {string} the Exchange mailbox id
   * @param itemId {string} the Exchange mailbox item id
   * @param format {string} must be of MSG or PST
   * @param downloadProgressCallback {function} optional progress callback if user wishes to receive progress events
   * for their download
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async getMailboxItemDownload(mailboxId: string, itemId: string, format: string,
                               downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/exchange-mailboxes/${mailboxId}/items/${itemId}/actions/save?format=${format}`, null, {
      headers: {
        'Accept': Http.versionMime('application/octet-stream')
      },
      responseType: 'arraybuffer',
      onDownloadProgress: downloadProgressCallback
    }).then((response) => {
      return new Blob([response.data],{ type: 'application/octet-stream' });
    });
  }

  /**
   * Gets O365 Restore Session OneDrives
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365OneDrive>>} the list of O365 OneDrives
   */
  /* istanbul ignore next: autogenerated */
  async getOneDrives(page?: number, pageSize?: number): Promise<Array<O365OneDrive>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/onedrive-drives`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365OneDriveJson>;
      return json.map((it) => new O365OneDrive(it));
    });
  }

  /**
   * Gets O365 Restore Session OneDrive folders
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param oneDriveId
   * @param folderId
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365OneDriveFolder>>} the list of O365 mailbox folders
   */
  /* istanbul ignore next: autogenerated */
  async getOneDriveFolders(oneDriveId: string, folderId: string | null,
                          page?: number, pageSize?: number): Promise<Array<O365OneDriveFolder>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/onedrive-drives/${oneDriveId}/folders`, {
      params: {
        parentId: folderId,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365OneDriveFolderJson>;
      return json.map(it => new O365OneDriveFolder(it));
    });
  }

  /**
   * Gets O365 Restore Session OneDrive Folder Document items
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param oneDriveId
   * @param folderId
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365OneDriveDocument>>} the list of O365 mailbox folder items
   */
  /* istanbul ignore next: autogenerated */
  async getOneDriveDocuments(oneDriveId: string, folderId: string | null,
                             page?: number, pageSize?: number): Promise<Array<O365OneDriveDocument>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/onedrive-drives/${oneDriveId}/documents`, {
      params: {
        parentId: folderId,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365OneDriveDocumentJson>;
      return json.map(it => new O365OneDriveDocument(it));
    });
  }

  /**
   * Restore an O365 OneDrive to a location given the
   * restore session UUID and one drive ID. This method will return
   * TaskResponse object immediately and submits the restoration task
   * in the background.
   * @param {string} oneDriveId
   * @param {O365OneDriveRestoreOptionsRequest} request
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreOneDrive(oneDriveId: string, request: O365OneDriveRestoreOptionsRequest): Promise<Task> {
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/onedrive-drives/${oneDriveId}/actions/restore`,
        request.json).then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Restore an O365 OneDrive Folder
   * @param oneDriveId
   * @param folderId
   * @param request
   */
  /* istanbul ignore next: autogenerated */
  async restoreOneDriveFolder(oneDriveId: string, folderId: string,
                              request: O365OneDriveRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/onedrive-drives/${oneDriveId}/folders/${folderId}/actions/restore`, request.json);
  }

  /**
   * Restore an O365 OneDrive Document
   * @param oneDriveId
   * @param documentId
   * @param request
   */
  /* istanbul ignore next: autogenerated */
  async restoreOneDriveDocument(oneDriveId: string, documentId: string,
                                request: O365OneDriveRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/onedrive-drives/${oneDriveId}/documents/${documentId}/actions/restore`, request.json);
  }

  /**
   * Get a OneDrive download as a ZIP
   * @param oneDriveId {string} the OneDrive id
   * @param downloadProgressCallback {function} optional progress callback if user wishes to receive progress events
   * for their download
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async getOneDriveDownload(oneDriveId: string, downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/onedrive-drives/${oneDriveId}/actions/save`, null, {
      headers: {
        'Accept': Http.versionMime('application/octet-stream')
      },
      responseType: 'arraybuffer',
      onDownloadProgress: downloadProgressCallback
    }).then((response) => {
      return new Blob([response.data],{ type: 'application/zip' });
    });
  }

  /**
   * Get a OneDrive Folder download as ZIP
   * @param oneDriveId {string} the OneDrive id
   * @param folderId {string} the OneDrive folder id
   * @param downloadProgressCallback {function} optional progress callback if user wishes to receive progress events
   * for their download
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async getOneDriveFolderDownload(oneDriveId: string, folderId: string,
                                  downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/onedrive-drives/${oneDriveId}/folders/${folderId}/actions/save`, null, {
      headers: {
        'Accept': Http.versionMime('application/octet-stream')
      },
      responseType: 'arraybuffer',
      onDownloadProgress: downloadProgressCallback
    }).then((response) => {
      return new Blob([response.data],{ type: 'application/zip' });
    });
  }

  /**
   * Get a OneDrive Folder Item download as ZIP
   * @param oneDriveId {string} the OneDrive id
   * @param documentId {string} the OneDrive document id
   * @param downloadProgressCallback {function} optional progress callback if user wishes to receive progress events
   * for their download
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async getOneDriveItemDownload(oneDriveId: string, documentId: string,
                                  downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/onedrive-drives/${oneDriveId}/documents/${documentId}/actions/save`, null, {
      headers: {
        'Accept': Http.versionMime('application/octet-stream')
      },
      responseType: 'arraybuffer',
      onDownloadProgress: downloadProgressCallback
    }).then((response) => {
      return new Blob([response.data],{ type: 'application/zip' });
    });
  }

  /**
   * Get O365 Restore Session SharePoint sites
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param siteId - the parent folder or null for parent site
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365SharePointSite>>} the list of O365 sharepoint sites
   */
  /* istanbul ignore next: autogenerated */
  async getSharePointSites(siteId: string | null = null, page?: number,
                           pageSize?: number): Promise<Array<O365SharePointSite>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/sharepoint-sites`, {
      params: {
        parentId: siteId,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365SharePointSiteJson>;
      return json.map((it) => new O365SharePointSite(it));
    });
  }

  /**
   * Restore O365 SharePoint Site given the restore session UUID
   * its Veeam native id. This method will return TaskResponse object immediately
   * and submits the restoration task in the background.
   * @param {string} siteId
   * @param {O365SharePointRestoreOptionsRequest} request
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreSharePointSite(siteId: string, request: O365SharePointRestoreOptionsRequest): Promise<Task> {
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/actions/restore`,
        request.json).then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Get O365 Restore Session SharePoint folders
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param siteId - the site to get folders from
   * @param parentId - the parent folder or null if the top site
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365SharePointFolder>>} the list of O365 sharepoint folders
   */
  /* istanbul ignore next: autogenerated */
  async getSharePointFolders(siteId: string, parentId: string | null, page?: number,
                             pageSize?: number): Promise<Array<O365SharePointFolder>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/folders`, {
      params: {
        parentId: parentId,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365SharePointFolderJson>;
      return json.map((it) => new O365SharePointFolder(it));
    });
  }

  /**
   * Download an Office 365 VBO SharePoint Folder given the restore session UUID
   * The Response object will contain the file download as a zip
   * @param siteId - the site to get document from
   * @param folderId - the folder id to download
   * @param downloadProgressCallback {function} optional progress callback if user wishes to receive progress events for
   * their download
   * @returns {Promise<Blob>} a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async getSharePointFolderDownload(siteId: string, folderId: string,
                                    downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/folders/${folderId}/actions/save`,
        null, {
          headers: {
            'Accept': Http.versionMime('application/octet-stream')
          },
          responseType: 'arraybuffer',
          onDownloadProgress: downloadProgressCallback
        }).then((response) => {
          return new Blob([response.data],{ type: 'application/zip' });
        });
  }

  /**
   * Restore O365 SharePoint Folder
   * @param siteId
   * @param folderId
   * @param request
   */
  /* istanbul ignore next: autogenerated */
  async restoreSharePointFolder(siteId: string, folderId: string,
                                request: O365SharePointRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/folders/${folderId}/actions/restore`, request.json);
  }

  /**
   * Get O365 Restore Session SharePoint documents
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param siteId - the site to get documents from
   * @param parentId - the parent folder or null for top folder
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365SharePointDocument>>} the list of O365 sharepoint documents
   */
  /* istanbul ignore next: autogenerated */
  async getSharePointDocuments(siteId: string, parentId: string | null, page?: number,
                               pageSize?: number): Promise<Array<O365SharePointDocument>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/documents`, {
      params: {
        parentId: parentId,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365SharePointDocumentJson>;
      return json.map((it) => new O365SharePointDocument(it));
    });
  }

  /**
   * Download an Office 365 VBO SharePoint Document given the restore session UUID
   * The Response object will contain the file download as an array buffer for developer to download as zip
   * @param siteId - the site to get document from
   * @param documentId - the document id to download
   * @param downloadProgressCallback {function} optional progress callback if user wishes to receive progress events for
   * their download
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async getSharePointDocumentDownload(siteId: string, documentId: string,
                                      downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/documents/${documentId}/actions/save`,
        null, {
          headers: {
            'Accept': Http.versionMime('application/octet-stream')
          },
          responseType: 'arraybuffer',
          onDownloadProgress: downloadProgressCallback
        }).then((response) => {
          return new Blob([response.data],{ type: 'application/zip' });
        });
  }

  /**
   * Restore O365 SharePoint Document
   * @param siteId
   * @param documentId
   * @param request
   */
  /* istanbul ignore next: autogenerated */
  async restoreSharePointDocument(siteId: string, documentId: string,
                                  request: O365SharePointRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/documents/${documentId}/actions/restore`, request.json);
  }

  /**
   * Get O365 Restore Session SharePoint items
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param siteId - the site to get items from
   * @param parentId - the parent folder or null for top folder
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365SharePointItem>>} the list of O365 sharepoint items
   */
  /* istanbul ignore next: autogenerated */
  async getSharePointItems(siteId: string, parentId: string | null, page?: number,
                           pageSize?: number): Promise<Array<O365SharePointItem>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/items`, {
      params: {
        parentId: parentId,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365SharePointItemJson>;
      return json.map((it) => new O365SharePointItem(it));
    });
  }

  /**
   * Restore O365 SharePoint Item
   * @param siteId
   * @param itemId
   * @param request
   */
  /* istanbul ignore next: autogenerated */
  async restoreSharePointItem(siteId: string, itemId: string,
                              request: O365SharePointRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/items/${itemId}/actions/restore`, request.json);
  }

  /**
   * Get O365 Restore Session SharePoint attachments
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param siteId - the site to get attachments from
   * @param itemId - the item parent of the attachments
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365SharePointAttachment>>} the list of O365 sharepoint attachments
   */
  /* istanbul ignore next: autogenerated */
  async getSharePointAttachments(siteId: string, itemId: string, page?: number,
                                 pageSize?: number): Promise<Array<O365SharePointAttachment>> {
    return Iland.getHttp()
        .get(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/items/${itemId}/attachments`,{
          params: {
            page: page || 0,
            pageSize: pageSize || 50
          }
        }).then((response) => {
          const json = response.data.data as Array<O365SharePointAttachmentJson>;
          return json.map((it) => new O365SharePointAttachment(it));
        });
  }
  /**
   * Get O365 Restore Session SharePoint libraries
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param siteId - the site to get items from
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365SharePointLibrary>>} the list of O365 sharepoint libraries
   */
  /* istanbul ignore next: autogenerated */
  async getSharePointLibraries(siteId: string, page?: number,
                               pageSize?: number): Promise<Array<O365SharePointLibrary>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/libraries`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365SharePointLibraryJson>;
      return json.map((it) => new O365SharePointLibrary(it));
    });
  }

  /**
   * Download an Office 365 VBO SharePoint Library given the restore session UUID
   * The Response object will contain the file download as a zip
   * @param siteId - the site to get document from
   * @param libraryId - the library id to download
   * @param downloadProgressCallback {function} optional progress callback if user wishes to receive progress events for
   * their download
   * @returns {Promise<Blob>} a promise with the blob to download
   */
  /* istanbul ignore next: autogenerated */
  async getSharePointLibraryDownload(siteId: string, libraryId: string,
                                     downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/libraries/${libraryId}/actions/save`,
        null, {
          headers: {
            'Accept': Http.versionMime('application/octet-stream')
          },
          responseType: 'arraybuffer',
          onDownloadProgress: downloadProgressCallback
        }).then((response) => {
          return new Blob([response.data],{ type: 'application/zip' });
        });
  }

  /**
   * Restore O365 SharePoint Library
   * @param siteId
   * @param libraryId
   * @param request
   */
  /* istanbul ignore next: autogenerated */
  async restoreSharePointLibrary(siteId: string, libraryId: string,
                                 request: O365SharePointRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/libraries/${libraryId}/actions/restore`, request.json);
  }

  /**
   * Get O365 Restore Session SharePoint lists
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param siteId - the site to get items from
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365SharePointList>>} the list of O365 sharepoint lists
   */
  /* istanbul ignore next: autogenerated */
  async getSharePointLists(siteId: string, page?: number,
                           pageSize?: number): Promise<Array<O365SharePointList>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/lists`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365SharePointListJson>;
      return json.map((it) => new O365SharePointList(it));
    });
  }

  /**
   * Restore O365 SharePoint List
   * @param siteId
   * @param listId
   * @param request
   */
  /* istanbul ignore next: autogenerated */
  async restoreSharePointList(siteId: string, listId: string,
                              request: O365SharePointRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/sharepoint-sites/${siteId}/lists/${listId}/actions/restore`, request.json);
  }

  /**
   * Get O365 Restore Session Teams
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param {string | null} displayName - the optional display name of the teams whose representation
   * you want to get from the server. Null value will bring all teams for this org.
   * @param {number} page
   * @param {number} pageSize
   * @returns {Promise<Array<O365Team>>} the list of O365 teams
   */
  /* istanbul ignore next: autogenerated */
  async getTeams(displayName: string | null = null, page?: number, pageSize?: number): Promise<Array<O365Team>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/teams`, {
      params: {
        displayName: displayName,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365TeamJson>;
      return json.map((it) => new O365Team(it));
    });
  }

  /**
   * Restore all O365 Teams
   * @param {O365TeamsRestoreOptionsRequest} request
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreAllTeams(request: O365TeamsRestoreOptionsRequest): Promise<Task> {
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/action/restore-all-teams`, request.json)
        .then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Restore a O365 Team
   * @param {string} teamId
   * @param {O365TeamsRestoreOptionsRequest} request
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreTeam(teamId: string, request: O365TeamsRestoreOptionsRequest): Promise<Task> {
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/action/restore-team`, request.json)
        .then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Get O365 Team Channels
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param {string} teamId
   * @param {string | null} displayName
   * @param {number} page
   * @param {number} pageSize
   * @returns {Promise<Array<O365TeamChannel>>} the list of O365 Team Channels
   */
  /* istanbul ignore next: autogenerated */
  async getTeamChannels(teamId: string, displayName: string | null = null, page?: number,
                        pageSize?: number): Promise<Array<O365TeamChannel>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels`, {
      params: {
        displayName: displayName,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365TeamChannelJson>;
      return json.map((it) => new O365TeamChannel(it));
    });
  }

  /**
   * Restore a O365 Team channel
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamsRestoreOptionsRequest} request
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreTeamChannel(teamId: string, channelId: string, request: O365TeamsRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/action/restore-channel`, request.json);
  }

  /**
   * Get O365 Team Files
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param {string} teamId
   * @param {string | null} channelId
   * @param {string | null} parentId can be id of a file (folder) in which more files can be retrieved from
   * @param {number} page
   * @param {number} pageSize
   * @returns {Promise<Array<O365TeamFile>>} the list of O365 Team files
   */
  /* istanbul ignore next: autogenerated */
  async getTeamFiles(teamId: string, channelId: string | null = null, parentId: string | null = null, page?: number,
                     pageSize?: number): Promise<Array<O365TeamFile>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/files`, {
      params: {
        channelId: channelId,
        parentId: parentId,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365TeamFileJson>;
      return json.map((it) => new O365TeamFile(it));
    });
  }

  /**
   * Restore all O365 Team Files
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamsRestoreOptionsRequest} request
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreAllTeamFiles(teamId: string, channelId: string, request: O365TeamsRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/files/action/restore-all-files`, request.json);
  }

  /**
   * Restore a O365 Team File
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamsRestoreOptionsRequest} request
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreTeamFile(teamId: string, channelId: string, request: O365TeamsRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/files/action/restore-files`, request.json);
  }

  /**
   * Send backed-up Microsoft Teams files as an email attachment given the restore session UUID and channel Ids.
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamsSendToEmailRequest} request
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async sendEmailAllTeamFiles(teamId: string, channelId: string, request: O365TeamsSendToEmailRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/files/action/send-all-email`, request.json);
  }

  /**
   * Send backed-up Microsoft Teams files as an email attachment given the restore session UUID and file Ids.
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamsSendToEmailRequest} request
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async sendEmailTeamFile(teamId: string, channelId: string, request: O365TeamsSendToEmailRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/files/action/send-email`, request.json);
  }

  /**
   * Download all O365 Team Files as a zip
   * @param {string} teamId
   * @param {string} channelId
   * @param {function} downloadProgressCallback optional progress callback if user wishes to receive progress events
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async saveAllTeamFiles(teamId: string, channelId: string,
                         downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/files/action/save-all`,
        null, {
          headers: {
            'Accept': Http.versionMime('application/octet-stream')
          },
          responseType: 'arraybuffer',
          onDownloadProgress: downloadProgressCallback
        }).then((response) => {
          return new Blob([response.data], { type: 'application/zip' });
        });
  }

  /**
   * Download one or more O365 Team file(s) as a zip
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamItemsExportRequest} request
   * @param {function} downloadProgressCallback optional progress callback if user wishes to receive progress events
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async saveTeamFiles(teamId: string, channelId: string, request: O365TeamItemsExportRequest,
                     downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/files/action/save`,
        request.json, {
          headers: {
            'Accept': Http.versionMime('application/octet-stream')
          },
          responseType: 'arraybuffer',
          onDownloadProgress: downloadProgressCallback
        }).then((response) => {
          return new Blob([response.data], { type: 'application/zip' });
        });
  }

  /**
   * Get O365 Team Posts
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param {string} teamId
   * @param {string | null} channelId
   * @param {string | null} parentId can be id of a post in which more posts can be retrieved from
   * @param {number} page
   * @param {number} pageSize
   * @returns {Promise<Array<O365TeamPost>>} the list of O365 Team posts
   */
  /* istanbul ignore next: autogenerated */
  async getTeamPosts(teamId: string, channelId: string | null = null, parentId: string | null = null, page?: number,
                     pageSize?: number): Promise<Array<O365TeamPost>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/posts`, {
      params: {
        channelId: channelId,
        parentId: parentId,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365TeamPostJson>;
      return json.map((it) => new O365TeamPost(it));
    });
  }

  /**
   * Restore all O365 Team Posts
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamsRestoreOptionsRequest} request
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreAllTeamPosts(teamId: string, channelId: string, request: O365TeamsRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/posts/action/restore-all-posts`, request.json);
  }

  /**
   * Restore a O365 Team Post
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamsRestoreOptionsRequest} request
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreTeamPost(teamId: string, channelId: string, request: O365TeamsRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/posts/action/restore-posts`, request.json);
  }

  /**
   * Send all the backed-up Microsoft Teams posts as an email attachment given the restore session UUID and channel Id.
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamsSendToEmailRequest} request
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async sendEmailAllTeamPosts(teamId: string, channelId: string, request: O365TeamsSendToEmailRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/posts/action/send-all-email`, request.json);
  }

  /**
   * Send backed-up Microsoft Teams posts as an email attachment given the restore session UUID and post Ids.
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamsSendToEmailRequest} request
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async sendEmailTeamPost(teamId: string, channelId: string, request: O365TeamsSendToEmailRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/posts/action/send-email`, request.json);
  }

  /**
   * Export all O365 Team Posts as HTML file
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamsRangeExportRequest} request
   * @param {function} downloadProgressCallback optional progress callback if user wishes to receive progress events
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async exportAllTeamPosts(teamId: string, channelId: string, request: O365TeamsRangeExportRequest,
                           downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/posts/action/export-all`,
        request.json, {
          headers: {
            'Accept': Http.versionMime('application/octet-stream')
          },
          responseType: 'arraybuffer',
          onDownloadProgress: downloadProgressCallback
        }).then((response) => {
          return new Blob([response.data], { type: 'application/octet-stream' });
        });
  }

  /**
   * Export one or more O365 Team Post(s) as HTML file
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamItemsExportRequest} request
   * @param {function} downloadProgressCallback optional progress callback if user wishes to receive progress events
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async exportTeamPosts(teamId: string, channelId: string, request: O365TeamItemsExportRequest,
                       downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/posts/action/export`,
        request.json, {
          headers: {
            'Accept': Http.versionMime('application/octet-stream')
          },
          responseType: 'arraybuffer',
          onDownloadProgress: downloadProgressCallback
        }).then((response) => {
          return new Blob([response.data], { type: 'application/octet-stream' });
        });
  }

  /**
   * Download all O365 Team Posts as .msg file
   * @param {string} teamId
   * @param {string} channelId
   * @param {function} downloadProgressCallback optional progress callback if user wishes to receive progress events
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async saveAllTeamPosts(teamId: string, channelId: string,
                         downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/posts/action/save-all`,
        null, {
          headers: {
            'Accept': Http.versionMime('application/octet-stream')
          },
          responseType: 'arraybuffer',
          onDownloadProgress: downloadProgressCallback
        }).then((response) => {
          return new Blob([response.data], { type: 'application/octet-stream' });
        });
  }

  /**
   * Download one or more O365 Team Post(s) as .msg file
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamItemsExportRequest} request
   * @param {function} downloadProgressCallback optional progress callback if user wishes to receive progress events
   * @returns {Promise<Blob>} will return a promise with the Blob to download
   */
  /* istanbul ignore next: autogenerated */
  async saveTeamPosts(teamId: string, channelId: string, request: O365TeamItemsExportRequest,
                     downloadProgressCallback?: (e: any) => void): Promise<Blob> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/posts/action/save`,
        request.json, {
          headers: {
            'Accept': Http.versionMime('application/octet-stream')
          },
          responseType: 'arraybuffer',
          onDownloadProgress: downloadProgressCallback
        }).then((response) => {
          return new Blob([response.data], { type: 'application/octet-stream' });
        });
  }

  /**
   * Get O365 Team Channel Tabs
   * Proxying directly to vbo: page and pageSize are used as offset and limit respectively
   * @param {string} teamId
   * @param {string} channelId
   * @param {number} page
   * @param {number} pageSize
   * @returns {Promise<Array<O365TeamTab>>} the list of O365 Team channel tabs
   */
  /* istanbul ignore next: autogenerated */
  async getTeamChannelTabs(teamId: string, channelId: string, page?: number,
                           pageSize?: number): Promise<Array<O365TeamTab>> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/tabs`, {
      params: {
        channelId: channelId,
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365TeamTabJson>;
      return json.map((it) => new O365TeamTab(it));
    });
  }

  /**
   * Restore a O365 Team Tab
   * @param {string} teamId
   * @param {string} channelId
   * @param {O365TeamsRestoreOptionsRequest} request
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreTeamTab(teamId: string, channelId: string, request: O365TeamsRestoreOptionsRequest): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return Iland.getHttp().post(`/o365-restore-sessions/${this.uuid}/teams/${teamId}/channels/${channelId}/tabs/action/restore-tabs`, request.json);
  }

  /**
   * Get the O365 Device code
   * @returns {Promise<O365DeviceCode>}
   */
  /* istanbul ignore next: autogenerated */
  async getO365DeviceCode(): Promise<O365DeviceCode> {
    return Iland.getHttp().get(`/o365-restore-sessions/${this.uuid}/actions/get-o365-device-code`)
        .then((response) => {
          const json = response.data as O365DeviceCodeJson;
          return new O365DeviceCode(json);
        });
  }
}
