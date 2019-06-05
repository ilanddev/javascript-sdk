export interface VmAffinityRuleUpdateRequestJson {
  uuid: string;
  name: string;
  is_enabled: boolean;
  type: string;
  vm_uuids: Array<string>;
  is_mandatory: boolean;
}
