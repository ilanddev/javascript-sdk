import { EdgeGatewayL2vpnStatisticsDataJson } from './edge-gateway-l2vpn-statistics-data-json';

/**
 * L2VPN Statistics JSON Object returned by API
 */
export interface EdgeGatewayL2vpnStatisticsJson {
  timestamp: number;
  l2vpn_stats: Array<EdgeGatewayL2vpnStatisticsDataJson>;
}
