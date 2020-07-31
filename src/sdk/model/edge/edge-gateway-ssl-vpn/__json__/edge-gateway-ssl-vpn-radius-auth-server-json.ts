import { EdgeGatewaySslVpnAuthServerJson } from './edge-gateway-ssl-vpn-auth-server-json';

export interface EdgeGatewaySslVpnRadiusAuthServerJson extends EdgeGatewaySslVpnAuthServerJson {
  ip: string;
  port: number;
  timeout: number;
  secret: string;
  nas_ip: string;
  retry_count: number;
}
