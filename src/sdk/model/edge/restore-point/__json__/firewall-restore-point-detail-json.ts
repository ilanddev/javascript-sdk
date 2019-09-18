import { EdgeGatewayFirewallJson } from '../../edge-gateway-firewall/__json__/edge-gateway-firewall-json';

export interface FirewallRestorePointDetailsJson {
  description: string;
  restore_point_time: number;
  data: EdgeGatewayFirewallJson;
}
