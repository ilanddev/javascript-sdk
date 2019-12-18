import { EdgeGatewayL2VpnClientConfigurationJson } from './edge-gateway-l2vpn-client-configuration-json';
import { EdgeGatewayL2VpnProxySettingsJson } from './edge-gateway-l2vpn-proxy-settings-json';
import { EdgeGatewayL2VpnUserJson } from './edge-gateway-l2vpn-user-json';

export interface EdgeGatewayL2VpnClientJson {
  configuration: EdgeGatewayL2VpnClientConfigurationJson;
  l2_vpn_user: EdgeGatewayL2VpnUserJson;
  proxy_setting: EdgeGatewayL2VpnProxySettingsJson;
}
