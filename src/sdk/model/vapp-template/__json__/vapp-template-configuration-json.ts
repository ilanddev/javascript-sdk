import { VmTemplateConfigurationJson } from './vm-template-configuration-json';
import { VappTemplateNetworkConfigurationJson } from './vapp-template-network-configuration-json';

/**
 * Vapp Template Configuration Response JSON.
 */
export interface VappTemplateConfigurationJson {
  uuid: string;
  name: string;
  description: string;
  vms: Array<VmTemplateConfigurationJson>;
  networks: Array<VappTemplateNetworkConfigurationJson>;
}
