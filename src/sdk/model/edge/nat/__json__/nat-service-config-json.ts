import { GatewayNatRuleJson } from '../../gateway-nat-rule/__json__/gateway-nat-rule-json';

/**
 * Nat Service Config JSON interface.
 */
export interface NatServiceConfigJson {
  version: number;
  external_ip: string | null;
  type: string | null;
  policy: string | null;
  rules: Array<GatewayNatRuleJson> | null;
  enabled: boolean | null;
}
