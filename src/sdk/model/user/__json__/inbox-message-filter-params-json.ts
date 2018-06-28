import { MessageFolder } from './message-folder';
import { PagingOrder } from './paging-order';

/**
 * Inbox Message Filter Params JSON interface.
 */
export interface InboxMessageFilterParamsJson {
  folder: MessageFolder;
  offset: number;
  limit: number;
  order: PagingOrder;
}
