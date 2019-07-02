import { AffinityRuleType } from './affinity-rule-type';

export interface VmAffinityRuleCreateRequestJson {
  name: string;
  is_enabled: boolean;
  type: AffinityRuleType;
  vm_uuids: Array<string>;
  is_mandatory: boolean;
}
