import { EdgeIpSecVpnEndpointJson } from './edge-ipsec-vpn-endpoint-json';
import { EdgeIpSecVpnTunnelJson } from './edge-ipsec-vpn-tunnel-json';

/**
 * Edge Ip Sec Vpn Service Config JSON interface.
 */
export interface EdgeIpsecVpnServiceConfigJson {
  version: number;
  edge_uuid: string;
  enabled: boolean | null;
  endpoints: Array<EdgeIpSecVpnEndpointJson> | null;
  tunnels: Array<EdgeIpSecVpnTunnelJson> | null;
}
