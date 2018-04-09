import { EntityJson } from './entity';
import { AddVappVmRequestJson, BuildVmRequestJson } from './vm';
import { NetworkFenceMode } from './abstract-network';
import { IpRangeJson } from './ip-range';

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
 * Enumeration of possible vApp statuses from the API.
 */
export type VappStatus =
    'POWERED_ON'
    | 'POWERED_OFF'
    | 'FAILED_CREATION'
    | 'INCONSISTENT_STATE'
    | 'RESOLVED'
    | 'SUSPENDED'
    | 'UNKNOWN'
    | 'UNRECOGNIZED'
    | 'UNRESOLVED'
    | 'WAITING_FOR_INPUT'
    | 'MIXED';

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
