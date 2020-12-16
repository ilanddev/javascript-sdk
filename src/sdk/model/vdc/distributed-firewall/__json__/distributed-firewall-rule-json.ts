import { DistributedFirewallActionType } from '../distributed-firewall-action-type';
import { DistributedFirewallRuleAppliedToJson } from './distributed-firewall-rule-applied-to-json';
import { DistributedFirewallRuleSourceJson } from './distributed-firewall-rule-source-json';
import { DistributedFirewallRuleDestinationJson } from './distributed-firewall-rule-destination-json';
import { DistributedFirewallRuleServiceObjectJson } from './distributed-firewall-rule-service-object-json';
import { DistributedFirewallRuleServiceProtocolJson } from './distributed-firewall-rule-service-protocol-json';
import { DistributedFirewallDirectionType } from '../distributed-firewall-direction-type';
import { DistributedFirewallPacketType } from '../distributed-firewall-packet-type';

export interface DistributedFirewallRuleJson {
  name: string;
  action: DistributedFirewallActionType;
  applied_to_list: Array<DistributedFirewallRuleAppliedToJson>;
  section_id: number;
  sources_excluded: boolean;
  sources: Array<DistributedFirewallRuleSourceJson>;
  destinations_excluded: boolean;
  destinations: Array<DistributedFirewallRuleDestinationJson>;
  service_objects: Array<DistributedFirewallRuleServiceObjectJson>;
  service_protocols: Array<DistributedFirewallRuleServiceProtocolJson>;
  direction: DistributedFirewallDirectionType;
  packet_type: DistributedFirewallPacketType;
  tag: string;
  id: number;
  disabled: boolean;
  logged: boolean;
}
