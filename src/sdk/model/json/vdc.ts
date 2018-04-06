import { EntityJson } from './entity';

/**
 * Interface for vDC JSON properties.
 */
export interface VdcJson extends EntityJson {
  enabled: boolean;
  vcenter_moref: string;
  vcenter_name: string;
  description: string;
  vcloud_href: string;
  vcenter_instance_uuid: string;
  vcenter_href: string;
  allocation_model: VdcAllocationModel;
  reserved_cpu: number;
  reserved_mem: number;
  disk_limit: number;
  alloc_cpu: number;
  alloc_mem: number;
  max_hardware_version: string;
  network_quota: number;
  used_network_count: number;
  location_id: string;
  org_uuid: string;
}

/**
 * Enumerates the possible vDC allocation model options.
 */
export type VdcAllocationModel = 'paygo' | 'allocation_pool' | 'reservation_pool';
