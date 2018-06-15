/**
 * Interface for Static Route JSON representation
 */
export interface StaticRouteJson {
  edge_uuid: string | null;
  idx: number;
  name: string | null;
  network: string | null;
  next_hop_ip: string | null;
  interface_type: string | null;
  interface: string | null;
}
