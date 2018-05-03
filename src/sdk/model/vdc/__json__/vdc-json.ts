import { VdcAllocationModel } from './vdc-allocation-model-type';
import { EntityJson } from '../../common/__json__/entity-json';

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
 * Interface for a vDC JSON Summary properties.
 */
export interface VdcSummaryJson {
  reserved_cpu: number;
  reserved_mem: number;
  consumed_cpu: number;
  consumed_mem: number;
  consumed_disk: number;
  provisioned_disk: number;
  number_of_vms: number;
  number_of_vapps: number;
  allocation_cpu: number;
  allocation_memory: number;
  configured_memory: number;
  configured_disk: number;
  configured_cpu: number;
}
