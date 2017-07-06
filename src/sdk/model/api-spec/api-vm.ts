import {ApiEntity} from './api-entity';

/**
 * Interface for VM properties.
 */
export interface ApiVm extends ApiEntity {
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
  status: ApiVmStatus;
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
 * Enumeration of possible VM statuses.
 */
export enum ApiVmStatus {
  FAILED_CREATION = 'FAILED_CREATION',
  INCONSISTENT_STATE = 'INCONSISTENT_STATE',
  POWERED_OFF = 'POWERED_OFF',
  POWERED_ON = 'POWERED_ON',
  SUSPENDED = 'SUSPENDED',
  UNKNOWN = 'UNKNOWN',
  UNRECOGNIZED = 'UNRECOGNIZED',
  UNRESOLVED = 'UNRESOLVED',
  WAITING_FOR_INPUT = 'WAITING_FOR_INPUT',
  MIXED = 'MIXED'
}
