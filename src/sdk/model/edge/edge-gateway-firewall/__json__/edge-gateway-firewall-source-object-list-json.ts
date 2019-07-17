import { EdgeGatewayFirewallObjectJson } from './edge-gateway-firewall-object-json';
import { EdgeGatewayFirewallObjectPagingParamsJson } from './edge-gateway-firewall-object-paging-params-json';

export interface EdgeGatewayFirewallSourceObjectListJson {
  current_page_parameters: EdgeGatewayFirewallObjectPagingParamsJson;
  next_page_parameters: EdgeGatewayFirewallObjectPagingParamsJson;
  total_records: number;
  last_page: boolean;
  data: Array<EdgeGatewayFirewallObjectJson>;
}
