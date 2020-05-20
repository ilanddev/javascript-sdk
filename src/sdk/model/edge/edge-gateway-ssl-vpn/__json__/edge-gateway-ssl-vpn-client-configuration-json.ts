import { EdgeGatewaySslVpnFullTunnelJson } from './edge-gateway-ssl-vpn-full-tunnel-json';

export interface EdgeGatewaySslVpnClientConfigurationJson {
  auto_reconnect: boolean;
  full_tunnel: EdgeGatewaySslVpnFullTunnelJson;
  upgrade_notification: boolean;
}
