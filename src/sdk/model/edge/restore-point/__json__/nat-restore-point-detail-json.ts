import { EdgeGatewayNatJson } from '../../edge-gateway-nat/__json__/edge-gateway-nat-json';

export interface NATRestorePointDetailsJson {
  description: string;
  restore_point_time: number;
  data: EdgeGatewayNatJson;
}
