import { IpScopeJson } from './ip-scope-json';

export interface OrgVdcNetworkUpdateRequestJson {
  uuid: string;
  name: string;
  description: string;
  edge_uuid: string;
  shared: boolean;
  fence_mode: OrgVdcNetworkUpdateFenceMode;
  ip_scope: IpScopeJson;
}

export type OrgVdcNetworkUpdateFenceMode = 'NAT_ROUTED' |
    'ISOLATED';
