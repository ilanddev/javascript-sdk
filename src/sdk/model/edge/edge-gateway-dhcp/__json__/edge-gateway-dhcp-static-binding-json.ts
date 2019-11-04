import { EdgeGatewayDhcpOptionsJson } from './edge-gateway-dhcp-options-json';

/**
 * DHCP Static Binding JSON.
 */
export interface EdgeGatewayDhcpStaticBindingJson {
  auto_configure_dns: boolean;
  binding_id: string;
  vm_id: string;
  vnic_id: number;
  hostname: string;
  ip_address: string;
  default_gateway: string;
  domain_name: string;
  primary_name_server: string;
  secondary_name_server: string;
  lease_time: string;
  mac_address: string;
  subnet_mask: string;
  dhcp_options: EdgeGatewayDhcpOptionsJson;
  next_server: string;
}
