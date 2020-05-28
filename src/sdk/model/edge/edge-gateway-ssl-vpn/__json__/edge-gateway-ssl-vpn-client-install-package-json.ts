import { EdgeGatewaySslVpnGatewayJson } from './edge-gateway-ssl-vpn-gateway-json';

export interface EdgeGatewaySslVpnClientInstallPackageJson {
  enabled: boolean;
  profile_name: string;
  gateway_list: Array<EdgeGatewaySslVpnGatewayJson>;
  description: string;
  create_linux_client: boolean;
  create_mac_client: boolean;
  start_client_on_logon: boolean;
  hide_systray_icon: boolean;
  remember_password: boolean;
  silent_mode_operation: boolean;
  silent_mode_installation: boolean;
  hide_network_adaptor: boolean;
  create_desktop_icon: boolean;
  enforce_server_security_cert_validation: boolean;
  disconnect_on_cert_validation_failure: boolean;
}
