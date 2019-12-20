import { EdgeGatewayL2VpnSiteType } from '../edge-gateway-l2vpn-site-type';
import { EdgeGatewayL2VpnLoggingJson } from './edge-gateway-l2vpn-logging-json';
import { EdgeGatewayL2VpnSiteJson } from './edge-gateway-l2vpn-site-json';

export interface EdgeGatewayL2VpnJson {
  enabled: boolean;
  logging: EdgeGatewayL2VpnLoggingJson;
  l2_vpn_site_type: EdgeGatewayL2VpnSiteType;
  l2_vpn_site: EdgeGatewayL2VpnSiteJson;
}
