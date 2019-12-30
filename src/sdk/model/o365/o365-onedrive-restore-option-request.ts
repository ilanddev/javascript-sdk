import {
    O365OneDriveDocumentAction, O365OneDriveDocumentVersion,
    O365OneDriveRestoreOptionsRequestJson
} from './__json__/o365-onedrive-restore-option-request-json';

/**
 * O365 OneDrive Restore Options Request
 */
export class O365OneDriveRestoreOptionsRequest {

  constructor(private _json: O365OneDriveRestoreOptionsRequestJson) {
  }

  /**
   * Get user from OneDrive Restore request
   */
  get user(): string {
    return this._json.user;
  }

  /**
   * Get password from OneDrive Restore request
   */
  get password(): string {
    return this._json.password;
  }

  /**
   * Get action from OneDrive Restore request
   */
  get action(): O365OneDriveDocumentAction {
    return this._json.action;
  }

  /**
   * Get version from OneDrive Restore request
   */
  get version(): O365OneDriveDocumentVersion {
    return this._json.version;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365OneDriveRestoreOptionsRequestJson}
   */
  get json(): O365OneDriveRestoreOptionsRequestJson {
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
