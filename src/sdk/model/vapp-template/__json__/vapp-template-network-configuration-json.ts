import { NetworkFenceMode } from '../../common/network-fence-mode-type';
import { NetworkIpScopeJson } from '../../common/__json__/network-ip-scope-json';

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
