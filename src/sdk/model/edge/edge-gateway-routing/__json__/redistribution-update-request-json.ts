import { RuleJson } from './rule-json';

/**
 * Redistribution Update Request JSON
 */
export interface RedistributionUpdateRequestJson {
  enabled: boolean;
  rules: Array<RuleJson>;
}
