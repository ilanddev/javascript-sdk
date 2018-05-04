import { VappStatus } from './vapp-status-type';
import { EntityJson } from '../../common/__json__/entity-json';
import { AddVappVmRequestJson, BuildVmRequestJson } from '../../vm/__json__/vm-json';
import { IpRangeJson } from '../../edge/ip-range/__json__/ip-range-json';
import { NetworkFenceMode } from '../../internal-network/__json__/network-fence-mode-type';

/**
 * Interface for vApp properties.
 */
export interface VappJson extends EntityJson {
  deployed: boolean;
  status: VappStatus;
  storage_profiles: Array<string>;
  runtime_lease: number;
  storage_lease: number;
  runtime_expire: number | null;
  storage_expire: number | null;
  vdc_uuid: string;
  org_uuid: string;
  location_id: string;
  description: string;
  vcloud_href: string;
  created_date: number;
  is_expired: boolean;
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
  vms: Array<AddVappVmRequestJson>;
  fence_mode: NetworkFenceMode;
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
