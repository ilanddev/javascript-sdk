import { EntityJson } from './entity';
import { BuildVmRequestJson } from './vm';

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
