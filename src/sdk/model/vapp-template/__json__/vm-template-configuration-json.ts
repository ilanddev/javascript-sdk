import { TemplateDiskConfigurationJson } from './template-disk-configuration-json';
import { TemplateVnicConfigurationJson } from './template-vnic-configuration-json';

/**
 * VM Template Configuration Response JSON.
 */
export interface VmTemplateConfigurationJson {
  uuid: string;
  name: string;
  description: string;
  memory_in_bytes: number;
  number_of_cpus: number;
  number_of_cores_per_socket: number;
  storage_profile_uuid: string;
  hardware_version: string;
  operating_system_version: string;
  expose_cpu_virtualization: boolean;
  computer_name: string;
  disks: Array<TemplateDiskConfigurationJson>;
  vnics: Array<TemplateVnicConfigurationJson>;
}
