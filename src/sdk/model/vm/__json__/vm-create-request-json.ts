import { IpAddressingModeType } from '../../common/__json__/ip-adressing-mode-type';

/**
 * Specification for an addVapp VM request.
 */
export interface VmCreateRequestJson {
  name: string;
  description: string;
  ip_address_mode: IpAddressingModeType;
  network_uuid: string;
  vapp_template_uuid: string;
  vm_template_uuid: string;
  ip_address: string;
  storage_profile_uuid: string;
}
