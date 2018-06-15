import { VmVnicRequestJson } from '../../vm/__json__/vm-json';

export interface TemplateVmConfigJson {
  vm_template_uuid: string;
  name: string;
  computer_name: string;
  description: string;
  storage_profile_uuid: string;
  vnics: Array<VmVnicRequestJson>;
}
