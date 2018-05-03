import { GatewayNatRuleJson } from '../../gateway-nat-rule/__json__/gateway-nat-rule-json';

export interface NatServiceJson {
  external_ip: string | null;
  type: string | null;
  policy: string | null;
  rules: Array<GatewayNatRuleJson> | null;
  enabled: boolean | null;
}
