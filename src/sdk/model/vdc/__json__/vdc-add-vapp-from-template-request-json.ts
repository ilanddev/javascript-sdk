import { TemplateVmConfigJson } from './template-vm-config-json';

export interface VdcAddVappFromTemplateRequestJson {
  vapp_template_uuid: string;
  name: string;
  description: string;
  vms: Array<TemplateVmConfigJson>;
}
