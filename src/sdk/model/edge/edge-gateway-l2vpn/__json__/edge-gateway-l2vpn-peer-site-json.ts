import { EdgeGatewayL2VpnUserJson } from './edge-gateway-l2vpn-user-json';

export interface EdgeGatewayL2VpnPeerSiteJson {
  enabled: boolean;
  name: string;
  description: string;
  l2_vpn_user: EdgeGatewayL2VpnUserJson;
  vnics: Array<number>;
  egress_optimization: Array<string>;
}
