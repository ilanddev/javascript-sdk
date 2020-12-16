import { DistributedFirewallObjectPropertyJson } from './distributed-firewall-object-property-json';

export interface DistributedFirewallObjectJson {
  type: string;
  name: string;
  properties: Array<DistributedFirewallObjectPropertyJson>;
}
