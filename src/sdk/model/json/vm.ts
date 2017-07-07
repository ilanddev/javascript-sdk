import { EntityJson } from './entity';

/**
 * Interface for VM properties.
 */
export interface VmJson extends EntityJson {
  cores_per_socket: number;
  cpus_number: number;
  created_date: number|null;
  deployed: boolean;
  description: string;
  hardware_version: string;
  inserted_media_name: string;
  location_id: string;
  media_inserted: boolean;
  memory_size: number;
  org_uuid: string;
  os: string;
  status: VmStatus;
  storage_profiles: Array<string>;
  vapp_uuid: string;
  vcenter_href: string;
  vcenter_instance_uuid: string;
  vcenter_moref: string;
  vcenter_name: string;
  vcloud_href: string;
  vdc_uuid: string;
  vim_datastore_ref: string;
  vm_local_id: string;
}

/**
 * Enumeration of possible VM statuses from the API.
 */
export type VmStatus = 'FAILED_CREATION' |
  'INCONSISTENT_STATE' |
  'POWERED_OFF' |
  'POWERED_ON' |
  'SUSPENDED' |
  'UNKNOWN' |
  'UNRECOGNIZED' |
  'UNRESOLVED' |
  'WAITING_FOR_INPUT' |
  'MIXED';
