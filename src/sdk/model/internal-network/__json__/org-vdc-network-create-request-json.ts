import { IpScopeJson } from './ip-scope-json';
import { FenceModeType } from '../../common/__json__/fence-mode-type';

/**
 * Org vDC Network Create Request JSON interface.
 */
export interface OrgVdcNetworkCreateRequestJson {
  name: string;
  description: string;
  edge_uuid: string;
  shared: boolean;
  fence_mode: FenceModeType;
  ip_scope: IpScopeJson;
  retain_net_info_across_deployments: boolean;
  sub_interface: boolean;
  distributed_interface: boolean;
  guest_vlan_allowed: boolean;
}
