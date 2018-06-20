/**
 * Static Route Update Request JSON interface.
 */
export interface StaticRouteUpdateRequestJson {
  edge_uuid: string;
  idx: number;
  name: string;
  network: string;
  next_hop_i_p: string;
  interface_type: string;
  interface: string;
}
