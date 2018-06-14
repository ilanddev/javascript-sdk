import { ContactType } from './contact-type';
import { SeverityType } from './severity-type';

/**
 * Support Ticket Create Request JSON interface.
 */
export interface SupportTicketCreateRequestJson {
  summary: string;
  description: string;
  cc_email_addresses: Array<string>;
  cc_emails_enabled: boolean;
  regarding_id: number;
  service_id: number;
  category_id: number;
  severity: SeverityType;
  contact_type: ContactType;
  phone_number: string;
  phone_number_ext: string;
}
