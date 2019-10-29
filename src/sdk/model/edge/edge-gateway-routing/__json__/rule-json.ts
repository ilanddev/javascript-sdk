import { ActionType } from './action-type';
import { FromJson } from './from-json';

/**
 * Rule JSON
 */
export interface RuleJson {
  id: number;
  prefix_name: string;
  from: FromJson;
  action: ActionType;
}
