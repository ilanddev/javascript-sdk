import { EventJson } from './event-json';
import { EventFilterParamsJson } from './event-filter-params-json';

/**
 * Interface for event list json
 */
export interface EventListJson {
  current_page_parameters: EventFilterParamsJson;
  next_page_parameters: EventFilterParamsJson;
  total_records: number;
  last_page: boolean;
  data: Array<EventJson>;
}
