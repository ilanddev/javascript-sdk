import { EdgeGatewayDhcpStaticRouteJson } from './edge-gateway-dhcp-static-route-json';

export interface EdgeGatewayDhcpOptionsJson {
  option121: EdgeGatewayDhcpOption121Json;
  option66: string;
  option67: string;
  option150: EdgeGatewayDhcpOption150Json;
  option26: string;
  other: Array<EdgeGatewayDhcpOtherJson>;
}

export interface EdgeGatewayDhcpOption121Json {
  static_routes: Array<EdgeGatewayDhcpStaticRouteJson>;
}

export interface EdgeGatewayDhcpOption150Json {
  servers: Array<string>;
}
export interface EdgeGatewayDhcpOtherJson {
  code: string;
  value: string;
}
