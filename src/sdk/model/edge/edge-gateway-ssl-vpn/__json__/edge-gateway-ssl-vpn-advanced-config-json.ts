import { EdgeGatewaySslVpnTimeoutJson } from './edge-gateway-ssl-vpn-timeout-json';

export interface EdgeGatewaySslVpnAdvancedConfigJson {
  enable_compression: boolean;
  force_virtual_keyboard: boolean;
  randomize_virtual_keys: boolean;
  prevent_multiple_logon: boolean;
  client_notification: string;
  enable_public_url_access: boolean;
  timeout: EdgeGatewaySslVpnTimeoutJson;
}
