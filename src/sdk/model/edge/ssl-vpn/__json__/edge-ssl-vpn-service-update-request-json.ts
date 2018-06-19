import {
  EdgeSslVpnClientInstallPackageUpdateRequestJson
} from './edge-ssl-vpn-client-install-package-update-request-json';
import { EdgeSslVpnIpPoolUpdateRequestJson } from './edge-ssl-vpn-ip-pool-update-request-json';
import {
  EdgeSslVpnLocalAuthenticationServerUpdateRequestJson
} from './edge-ssl-vpn-local-authentication-server-update-request-json';
import { EdgeSslVpnPrivateNetworkUpdateRequestJson } from './edge-ssl-vpn-private-network-update-request-json';
import { EdgeSslVpnUserUpdateRequestJson } from './edge-ssl-vpn-user-update-request-json';
import { EdgeSslVpnAuthenticationUpdateRequestJson } from './edge-ssl-vpn-authentication-update-request-json';

export interface EdgeSslVpnServiceUpdateRequestJson {
  edge_uuid: string;
  enabled: boolean;
  log_enabled: boolean;
  log_level: string;
  ip: string;
  port: number;
  cipher_list: Array<string>;
  private_networks: Array<EdgeSslVpnPrivateNetworkUpdateRequestJson>;
  users: Array<EdgeSslVpnUserUpdateRequestJson>;
  ip_pools: Array<EdgeSslVpnIpPoolUpdateRequestJson>;
  install_packages: Array<EdgeSslVpnClientInstallPackageUpdateRequestJson>;
  authentication_config: EdgeSslVpnLocalAuthenticationServerUpdateRequestJson;
  authentication: EdgeSslVpnAuthenticationUpdateRequestJson;
}
