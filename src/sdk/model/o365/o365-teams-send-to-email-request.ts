import { O365TeamsSendToEmailRequestJson } from './__json__/o365-teams-send-to-email-request-json';

/**
 * O365 Teams send to email Request
 */
/* istanbul ignore next: autogenerated */
export class O365TeamsSendToEmailRequest {
  constructor(private _json: O365TeamsSendToEmailRequestJson) {
  }

  /**
   * Get the email address from which the attachments will be sentDefault value is nobody@iland.com.
   * @returns {string}
   */
  get from(): string {
    return this._json.from;
  }

  /**
   * Get the email address to which the attachments will be sent.
   * @returns {string}
   */
  get to(): string {
    return this._json.to;
  }

  /**
   * Get the subject of the email message used for sending the attachments.
   * @returns {string}
   */
  get subject(): string {
    return this._json.subject;
  }

  /**
   * Get the body of the email message used for sending the attachments.
   * @returns {string}
   */
  get text(): string {
    return this._json.text;
  }

  /**
   * Get the set of IDs of Teams item types that are included in the request.
   * @returns {Array<string> | undefined}
   */
  get itemIds(): Array<string> | undefined {
    return this._json.item_ids;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365TeamsSendToEmailRequestJson}
   */
  get json(): O365TeamsSendToEmailRequestJson {
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
