import { EdgeSslVpnAuthServerType } from './edge-ssl-vpn-auth-server-type';

export interface EdgeSslVpnServiceJson {
  edge_uuid: string;
  enabled: boolean;
  log_enabled: boolean;
  log_level: string;
  ip: string;
  port: number;
  cipher_list: Array<string>;
  private_networks: Array<EdgeSslVpnPrivateNetworkJson>;
  users: Array<EdgeSslVpnUserJson>;
  ip_pools: Array<EdgeSslVpnIpPoolJson>;
  client_install_packages: Array<EdgeSslVpnClientInstallPackageJson>;
  authentication_config: EdgeSslVpnLocalAuthenticationServerJson;
  authentication: EdgeSslVpnAuthenticationJson;
}

export interface EdgeSslVpnPrivateNetworkJson {
  enabled: boolean;
  description: string;
  network: string;
  ports: string;
  optimize: boolean;
}

export interface EdgeSslVpnUserJson {
  user_id: string;
  object_id: string;
  first_name: string;
  last_name: string;
  description: string;
  disable_account: boolean;
  password: string;
  password_never_expires: boolean;
  change_pwd_on_next_login: boolean;
}

export interface EdgeSslVpnIpPoolJson {
  description: string;
  ip_range: string;
  netmask: string;
  gateway: string;
  primary_dns: string;
  secondary_dns: string;
  dns_suffix: string;
  wins_server: string;
  enabled: boolean;
}

export interface EdgeSslVpnClientInstallPackageJson {
  profile_name: string;
  gateway_list: Array<EdgeSslVpnGatewayJson>;
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

export interface EdgeSslVpnAuthenticationServerJson {
  type: EdgeSslVpnAuthServerType;
}

export interface EdgeSslVpnLocalAuthenticationServerJson {
  enabled: boolean;
  pwd_min_length: number;
  pwd_max_length: number;
  pwd_min_alphabets: number;
  pwd_min_digits: number;
  pwd_min_special_characters: number;
  allow_user_id_within_pwd: boolean;
  pwd_lifetime: number;
  pwd_expiry_notification: number;
  retry_count: number;
  retry_duration: number;
  lockout_duration: number;
  type: EdgeSslVpnAuthServerType;
}

export interface EdgeSslVpnAdAuthenticationServerJson {
  enabled: boolean;
  ip: string;
  port: number;
  timeout: number;
  enable_ssl: boolean;
  search_base: string;
  bind_domain_name: string;
  bind_password: string;
  login_attribute_name: string;
  search_filter: string;
  terminate_session_on_auth_fails: boolean;
  type: EdgeSslVpnAuthServerType;
}

export interface EdgeSslVpnLdapAuthenticationServerJson {
  enabled: boolean;
  search_filter: string;
  login_attribute_name: string;
  bind_password: string;
  bind_domain_name: string;
  search_base: string;
  enable_ssl: boolean;
  timeout: number;
  port: number;
  ip: string;
  type: EdgeSslVpnAuthServerType;
}

export interface EdgeSslVpnRadiusAuthenticationServerJson {
  ip: string;
  port: number;
  timeout: number;
  secret: string;
  nas_ip: string;
  retry_count: number;
  type: EdgeSslVpnAuthServerType;
}

export interface EdgeSslVpnRsaAuthenticationServerJson {
  timeout: number;
  source_ip: string;
  type: EdgeSslVpnAuthServerType;
}

export interface EdgeSslVpnAuthenticationJson {
  authentication_servers: Array<EdgeSslVpnLocalAuthenticationServerJson | EdgeSslVpnLdapAuthenticationServerJson |
    EdgeSslVpnAdAuthenticationServerJson | EdgeSslVpnRadiusAuthenticationServerJson |
    EdgeSslVpnRsaAuthenticationServerJson>;
  secondary_authentication_server: EdgeSslVpnLocalAuthenticationServerJson | EdgeSslVpnLdapAuthenticationServerJson |
    EdgeSslVpnAdAuthenticationServerJson | EdgeSslVpnRadiusAuthenticationServerJson |
    EdgeSslVpnRsaAuthenticationServerJson | null;
}

export interface EdgeSslVpnGatewayJson {
  host_name: string;
  port: string;
}
