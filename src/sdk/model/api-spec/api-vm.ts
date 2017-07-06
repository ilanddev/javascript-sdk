import {ApiEntity} from './api-entity';

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
  status: string;
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
