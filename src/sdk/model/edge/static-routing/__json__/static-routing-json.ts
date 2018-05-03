export interface StaticRoutingServiceJson {
  edge_uuid: string;
  enabled: boolean;
  routes: Array<StaticRouteJson> | null;
}

export interface StaticRouteJson {
  edge_uuid: string | null;
  idx: number;
  name: string | null;
  network: string | null;
  next_hop_ip: string | null;
  interface_type: string | null;
  interface: string | null;
}
