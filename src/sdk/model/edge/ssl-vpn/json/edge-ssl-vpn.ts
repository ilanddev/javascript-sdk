export interface EdgeSslVpnServiceJson {
  enabled: boolean | null;
  log_enabled: boolean | null;
  log_level: string | null;
  ip: string;
  port: number;
  cipher_list: Array<string>;
  private_networks: Array<EdgeSslVpnPrivateNetworkJson> | null;
  users: Array<EdgeSslVpnUserJson> | null;
  ip_pools: Array<EdgeSslVpnIpPoolJson> | null;
  client_install_packages: Array<EdgeSslVpnClientInstallPackageJson> | null;
  authentication_config: EdgeSslVpnLocalAuthenticationServerJson | null;
  authentication: EdgeSslVpnAuthenticationJson | null;
}

export interface EdgeSslVpnPrivateNetworkJson {
  enabled: boolean | null;
  description: string | null;
  network: string | null;
  ports: string | null;
  optimize: boolean | null;
}

export interface EdgeSslVpnUserJson {
  user_id: string;
  object_id: string | null;
  first_name: string;
  last_name: string;
  description: string | null;
  disable_account: boolean | null;
  password: string | null;
  password_never_expires: boolean | null;
  change_pwd_on_next_login: boolean | null;
}

export interface EdgeSslVpnIpPoolJson {
  description: string | null;
  ip_range: string | null;
  netmask: string | null;
  gateway: string | null;
  primary_dns: string | null;
  secondary_dns: string | null;
  dns_suffix: string | null;
  wins_server: string | null;
  enabled: boolean | null;
}

export interface EdgeSslVpnClientInstallPackageJson {
  profile_name: string | null;
  gateway_list: Array<EdgeSslVpnGatewayJson> | null;
  start_client_on_login: boolean | null;
  hide_systray_icon: boolean | null;
  remember_password: boolean | null;
  silent_mode_operation: boolean | null;
  silent_mode_installation: boolean | null;
  hide_network_adaptor: boolean | null;
  create_desktop_icon: boolean | null;
  enforce_server_security_cert_validation: boolean | null;
  create_linux_client: boolean | null;
  create_mac_client: boolean | null;
  description: string | null;
  enabled: boolean | null;
}

export interface EdgeSslVpnLocalAuthenticationServerJson {
  type: VpnLocalAuthenticationServerType;
  enabled: boolean;
  pwd_min_length: number | null;
  pwd_max_length: number | null;
  pwd_min_alphabets: number | null;
  pwd_min_digits: number | null;
  pwd_min_special_characters: number | null;
  pwd_allow_user_id_within_pwd: boolean | null;
  pwd_lifetime: number | null;
  pwd_expiry_notification: number | null;
  retry_count: number | null;
  retry_duration: number | null;
  lockout_duration: number | null;
}

export interface EdgeSslVpnAdAuthenticationServerJson {
  type: VpnLocalAuthenticationServerType;
  enabled: boolean;
  ip: string;
  port: number | null;
  timeout: number | null;
  enable_ssl: boolean | null;
  search_base: string;
  bind_domain_name: string;
  bind_password: string | null;
  login_attribute_name: string | null;
  search_filter: string | null;
  terminate_session_on_auth_fails: boolean | null;
}

export interface EdgeSslVpnLdapAuthenticationServerJson {
  type: VpnLocalAuthenticationServerType;
  enabled: boolean | null;
  ip: string;
  port: number | null;
  timeout: number | null;
  enable_ssl: boolean | null;
  search_base: string;
  bind_domain_name: string;
  bind_password: string | null;
  login_attribute_name: string | null;
  search_filter: string | null;
}

export interface EdgeSslVpnRadiusAuthenticationServerJson {
  type: VpnLocalAuthenticationServerType;
  ip: string;
  port: number | null;
  timeout: number | null;
  secret: string;
  nas_ip: string | null;
  retry_count: number | null;
}

export interface EdgeSslVpnRsaAuthenticationServerJson {
  type: VpnLocalAuthenticationServerType;
  timeout: number | null;
  source_ip: string;
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
  host_name: string | null;
  port: string | null;
}

export type VpnLocalAuthenticationServerType = 'LOCAL' | 'LDAP' | 'AD' | 'RADIUS' | 'RSA';
