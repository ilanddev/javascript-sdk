import { EdgeGatewayFirewallObjectPropertyJson } from './edge-gateway-firewall-object-property-json';

export interface EdgeGatewayFirewallObjectJson {
  type: string;
  name: string;
  properties: Array<EdgeGatewayFirewallObjectPropertyJson>;
}
