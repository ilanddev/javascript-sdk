import { IpAddressingMode } from '../../common/ip-adressing-mode-type';
import { AdapterType } from '../../common/adapter-type';

/**
 * Template VNIC Configuration Response JSON.
 */
export interface TemplateVnicConfigurationJson {
  network_name: string;
  ip_assignment_mode: IpAddressingMode;
  ip_address: string;
  primary_vnic: boolean;
  network_adapter_type: AdapterType;
  needs_customization: boolean;
  connected: boolean;
}
