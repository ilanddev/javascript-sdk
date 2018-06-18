import { SupportTicketCommentType } from './support-ticket-comment-type';

/**
 * Support Ticket Comment JSON interface.
 */
export interface SupportTicketCommentJson {
  id: number;
  ticket_id: number;
  text: string;
  creator_username: string;
  creator_full_name: string;
  comment_type: SupportTicketCommentType;
  creation_date: number;
}
