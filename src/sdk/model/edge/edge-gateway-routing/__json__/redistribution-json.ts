import { RuleJson } from './rule-json';

/**
 * Redistribution JSON
 */
export interface RedistributionJson {
  enabled: boolean;
  rules: Array<RuleJson>;
}
