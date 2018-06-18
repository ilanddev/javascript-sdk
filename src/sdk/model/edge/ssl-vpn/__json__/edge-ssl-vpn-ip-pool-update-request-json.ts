export interface EdgeSslVpnIpPoolUpdateRequestJson {
  description: string;
  ip_range: string;
  netmask: string;
  gateway: string;
  primary_dns: string;
  secondary_dns: string;
  dns_suffix: string;
  wins_server: string;
  enabled: boolean;
}
