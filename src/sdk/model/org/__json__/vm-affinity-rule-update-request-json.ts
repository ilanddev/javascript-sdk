import { AffinityRuleType } from './affinity-rule-type';
import { VmAffinityRuleOperation } from './vm-affinity-rule-operation-type';

/**
 * VM Affinity Rule Update Request API JSON interface.
 */
export interface VmAffinityRuleUpdateRequestJson {
  vms: Array<string>;
  name: string;
  enabled: boolean;
  type: AffinityRuleType;
  uuid: string;
  operation: VmAffinityRuleOperation;
  key: number;
}
