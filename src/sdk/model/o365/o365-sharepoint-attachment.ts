import { O365SharePointAttachmentJson } from './__json__/o365-sharepoint-attachment-json';

/**
 * O365 SharePoint Attachment
 */
/* istanbul ignore next: autogenerated */
export class O365SharePointAttachment {

  constructor(private _json: O365SharePointAttachmentJson) {
  }

  /**
   * Gets the id of the SharePoint Attachment
   */
  get id(): string {
    return this._json.id;
  }

  /**
   * Gets the name of the SharePoint Attachment
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Gets the size in bytes of the SharePoint Attachment
   */
  get sizeInBytes(): number {
    return this._json.size_bytes;
  }

  /**
   * Gets the url of the SharePoint Attachment
   */
  get url(): string {
    return this._json.url;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365SharePointAttachmentJson}
   */
  get json(): O365SharePointAttachmentJson {
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
