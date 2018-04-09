export interface EdgeIpsecVpnServiceJson {
  edge_uuid: string;
  enabled: boolean | null;
  endpoints: Array<EdgeIpSecVpnEndpointJson> | null;
  tunnels: Array<EdgeIpSecVpnTunnelJson> | null;
}

export interface EdgeIpSecVpnEndpointJson {
  public_ip: string | null;
  network: string | null;
}

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

export interface EdgeIpSecVpnSubnetJson {
  name: string | null;
  gateway: string | null;
  netmask: string | null;
}

export interface EdgeIpSecVpnPeerJson {
  type: string | null;
  id: string | null;
  name: string | null;
  vcd_url: string | null;
  vcd_org: string | null;
  vcd_username: string | null;
}
