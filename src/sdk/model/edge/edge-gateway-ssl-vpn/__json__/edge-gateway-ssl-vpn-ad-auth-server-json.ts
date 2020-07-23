import { EdgeGatewaySslVpnAuthServerJson } from './edge-gateway-ssl-vpn-auth-server-json';

export interface EdgeGatewaySslVpnAdAuthServerJson extends EdgeGatewaySslVpnAuthServerJson {
  ip: string;
  port: number;
  timeout: number;
  enable_ssl: boolean;
  search_base: string;
  bind_domain_name: string;
  bind_password: string;
  login_attribute_name: string;
  search_filter: string;
  certificate_sha1_digest: string;
}
