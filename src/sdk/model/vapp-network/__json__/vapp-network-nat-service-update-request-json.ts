import { VappNetworkIpTranslationNATRuleRequestJson } from './vapp-network-ip-translation-nat-rule-request-json';
import { VappNetworkPortForwardNATRuleRequestJson } from './vapp-network-port-forward-nat-rule-request-json';

export type VappNetworkNATServiceType = 'PORT_FORWARDING' | 'IP_TRANSLATION';

export interface VappNetworkNATServiceUpdateRequestJson {
  enabled: boolean;
  type: VappNetworkNATServiceType;
  ip_translation_rules: Array<VappNetworkIpTranslationNATRuleRequestJson>;
  port_forwarding_rules: Array<VappNetworkPortForwardNATRuleRequestJson>;
  enable_ip_masquerade: boolean;
}
