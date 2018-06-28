/**
 * Inbox Message JSON interface.
 */
import { MessageFolder } from './message-folder';

export interface InboxMessageJson {
  uuid: string;
  subject: string;
  content: string;
  hash: string;
  folder: MessageFolder;
  read: boolean;
  time: number;
  username: string;
}
