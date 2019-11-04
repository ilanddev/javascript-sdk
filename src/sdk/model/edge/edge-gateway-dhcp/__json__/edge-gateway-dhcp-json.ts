import { EdgeGatewayDhcpIpPoolJson } from './edge-gateway-dhcp-ip-pool-json';
import { EdgeGatewayDhcpLoggingJson } from './edge-gateway-dhcp-logging-json';
import { EdgeGatewayDhcpRelayJson } from './edge-gateway-dhcp-relay-json';
import { EdgeGatewayDhcpStaticBindingJson } from './edge-gateway-dhcp-static-binding-json';

export interface EdgeGatewayDhcpJson {
  enabled: boolean;
  static_bindings: Array<EdgeGatewayDhcpStaticBindingJson>;
  ip_pools: Array<EdgeGatewayDhcpIpPoolJson>;
  logging: EdgeGatewayDhcpLoggingJson;
  relay: EdgeGatewayDhcpRelayJson;
}
