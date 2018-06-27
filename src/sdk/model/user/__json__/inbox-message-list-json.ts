import { InboxMessageFilterParams } from '../inbox-message-filter-params';
import { InboxMessageJson } from './inbox-message-json';

/**
 * Inbox Message List JSON Interface.
 */
export interface InboxMessageListJson {
  current_page_parameters: InboxMessageFilterParams;
  next_page_parameters: InboxMessageFilterParams;
  total_records: number;
  last_page: boolean;
  data: Array<InboxMessageJson>;
}
