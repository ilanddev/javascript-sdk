import { NetworkIpScopeJson } from '../../common';

/**
 * External Network JSON
 */
export interface ExternalNetworkJson {
  graph_id1: string;
  graph_id2: string;
  ip_scope: NetworkIpScopeJson;
  ip_scopes: Array<NetworkIpScopeJson>;
  uuid: string;
  name: string;
  deleted: boolean;
  deleted_date: number;
  updated_date: number;
}
