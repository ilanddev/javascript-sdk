import { RoutingDirectionType } from './routing-direction-type';
import { RoutingActionType } from './routing-action-type';

/**
 * BGP Filter JSON
 */
export interface BGPFilterJson {
  direction: RoutingDirectionType;
  action: RoutingActionType;
  network?: string;
  ip_prefix_ge: number;
  ip_prefix_le: number;
}
