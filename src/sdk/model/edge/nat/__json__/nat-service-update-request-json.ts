import { EdgeNATRuleUpdateRequestJson } from './edge-nat-rule-update-request-json';

/**
 * Nat Service Update Request JSON.
 */
export interface NATServiceUpdateRequestJson {
  external_ip: string;
  nat_type: string;
  policy: string;
  enabled: boolean;
  rules: Array<EdgeNATRuleUpdateRequestJson>;
}
