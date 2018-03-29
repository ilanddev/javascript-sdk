export type SupportTicketStatus = 'WAITING_ON_ILAND' | 'COMPLETED' | 'WAITING_ON_CUSTOMER' | 'PENDING_COMPLETION' |
  'SCHEDULED_WITH_CUSTOMER' | 'NEW' | 'CANCELLED' | 'FEATURE_REQUESTED';

export type SupportTicketSeverity = 'PRODUCTION_SYSTEM_DOWN' | 'SYSTEM_IMPAIRED' | 'GENERAL_GUIDANCE';

export type SupportTicketCommentType = 'DISCUSSION' | 'RESOLUTION';

export interface SupportTicketJson {
  id: number;
  summary: string;
  status: SupportTicketStatus;
  crm: string;
  creator_full_name: string;
  creator_user_name: string;
  creation_date: number;
  cc_email_addresses: Array<string>;
  cc_emails_enabled: boolean;
  regarding_id: number | null;
  service_id: number | null;
  category_id: number | null;
  severity: SupportTicketSeverity;
  regarding_name: string;
  service_name: string;
  category_name: string;
}

export interface SupportTicketAttachmentJson {
  id: number;
  title: string;
  filename: string;
  server_filename: string;
  creation_date: number;
  creator_user_name: string;
  creator_full_name: string;
}

export interface SupportTicketCommentJson {
  id: number;
  ticket_id: number;
  text: string;
  creator_username: string;
  creator_full_name: string;
  comment_type: SupportTicketCommentType;
  creation_date: number;
}
