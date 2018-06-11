import { IpScopeJson } from './ip-scope-json';
import { NetworkFenceMode } from '../../common/network-fence-mode-type';

/**
 * Org vDC Network Create Request JSON interface.
 */
export interface OrgVdcNetworkCreateRequestJson {
  uuid: string;
  name: string;
  description: string;
  edge_uuid: string;
  shared: boolean;
  fence_mode: NetworkFenceMode;
  ip_scope: IpScopeJson;
}
