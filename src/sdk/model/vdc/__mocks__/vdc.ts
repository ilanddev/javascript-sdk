import { AxiosResponse } from 'axios';
import { VdcJson } from '../__json__/vdc-json';

export const MockVdcJson: VdcJson = {
  enabled: true,
  vcenter_moref: 'resgroup-4750',
  vcenter_name: 'VC',
  description: '',
  vcloud_href: 'https://dev-vcd02.iland.dev/cloud/#/OrgVdcVAppsList?org',
  vcenter_instance_uuid: 'c0da5511-3903-4d21-ad22-fe0c4c608d06',
  vcenter_href: 'https://dev-vcd02.iland.dev/api/admin/extension/vimServer/c0da5511-3903-4d21-ad22-fe0c4c608d06',
  allocation_model: 'paygo',
  reserved_cpu: 0,
  reserved_mem: 0,
  disk_limit: 2810675,
  alloc_cpu: 0,
  alloc_mem: 0,
  max_hardware_version: 'vmx-11',
  network_quota: 1024,
  used_network_count: 8,
  location_id: 'dev-vcd01.iland.dev',
  org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdc:f83bb52c-271d-411f-9d0d-1307cb192cb2',
  name: 'PAYG',
  deleted: false,
  deleted_date: null,
  updated_date: 1499693404432
};

export const MockSecondVdcJson: VdcJson = {
  enabled: true,
  vcenter_moref: 'resgroup-4750',
  vcenter_name: 'VC',
  description: 'second vDc for testing',
  vcloud_href: 'https://dev-vcd01.iland.dev/cloud/#/OrgVdcVAppsList?org',
  vcenter_instance_uuid: 'q8ed9976-3903-4d21-ad22-fe0c4c608d06',
  vcenter_href: 'https://dev-vcd02.iland.dev/api/admin/extension/vimServer/q8ed9976-3903-4d21-ad22-fe0c4c608d06',
  allocation_model: 'paygo',
  reserved_cpu: 0,
  reserved_mem: 0,
  disk_limit: 2810675,
  alloc_cpu: 0,
  alloc_mem: 0,
  max_hardware_version: 'vmx-11',
  network_quota: 1024,
  used_network_count: 8,
  location_id: 'dev-vcd01.iland.dev',
  org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdc:e51cc45c-8890-r331-7e7e-2934lk235ie5',
  name: 'PAYG',
  deleted: false,
  deleted_date: null,
  updated_date: 1499693404654
};

export const MockVdcResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVdcJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
