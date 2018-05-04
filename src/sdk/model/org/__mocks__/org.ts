import { AxiosResponse } from 'axios';
import { OrgJson } from '../__json__/org-json';

export const MockOrgJson: OrgJson = {
  location_id: 'dev-vcd01.iland.dev',
  enabled: true,
  vapp_max_runtime_lease: 0,
  vapp_max_storage_lease: 0,
  vapp_template_max_storage_lease: 0,
  vapp_delete_on_storage_expire: false,
  vapp_template_delete_on_storage_expire: false,
  zerto_target: false,
  fullname: 'My Corp, Inc',
  description: 'ab',
  vcloud_href: 'https://dev-vcd02.iland.dev/cloud/org/ilandTestJa-000003',
  crm: '000003',
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  name: 'ilandTestJa-000003',
  deleted: false,
  deleted_date: null,
  updated_date: 1499810627233
};

export const MockOrgResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockOrgJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
