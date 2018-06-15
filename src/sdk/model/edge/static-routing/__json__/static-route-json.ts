/**
 * Interface for Static Route JSON representation
 */
export interface StaticRouteJson {
  edge_uuid: string;
  idx: number;
  name: string;
  network: string;
  next_hop_ip: string;
  interface_type: string;
  interface: string;
}
