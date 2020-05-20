import { EdgeGatewaySslVpnPasswordAuthenticationJson } from './edge-gateway-ssl-vpn-password-authentication-json';

export interface EdgeGatewaySslVpnAuthenticationConfigurationJson {
  password_authentication: EdgeGatewaySslVpnPasswordAuthenticationJson;
  certificate_id: string;
}
