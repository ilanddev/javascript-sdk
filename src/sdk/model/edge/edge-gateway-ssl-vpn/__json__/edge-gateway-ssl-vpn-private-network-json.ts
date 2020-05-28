import { EdgeGatewaySslVpnSendOverTunnelJson } from './edge-gateway-ssl-vpn-send-over-tunnel-json';

export interface EdgeGatewaySslVpnPrivateNetworkJson {
  enabled: boolean;
  network: string;
  description: string;
  send_over_tunnel: EdgeGatewaySslVpnSendOverTunnelJson;
}
