import { AffinityRuleType } from './affinity-rule-type';
import { VmJson } from '../../vm/__json__/vm-json';

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
