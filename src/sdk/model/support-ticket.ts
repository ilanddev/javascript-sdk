import {
  SupportTicketAttachmentJson, SupportTicketCommentJson, SupportTicketJson, SupportTicketSeverity,
  SupportTicketStatus
} from './json/support-ticket';
import { Iland } from '../iland';

/**
 * SupportTicket.
 */
export class SupportTicket {

  constructor(private _json: SupportTicketJson) {
  }

  /**
   * Get support ticket ID.
   * @returns {number}
   */
  get id(): number {
    return this._json.id;
  }

  /**
   * Get support ticket summary
   * @returns {string}
   */
  get summary(): string {
    return this._json.summary;
  }

  /**
   * Get support ticket status
   * @returns {SupportTicketStatus}
   */
  get status(): SupportTicketStatus {
    return this._json.status;
  }

  /**
   * Get support ticket crm
   * @returns {string}
   */
  get crm(): string {
    return this._json.crm;
  }

  /**
   * Get support ticket creator full name
   * @returns {string}
   */
  get creatorFullName(): string {
    return this._json.creator_full_name;
  }

  /**
   * Get support ticket creator username
   * @returns {string}
   */
  get creatorUserName(): string {
    return this._json.creator_user_name;
  }

  /**
   * Get support ticket creation date
   * @returns {Date}
   */
  get creationDate(): Date {
    return new Date(this._json.creation_date);
  }

  /**
   * Get support ticket cc email addresses
   * @returns {Array<string>}
   */
  get ccEmailAddresses(): Array<string> {
    return this._json.cc_email_addresses;
  }

  /**
   * Whether or not support ticket has CC emails field enabled.
   * @returns {boolean}
   */
  get ccEmailsEnabled(): boolean {
    return this._json.cc_emails_enabled;
  }

  /**
   * Get support ticket regarding ID
   * @returns {number}
   */
  get regardingId(): number | null {
    return this._json.regarding_id;
  }

  /**
   * Get support ticket service ID
   * @returns {number}
   */
  get serviceId(): number | null {
    return this._json.service_id;
  }

  /**
   * Get support ticket category ID
   * @returns {number}
   */
  get categoryId(): number | null {
    return this._json.category_id;
  }

  /**
   * Get support ticket severity
   * @returns {SupportTicketSeverity}
   */
  get severity(): SupportTicketSeverity {
    return this._json.severity;
  }

  /**
   * Get support ticket regarding name
   * @returns {string}
   */
  get regardingName(): string {
    return this._json.regarding_name;
  }

  /**
   * Get support ticket service name
   * @returns {string}
   */
  get serviceName(): string {
    return this._json.service_name;
  }

  /**
   * Get support ticket category name
   * @returns {string}
   */
  get categoryName(): string {
    return this._json.category_name;
  }

  /**
   * Get support ticket JSON string
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Get support ticket JSON object
   * @returns {SupportTicketJson}
   */
  get json(): SupportTicketJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get all ticket attachments.
   * @returns {Promise<Array<SupportTicketAttachmentJson>>}
   */
  async getAttachments(): Promise<Array<SupportTicketAttachmentJson>> {
    return Iland.getHttp().get(`/companies/${this.crm}/support-tickets/${this.id}/attachments`).then((response) => {
      return response.data as Array<SupportTicketAttachmentJson>;
    });
  }

  /**
   * Get ticket attachment.
   * @param {number} attachmentId
   * @returns {Promise<SupportTicketAttachmentJson>}
   */
  async getAttachment(attachmentId: number): Promise<SupportTicketAttachmentJson> {
    return Iland.getHttp().get(`/companies/${this.crm}/support-tickets/${this.id}/attachments/${attachmentId}`)
      .then((response) => {
        return response.data as SupportTicketAttachmentJson;
      });
  }

  /**
   * Whether or not the attachment is downloadable
   * @param {number} attachmentId
   * @returns {Promise<boolean>}
   */
  async isAttachmentDownloadable(attachmentId: number): Promise<boolean> {
    return Iland.getHttp()
      .get(`/companies/${this.crm}/support-tickets/${this.id}/attachments/${attachmentId}/is-downloadable`)
      .then((response) => {
        return response.data.is_downloadable;
      });
  }

  /**
   * Get ticket comments
   * @returns {Promise<Array<SupportTicketCommentJson>>}
   */
  async getComments(): Promise<Array<SupportTicketCommentJson>> {
    return Iland.getHttp().get(`/companies/${this.crm}/support-tickets/${this.id}/comments`).then((response) => {
      return response.data as Array<SupportTicketCommentJson>;
    });
  }

}
