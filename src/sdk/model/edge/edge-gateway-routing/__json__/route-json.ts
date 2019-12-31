/**
 * Route JSON
 */
export interface RouteJson {
  description: string;
  vnic: number;
  network: string;
  next_hop: string;
  mtu: number;
  type: string;
  admin_distance: number;
}
