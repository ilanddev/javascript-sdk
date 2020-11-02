import { DistributedFirewallProtocolNameType } from '../distributed-firewall-protocol-name-type';

export interface DistributedFirewallRuleServiceProtocolJson {
  is_valid: boolean;
  source_port: number;
  destination_port: number;
  protocol: number;
  protocol_name: DistributedFirewallProtocolNameType;
}
