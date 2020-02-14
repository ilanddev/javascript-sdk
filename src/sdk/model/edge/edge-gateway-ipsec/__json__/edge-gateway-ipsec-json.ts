import { EdgeGatewayIpsecGlobalJson } from './edge-gateway-ipsec-global-json';
import { EdgeGatewayIpsecLoggingJson } from './edge-gateway-ipsec-logging-json';
import { EdgeGatewayIpsecSiteJson } from './edge-gateway-ipsec-site-json';

export interface EdgeGatewayIPsecJson {
  enabled: boolean;
  logging: EdgeGatewayIpsecLoggingJson;
  sites: Array<EdgeGatewayIpsecSiteJson>;
  global: EdgeGatewayIpsecGlobalJson;
}
