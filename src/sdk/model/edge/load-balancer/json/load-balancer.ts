export interface LoadBalancerServiceJson {
  edge_uuid: string;
  enabled: boolean;
  pools: Array<LoadBalancerPoolJson> | null;
  virtual_servers: Array<LoadBalancerVirtualServerJson> | null;
}

export interface LoadBalancerPoolJson {
  id: string | null;
  name: string | null;
  description: string | null;
  service_ports: Array<LbPoolServicePortJson> | null;
  members: Array<LbPoolMemberJson> | null;
  operational: boolean;
  error_details: string | null;
}

export interface LoadBalancerVirtualServerJson {
  name: string | null;
  enabled: boolean;
  description: string | null;
  ip_address: string | null;
  service_profiles: Array<LbVirtualServerServiceProfileJson> | null;
  logging: boolean;
  pool: string | null;
  network: string | null;
}

export interface LbPoolServicePortJson {
  enabled: boolean;
  protocol: string | null;
  algorithm: string | null;
  port: string | null;
  health_check_port: string | null;
  health_checks: Array<LbPoolHealthCheckJson> | null;
}

export interface LbPoolMemberJson {
  ip_address: string | null;
  weight: string | null;
  service_ports: Array<LbPoolServicePortJson> | null;
}

export interface LbVirtualServerServiceProfileJson {
  enabled: boolean;
  protocol: string | null;
  port: string | null;
  persistence: LbPersistenceJson | null;
}

export interface LbPoolHealthCheckJson {
  mode: string | null;
  uri: string | null;
  health_threshold: string | null;
  unhealth_threshold: string | null;
  interval: string | null;
  timeout: string | null;
}

export interface LbPersistenceJson {
  method: string | null;
  cookie_name: string | null;
  cookie_mode: string | null;
}
