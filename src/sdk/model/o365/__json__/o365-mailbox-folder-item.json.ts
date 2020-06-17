/**
 * O365 Exchange Mailbox Folder Item JSON properties
 */
export interface O365MailboxFolderItemJson {
  id: string;
  from: string;
  cc: string;
  bcc: string;
  to: string;
  sent: number;
  received: number;
  reminder: boolean;
  subject: string;
  item_class: string;
}
