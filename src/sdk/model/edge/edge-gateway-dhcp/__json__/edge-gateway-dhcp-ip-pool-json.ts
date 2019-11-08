import { EdgeGatewayDhcpOptionsJson } from './edge-gateway-dhcp-options-json';

export interface EdgeGatewayDhcpIpPoolJson {
  auto_configure_dns: boolean;
  default_gateway: string;
  domain_name: string;
  primary_name_server: string;
  secondary_name_server: string;
  pool_id: string;
  ip_range: string;
  lease_time: string;
  subnet_mask: string;
  allow_huge_range: boolean;
  next_server: string;
  dhcp_options: EdgeGatewayDhcpOptionsJson;
}
