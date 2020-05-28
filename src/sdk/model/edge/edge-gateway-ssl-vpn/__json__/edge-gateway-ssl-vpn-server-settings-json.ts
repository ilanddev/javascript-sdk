import { EdgeGatewaySslVpnCipherType } from '../edge-gateway-ssl-vpn-cipher-type';

export interface EdgeGatewaySslVpnServerSettingsJson {
  ip_address: string;
  port: number;
  certificate_id: string;
  cipher_list: Array<EdgeGatewaySslVpnCipherType>;
}
