import { EdgeGatewayL2vpnTunnelStatusType } from '../edge-gateway-l2vpn-statistics-tunnel-status-type';

/**
 * L2VPN Statistics Data JSON Object.
 */
export interface EdgeGatewayL2vpnStatisticsDataJson {
  name: string;
  tunnel_status: EdgeGatewayL2vpnTunnelStatusType;
  established_date: number;
  tx_bytes_from_local_subnet: number;
  rx_bytes_on_local_subnet: number;
  dropped_rx_packets: number;
  dropped_tx_packets: number;
  failure_message: string;
  last_updated_time: number;
}
