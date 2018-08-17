import { EntityType } from '../../common/__json__/entity-type';
import { EventType } from './event-type';
import { PagingOrder } from '../../user/__json__/paging-order';

export interface EventFilterQueryParams {
  entityUuid: string;
  entityType: EntityType;
  includeDescendantEvents?: boolean;
  type?: EventType;
  taskUuid?: string;
  initiatedBy?: string;
  timestampAfter?: number;
  timestampBefore?: number;
  queryTimestamp?: number;
  offset?: number;
  limit?: number;
  order?: PagingOrder;
}
