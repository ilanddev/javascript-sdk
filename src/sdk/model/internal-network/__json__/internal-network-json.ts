import { AbstractNetworkJson } from './abstract-network-json';

/**
 * Interface for Internal Network JSON properties.
 */
export interface InternalNetworkJson extends AbstractNetworkJson {
  edge_uuid: string | null;
  shared: boolean;
  retain_net_info_across_deployments: boolean;
  sub_interface: boolean;
  distributed_interface: boolean;
  guest_vlan_allowed: boolean;
}
