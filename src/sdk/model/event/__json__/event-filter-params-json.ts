import { EntityType } from '../../common/__json__/entity-type';
import { EventType } from './event-type';
import { PagingOrder } from '../../user/__json__/paging-order';

export interface EventFilterParamsJson {
  entity_uuid: string;
  entity_type: EntityType;
  include_descendant_events?: boolean;
  type?: EventType;
  task_uuid?: string;
  initiated_by?: string;
  timestamp_after?: number;
  timestamp_before?: number;
  query_timestamp?: number;
  offset?: number;
  limit?: number;
  order?: PagingOrder;
}
