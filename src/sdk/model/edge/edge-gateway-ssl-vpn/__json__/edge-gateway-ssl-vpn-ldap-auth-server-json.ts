import { EdgeGatewaySslVpnAuthServerJson } from './edge-gateway-ssl-vpn-auth-server-json';

export interface EdgeGatewaySslVpnLdapAuthServerJson extends EdgeGatewaySslVpnAuthServerJson {
  enable_ssl: boolean;
  ip: string;
  port: number;
  timeout: number;
  search_base: string;
  bind_domain_name: string;
  bind_password: string;
  login_attribute_name: string;
  search_filter: string;
  certificate_sha1_digest: string;
}
