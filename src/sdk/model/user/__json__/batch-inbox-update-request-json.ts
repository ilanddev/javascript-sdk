import { UpdateType } from './update-type';
import { MessageFolder } from './message-folder';
import { MessageSelection } from './message-selection';

/**
 * Batch Inbox Update Request JSON interface.
 */
export interface BatchInboxUpdateRequestJson {
  type: UpdateType;
  folder: MessageFolder;
  selection: MessageSelection;
  uuids: Array<string>;
}
