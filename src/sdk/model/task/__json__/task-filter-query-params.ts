import { EntityType } from '../../common/__json__/entity-type';
import { PagingOrder } from '../../user/__json__/paging-order';

export interface TaskFilterQueryParams {
  entityUuid: string;
  entityType: EntityType;
  includeDescendantTasks?: boolean;
  synced?: boolean;
  username?: string;
  timestampAfter?: number;
  timestampBefore?: number;
  queryTimestamp?: number;
  offset?: number;
  limit?: number;
  order?: PagingOrder;
}
