import { VappNetworkIpTranslationNATRuleJson } from './vapp-network-ip-translation-nat-rule-json';
import { VappNetworkPortForwardNATRuleJson } from './vapp-network-port-forward-nat-rule-json';

export interface VappNetworkNATServiceJson {
  vapp_uuid: string;
  network_name: string;
  enabled: boolean;
  type: string;
  ip_translation_rules: Array<VappNetworkIpTranslationNATRuleJson>;
  port_forwarding_rules: Array<VappNetworkPortForwardNATRuleJson>;
  enable_ip_masquerade: boolean;
}
