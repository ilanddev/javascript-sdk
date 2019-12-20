import { EdgeGatewayL2VpnClientJson } from './edge-gateway-l2vpn-client-json';
import { EdgeGatewayL2VpnServerJson } from './edge-gateway-l2vpn-server-json';

export interface EdgeGatewayL2VpnSiteJson {
  client: EdgeGatewayL2VpnClientJson;
  server: EdgeGatewayL2VpnServerJson;
}
