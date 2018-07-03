import { GatewayNatRuleJson } from '../../gateway-nat-rule/__json__/gateway-nat-rule-json';

export interface NatServiceJson {
  external_ip: string | null;
  nat_type: string | null;
  policy: string | null;
  rules: Array<GatewayNatRuleJson>;
  enabled: boolean;
}
