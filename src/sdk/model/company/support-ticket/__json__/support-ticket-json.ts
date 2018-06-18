import { SupportTicketStatus } from './support-ticket-status-type';
import { SupportTicketSeverity } from './support-ticket-severity-type';

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
