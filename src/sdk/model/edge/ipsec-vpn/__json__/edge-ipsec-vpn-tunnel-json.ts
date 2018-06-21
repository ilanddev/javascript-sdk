import { EdgeIpSecVpnSubnetJson } from './edge-ipsec-vpn-subnet-json';
import { EdgeIpSecVpnPeerJson } from './edge-ipsec-vpn-peer-json';

/**
 * Edge Ip Sec Vpn Tunnel JSON interface.
 */
export interface EdgeIpSecVpnTunnelJson {
  name: string | null;
  description: string | null;
  peer_ip_address: string | null;
  peer_id: string | null;
  local_id: string | null;
  local_ip_address: string | null;
  local_subnets: Array<EdgeIpSecVpnSubnetJson> | null;
  peer_subnets: Array<EdgeIpSecVpnSubnetJson> | null;
  shared_secret: string | null;
  shared_secret_encrypted: boolean | null;
  encryption_protocol: string | null;
  mtu: number | null;
  enabled: boolean | null;
  operational: boolean | null;
  error_details: string | null;
  vpn_peer: EdgeIpSecVpnPeerJson | null;
}
