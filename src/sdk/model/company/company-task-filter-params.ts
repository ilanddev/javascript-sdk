import { PagingOrder } from '../user/__json__/paging-order';

/**
 * Company Task Filter Params.
 */
export interface CompanyTaskFilterParams {
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
