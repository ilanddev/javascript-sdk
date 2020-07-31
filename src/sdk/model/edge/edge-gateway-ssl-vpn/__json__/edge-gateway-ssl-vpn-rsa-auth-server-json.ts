import { EdgeGatewaySslVpnAuthServerJson } from './edge-gateway-ssl-vpn-auth-server-json';

export interface EdgeGatewaySslVpnRsaAuthServerJson extends EdgeGatewaySslVpnAuthServerJson {
  timeout: number;
  config_file: string;
  config_file_data: string;
  config_file_name: string;
  source_ip: string;
}
