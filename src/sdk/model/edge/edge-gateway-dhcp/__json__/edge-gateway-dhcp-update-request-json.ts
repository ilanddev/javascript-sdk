import { EdgeGatewayDhcpStaticBindingJson } from './edge-gateway-dhcp-static-binding-json';
import { EdgeGatewayDhcpIpPoolJson } from './edge-gateway-dhcp-ip-pool-json';
import { EdgeGatewayDhcpLoggingJson } from './edge-gateway-dhcp-logging-json';
import { EdgeGatewayDhcpRelayJson } from './edge-gateway-dhcp-relay-json';

export interface EdgeGatewayDhcpUpdateRequestJson {
  enabled: boolean;
  static_bindings: Array<EdgeGatewayDhcpStaticBindingJson>;
  ip_pools: Array<EdgeGatewayDhcpIpPoolJson>;
  logging: EdgeGatewayDhcpLoggingJson;
  relay: EdgeGatewayDhcpRelayJson;
}
