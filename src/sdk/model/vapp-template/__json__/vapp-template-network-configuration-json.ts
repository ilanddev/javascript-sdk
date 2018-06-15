import { NetworkIpScopeJson } from '../../common/__json__/network-ip-scope-json';
import { FenceModeType } from '../../common/__json__/fence-mode-type';

/**
 * vApp Template Network Configuration Response JSON.
 */
export interface VappTemplateNetworkConfigurationJson {
  name: string;
  description: string;
  fence_mode: FenceModeType;
  ip_scope: NetworkIpScopeJson;
  parent_network_name: string;
}
