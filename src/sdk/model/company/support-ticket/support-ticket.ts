import { Iland } from '../../../iland';
import {
  SupportTicketJson
} from './__json__/support-ticket-json';
import { SupportTicketStatus } from './__json__/support-ticket-status-type';
import { SupportTicketSeverity } from './__json__/support-ticket-severity-type';
import { SupportTicketComment } from './support-ticket-comment';
import { SupportTicketAttachment } from './support-ticket-attachment';
import { SupportTicketCommentCreateRequest } from './support-ticket-comment-create-request';
import { SupportTicketCommentJson } from './__json__/support-ticket-comment-json';
import { SupportTicketAttachmentCreateRequest } from './support-ticket-attachment-create-request';
import { SupportTicketAttachmentJson } from './__json__/support-ticket-attachment-json';

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
   * @returns {Promise<Array<SupportTicketAttachment>>}
   */
  async getAttachments(): Promise<Array<SupportTicketAttachment>> {
    return Iland.getHttp().get(`/companies/${this.crm}/support-tickets/${this.id}/attachments`).then((response) => {
      return response.data as Array<SupportTicketAttachment>;
    });
  }

  /**
   * Get ticket attachment.
   * @param {number} attachmentId
   * @returns {Promise<SupportTicketAttachment>}
   */
  async getAttachment(attachmentId: number): Promise<SupportTicketAttachment> {
    return Iland.getHttp().get(`/companies/${this.crm}/support-tickets/${this.id}/attachments/${attachmentId}`)
      .then((response) => {
        return response.data as SupportTicketAttachment;
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
   * Get ticket comments.
   * @returns {Promise<Array<SupportTicketComment>>}
   */
  async getComments(): Promise<Array<SupportTicketComment>> {
    return Iland.getHttp().get(`/companies/${this.crm}/support-tickets/${this.id}/comments`).then((response) => {
      return response.data as Array<SupportTicketComment>;
    });
  }

  /**
   * Add ticket comment.
   * @param {string} companyId
   * @param {SupportTicketCommentCreateRequest} newComment
   * @returns {Promise<SupportTicketComment>}
   */
  /* istanbul ignore next: autogenerated */
  async addTicketComment(companyId: string, newComment: SupportTicketCommentCreateRequest):
      Promise<SupportTicketComment> {
    return Iland.getHttp().post(`/companies/${companyId}/support-tickets/${this.id}/comments`, newComment.json)
        .then((response) => {
          const json = response.data as SupportTicketCommentJson;
          return new SupportTicketComment(json);
        });
  }

  /**
   * Add ticket attachment.
   * @param {string} companyId
   * @param {SupportTicketAttachmentCreateRequest} attachment
   * @returns {Promise<SupportTicketAttachment>}
   */
  /* istanbul ignore next: autogenerated */
  async addTicketAttachment(companyId: string, attachment: SupportTicketAttachmentCreateRequest):
      Promise<SupportTicketAttachment> {
    const formData = new FormData();
    formData.append('attachment', attachment.getContents, attachment.getFilename);
    return Iland.getHttp().post(`/companies/${companyId}/support-tickets/${this.id}/attachments`,
        formData).then((response) => {
          const json = response.data as SupportTicketAttachmentJson;
          return new SupportTicketAttachment(json);
        });
  }

}
