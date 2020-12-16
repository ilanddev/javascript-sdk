import { DistributedFirewallObjectJson } from './distributed-firewall-object-json';
import { ObjectPagingParamsJson } from './object-paging-params-json';

export interface DistributedFirewallObjectListJson {
  current_page_parameters: ObjectPagingParamsJson;
  next_page_parameters: ObjectPagingParamsJson;
  total_records: number;
  last_page: boolean;
  data: Array<DistributedFirewallObjectJson>;
}
