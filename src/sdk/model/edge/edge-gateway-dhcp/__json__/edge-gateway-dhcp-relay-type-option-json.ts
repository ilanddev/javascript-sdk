import { EdgeGatewayDhcpRelayTypeOptionPropertyJson } from './edge-gateway-dhcp-relay-type-option-property-json';

export interface EdgeGatewayDhcpRelayTypeOptionJson {
  type: string;
  name: string;
  properties: Array<EdgeGatewayDhcpRelayTypeOptionPropertyJson>;
}
