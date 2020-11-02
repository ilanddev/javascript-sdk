import { DistributedFirewallRuleUpdateRequestJson } from './distributed-firewall-rule-update-request-json';

export interface DistributedFirewallUpdateRequestJson {
  rules: Array<DistributedFirewallRuleUpdateRequestJson>;
  name: string;
  tcp_strict: boolean;
  stateless: boolean;
  use_sid: boolean;
}
