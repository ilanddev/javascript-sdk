import { SecurityGroupOperatorType } from './security-group-operator-type';
import { SecurityGroupKeyType } from './security-group-key-type';
import { SecurityGroupCriteriaType } from './security-group-criteria-type';

/**
 * Criteria JSON
 */
export interface CriteriaJson {
  operator: SecurityGroupOperatorType;
  key: SecurityGroupKeyType;
  criteria: SecurityGroupCriteriaType;
  value: string;
  is_valid: boolean;
}
