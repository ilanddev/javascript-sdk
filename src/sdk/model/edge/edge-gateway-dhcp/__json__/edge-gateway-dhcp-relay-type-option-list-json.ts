import { EdgeGatewayDhcpRelayTypeOptionJson } from './edge-gateway-dhcp-relay-type-option-json';
import {
  EdgeGatewayDhcpRelayTypeOptionPagingParamsJson
} from './edge-gateway-dhcp-relay-type-option-paging-params-json';

export interface EdgeGatewayDhcpRelayTypeOptionListJson {
  current_page_parameters: EdgeGatewayDhcpRelayTypeOptionPagingParamsJson;
  next_page_parameters: EdgeGatewayDhcpRelayTypeOptionPagingParamsJson;
  total_records: number;
  last_page: boolean;
  data: Array<EdgeGatewayDhcpRelayTypeOptionJson>;
}
