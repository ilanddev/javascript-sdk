import { EdgeGatewaySslVpnAdvancedConfigJson } from './edge-gateway-ssl-vpn-advanced-config-json';
import {
  EdgeGatewaySslVpnAuthenticationConfigurationJson
} from './edge-gateway-ssl-vpn-authentication-configuration-json';
import { EdgeGatewaySslVpnClientConfigurationJson } from './edge-gateway-ssl-vpn-client-configuration-json';
import { EdgeGatewaySslVpnClientInstallPackageJson } from './edge-gateway-ssl-vpn-client-install-package-json';
import { EdgeGatewaySslVpnIpAddressPoolJson } from './edge-gateway-ssl-vpn-ip-address-pool-json';
import { EdgeGatewaySslVpnLoggingJson } from './edge-gateway-ssl-vpn-logging-json';
import { EdgeGatewaySslVpnPrivateNetworkJson } from './edge-gateway-ssl-vpn-private-network-json';
import { EdgeGatewaySslVpnServerSettingsJson } from './edge-gateway-ssl-vpn-server-settings-json';
import { EdgeGatewaySslVpnUserJson } from './edge-gateway-ssl-vpn-user-json';

export interface EdgeGatewaySslVpnJson {
  enabled: boolean;
  logging: EdgeGatewaySslVpnLoggingJson;
  advanced_config: EdgeGatewaySslVpnAdvancedConfigJson;
  client_configuration: EdgeGatewaySslVpnClientConfigurationJson;
  ip_address_pools: Array<EdgeGatewaySslVpnIpAddressPoolJson>;
  private_networks: Array<EdgeGatewaySslVpnPrivateNetworkJson>;
  users: Array<EdgeGatewaySslVpnUserJson>;
  client_install_packages: Array<EdgeGatewaySslVpnClientInstallPackageJson>;
  authentication_configuration: EdgeGatewaySslVpnAuthenticationConfigurationJson;
  server_settings: EdgeGatewaySslVpnServerSettingsJson;
}
