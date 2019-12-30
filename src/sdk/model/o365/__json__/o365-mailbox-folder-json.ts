/**
 * O365 Exchange Mailbox Folder JSON properties
 */
export interface O365MailboxFolderJson {
  id: string;
  name: string;
  type: O365ExchangeFolderType;
  description: string;
}

/**
 * O365 Exchange Folder type enum
 */
export enum O365ExchangeFolderType {
  JOURNAL = 'Journal',
  TASK = 'Task',
  STICKY_NOTE = 'StickyNote',
  CONTACT = 'Contact',
  APPOINTMENT = 'Appointment',
  NONE = 'None'
}
