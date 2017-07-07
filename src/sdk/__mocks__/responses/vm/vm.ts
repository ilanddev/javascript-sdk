import { ApiVm, ApiVmStatus } from '../../../model/api-spec/api-vm';
import { AxiosResponse } from 'axios';

export const MockVm: ApiVm = {
  name: 'mock VM',
  uuid: 'mock-vm-uuid',
  deleted: false,
  deleted_date: 0,
  updated_date: 0,
  cores_per_socket: 2,
  cpus_number: 2,
  created_date: null,
  deployed: true,
  description: '',
  hardware_version: '',
  inserted_media_name: '',
  location_id: '',
  media_inserted: false,
  memory_size: 500,
  org_uuid: '',
  os: '',
  status: 'POWERED_OFF' as ApiVmStatus,
  storage_profiles: [],
  vapp_uuid: '',
  vcenter_href: '',
  vcenter_instance_uuid: '',
  vcenter_moref: '',
  vcenter_name: '',
  vcloud_href: '',
  vdc_uuid: '',
  vim_datastore_ref: '',
  vm_local_id: ''
};

export const MockVmResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVm,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
