import { VappStatus } from './vapp-status-type';
import { EntityJson } from '../../common/__json__/entity-json';
import { BuildVmRequestJson } from '../../vm/__json__/vm-json';
import { IpRangeJson } from '../../common/ip-range/__json__/ip-range-json';
import { VmCreateRequestJson } from '../../vm/__json__/vm-create-request-json';
import { FenceModeType } from '../../common/__json__/fence-mode-type';
import { VdcAllocationModel } from '../../vdc/__json__/vdc-allocation-model-type';

/**
 * Interface for vApp properties.
 */
export interface VappJson extends EntityJson {
  deployed: boolean;
  status: VappStatus;
  storage_profiles: Array<string>;
  runtime_lease_in_seconds: number;
  storage_lease_in_seconds: number;
  runtime_expire: number | null;
  storage_expire: number | null;
  vdc_uuid: string;
  org_uuid: string;
  location_id: string;
  description: string;
  vcloud_href: string;
  created_date: number;
  is_expired: boolean;
  allocation_model: VdcAllocationModel;
}

/**
 * Specification for a Build Vapp request.
 */
export interface BuildVappRequestJson {
  name: string;
  description: string;
  vms: Array<BuildVmRequestJson>;
}

/**
 * Specification for an Add Vapp request.
 */
export interface AddVappRequestJson {
  vapp_template_uuid: string;
  name: string;
  description: string;
  fence_mode: FenceModeType;
  vms: Array<VmCreateRequestJson>;
  vapp_network: AddVappNetworkInitializationParamsJson;
}

/**
 * Specification for an Add Vapp Network Initialization Params request.
 */
export interface AddVappNetworkInitializationParamsJson {
  name: string;
  description: string;
  deployed: boolean;
  backward_compatibility_mode: boolean;
  retain_net_info_across_deployments: boolean;
  parent_network_uuid: string;
  gateway_address: string;
  network_mask: string;
  primary_dns: string;
  secondary_dns: string;
  dns_suffix: string;
  ip_ranges: Array<IpRangeJson>;
}
