import { EntityType } from '../../common/__json__/entity-type';
import { PagingOrder } from '../../user/__json__/paging-order';

export interface TaskFilterParamsJson {
  entity_uuid: string;
  entity_type: EntityType;
  include_descendant_tasks?: boolean;
  synced?: boolean;
  username?: string;
  timestamp_after?: number;
  timestamp_before?: number;
  query_timestamp?: number;
  offset?: number;
  limit?: number;
  order?: PagingOrder;
}
