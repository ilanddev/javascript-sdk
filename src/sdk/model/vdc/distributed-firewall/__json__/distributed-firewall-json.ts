import { DistributedFirewallRuleJson } from './distributed-firewall-rule-json';

/**
 * Distributed Firewall Json.
 */
export interface DistributedFirewallJson {
  rules: Array<DistributedFirewallRuleJson>;
  id: number;
  name: string;
  generation_number: number;
  timestamp: number;
  tcp_strict: boolean;
  stateless: boolean;
  use_sid: boolean;
  type: string;
}
