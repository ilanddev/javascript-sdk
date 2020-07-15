import { O365RestoreCredentialsRequestJson } from './__json__/o365-restore-credentials-request-json';

/**
 * O365 Restore Credentials Request
 */
/* istanbul ignore next: autogenerated */
export class O365RestoreCredentialsRequest {

  constructor(private _json: O365RestoreCredentialsRequestJson) {
  }

  /**
   * Get the credential request user
   */
  get user(): string {
    return this._json.user;
  }

  /**
   * Get the credential request password
   */
  get password(): string {
    return this._json.password;
  }

  /**
   * Get the specific email address of the mailbox to which you want to restore mailbox data
   * Required when restoring to a different mailbox
   */
  get mailboxToRestoreTo(): string | undefined {
    return this._json.mailbox_to_restore_to;
  }

  /**
   * Get changed items, If set to True, indicates that all versions of mailbox items will be restored
   * Required when restoring to a different mailbox.
   */
  get changedItems(): boolean | undefined {
    return this._json.changed_items;
  }

  /**
   * Get deleted items, If set to True, indicates that deleted mailbox items will be restored
   * Required when restoring to a different mailbox.
   */
  get deletedItems(): boolean | undefined {
    return this._json.deleted_items;
  }

  /**
   * Get mark restored items as unread, If set to True, indicates that restored mailbox folder data will
   * be marked as unread
   * Required when restoring to a different mailbox.
   */
  get markRestoredAsUnread(): boolean | undefined {
    return this._json.mark_restored_as_unread;
  }

  /**
   * Get exclude drafts, If set to True, indicates that Drafts mailbox folder will not be restored
   * Optional when restoring to a different mailbox.
   */
  get excludeDrafts(): boolean | undefined {
    return this._json.exclude_drafts;
  }

  /**
   * Get exclude deleted items, If set to True, indicates that Deleted Items mailbox folder will not be restored
   * Optional when restoring to a different mailbox.
   */
  get excludeDeletedItems(): boolean | undefined {
    return this._json.exclude_deleted_items;
  }

  /**
   * Get exclude in place hold items, If set to True, indicates that preserved items of mailboxes placed on
   * In-Place Hold will not be restored.
   * Optional when restoring to a different mailbox.
   */
  get excludeInPlaceHoldItems(): boolean | undefined {
    return this._json.exclude_in_place_hold_items;
  }

  /**
   * Get exclude litigation hold items, If set to True, indicates that preserved items of mailboxes placed on
   * Litigation Hold will not be restored
   * Optional when restoring to a different mailbox.
   */
  get excludeLitigationHoldItems(): boolean | undefined {
    return this._json.exclude_litigation_hold_items;
  }

  /**
   * Get folder to restore to, Specifies the folder to which you want to restore mailbox folder data
   * Optional when restoring to a different mailbox.
   */
  get folder(): string | null {
    return this._json.folder || null;
  }

  /**
   * Get CAS Server, Specifies the Microsoft Exchange server with Client Access Server (CAS) role.
   * The mailbox data will be restored to a specified mailbox server
   * Optional when restoring to a different mailbox.
   */
  get casServer(): string | null {
    return this._json.cas_server || null;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365RestoreCredentialsRequestJson}
   */
  get json(): O365RestoreCredentialsRequestJson {
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
