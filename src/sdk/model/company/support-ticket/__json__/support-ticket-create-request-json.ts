export type ContactType = 'PHONE' |
    'EMAIL';

export type Severity = 'PRODUCTION_SYSTEM_DOWN' |
    'SYSTEM_IMPAIRED' |
    'GENERAL_GUIDANCE';

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
  severity: Severity;
  contact_type: ContactType;
  phone_number: string;
  phone_number_ext: string;
}
