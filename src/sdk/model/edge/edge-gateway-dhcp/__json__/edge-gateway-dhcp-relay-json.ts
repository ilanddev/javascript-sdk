import { EdgeGatewayDhcpRelayAgentJson } from './edge-gateway-dhcp-relay-agent-json';
import { EdgeGatewayDhcpRelayServerJson } from './edge-gateway-dhcp-relay-server-json';

export interface EdgeGatewayDhcpRelayJson {
  relay_server: EdgeGatewayDhcpRelayServerJson;
  relay_agents: Array<EdgeGatewayDhcpRelayAgentJson>;
}
