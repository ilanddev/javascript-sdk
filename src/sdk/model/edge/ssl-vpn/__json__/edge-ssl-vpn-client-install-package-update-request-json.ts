import { EdgeSslVpnGatewayUpdateRequestJson } from './edge-ssl-vpn-gateway-update-request-json';

export interface EdgeSslVpnClientInstallPackageUpdateRequestJson {
  profile_name: string;
  gateway_list: Array<EdgeSslVpnGatewayUpdateRequestJson>;
  start_client_on_login: boolean;
  hide_systray_icon: boolean;
  remember_password: boolean;
  silent_mode_operation: boolean;
  silent_mode_installation: boolean;
  hide_network_adaptor: boolean;
  create_desktop_icon: boolean;
  enforce_server_security_cert_validation: boolean;
  create_linux_client: boolean;
  create_mac_client: boolean;
  description: string;
  enabled: boolean;
}
