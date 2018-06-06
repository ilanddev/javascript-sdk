import { VmJson } from '../../vm/__json__';
import { AffinityRuleType } from './affinity-rule-type';

/**
 * VM Affinity Rule API JSON interface.
 */
export interface VmAffinityRuleJson {
  vms: Array<VmJson>;
  key: number;
  enabled: boolean;
  name: string;
  user_created: boolean;
  in_compliance: boolean;
  uuid: string;
  type: AffinityRuleType;
}
