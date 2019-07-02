import { AffinityRuleType } from './affinity-rule-type';
import { VmJson } from '../../vm/__json__/vm-json';

/**
 * VM Affinity Rule API JSON interface.
 */
export interface VmAffinityRuleJson {
  vm_uuids: Array<string>;
  enabled: boolean;
  name: string;
  uuid: string;
  type: AffinityRuleType;
  is_mandatory: boolean;
}
