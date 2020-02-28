import { CriteriaJson } from './criteria-json';
import { SecurityGroupOperatorType } from './security-group-operator-type';

/**
 * Dynamic Member JSON
 */
export interface DynamicMemberJson {
  operator: SecurityGroupOperatorType;
  criteria: Array<CriteriaJson>;
}
