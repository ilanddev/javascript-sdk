import { IpScopeJson } from './ip-scope-json';
import { NetworkFenceModeType } from '../../common/__json__/network-fence-mode-type';

/**
 * Org vDC Network Create Request JSON interface.
 */
export interface OrgVdcNetworkCreateRequestJson {
  uuid: string;
  name: string;
  description: string;
  edge_uuid: string;
  shared: boolean;
  fence_mode: NetworkFenceModeType;
  ip_scope: IpScopeJson;
}
