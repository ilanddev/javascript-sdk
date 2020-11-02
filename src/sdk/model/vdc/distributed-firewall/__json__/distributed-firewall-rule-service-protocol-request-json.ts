import { DistributedFirewallProtocolNameType } from '../distributed-firewall-protocol-name-type';

export interface DistributedFirewallRuleServiceProtocolRequestJson {
  source_port: number;
  destination_port: number;
  protocol: number;
  protocol_name: DistributedFirewallProtocolNameType;
}
