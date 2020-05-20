import { EdgeGatewaySslVpnAuthServerJson } from './edge-gateway-ssl-vpn-auth-server-json';

export interface EdgeGatewaySslVpnPasswordAuthenticationJson {
  authentication_timeout: number;
  primary_auth_servers: Array<EdgeGatewaySslVpnAuthServerJson>;
  secondary_auth_server: EdgeGatewaySslVpnAuthServerJson;
}
