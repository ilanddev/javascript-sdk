import { DistributedFirewallActionType } from '../distributed-firewall-action-type';
import { DistributedFirewallValueTypeRequestJson } from './distributed-firewall-value-type-request-json';
import {
  DistributedFirewallRuleServiceProtocolRequestJson
} from './distributed-firewall-rule-service-protocol-request-json';
import { DistributedFirewallDirectionType } from '../distributed-firewall-direction-type';
import { DistributedFirewallPacketType } from '../distributed-firewall-packet-type';

export interface DistributedFirewallRuleUpdateRequestJson {
  id: number;
  disabled: boolean;
  logged: boolean;
  name: string;
  action: DistributedFirewallActionType;
  applied_to_list: Array<DistributedFirewallValueTypeRequestJson>;
  sources_excluded: boolean;
  sources: Array<DistributedFirewallValueTypeRequestJson>;
  destinations_excluded: boolean;
  destinations: Array<DistributedFirewallValueTypeRequestJson>;
  service_objects: Array<DistributedFirewallValueTypeRequestJson>;
  service_protocols: Array<DistributedFirewallRuleServiceProtocolRequestJson>;
  direction: DistributedFirewallDirectionType;
  packet_type: DistributedFirewallPacketType;
}
