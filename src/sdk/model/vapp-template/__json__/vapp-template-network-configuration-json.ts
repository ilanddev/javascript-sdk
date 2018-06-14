import { NetworkFenceMode, NetworkIpScopeJson } from '../../common';

/**
 * vApp Template Network Configuration Response JSON.
 */
export interface VappTemplateNetworkConfigurationJson {
  name: string;
  description: string;
  fence_mode: NetworkFenceMode;
  ip_scope: NetworkIpScopeJson;
  parent_network_name: string;
}
