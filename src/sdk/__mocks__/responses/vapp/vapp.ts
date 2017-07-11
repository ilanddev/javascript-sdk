import { AxiosResponse } from 'axios';
import { VappJson } from '../../../model/json/vapp';

export const MockVappJson: VappJson = {
  deployed: true,
  status: 'POWERED_OFF',
  storage_profiles: ['dev-vcd01.iland.dev:urn:vcloud:vdcstorageProfile:a3ee2076-2060-46e8-bde6-337b6da166be'],
  runtime_lease: 0,
  storage_lease: 0,
  runtime_expire: null,
  storage_expire: null,
  vdc_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdc:f83bb52c-271d-411f-9d0d-1307cb192cb2',
  org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  location_id: 'dev-vcd01.iland.dev',
  description: '',
  vcloud_href: 'https://dev-vcd02.iland.dev/api/vApp/vapp-6b0151e7-f018-4366-9da5-b2ca77fc6573',
  created_date: 1481051455993,
  is_expired: false,
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:vapp:6b0151e7-f018-4366-9da5-b2ca77fc6573',
  name: 'Auth vApp',
  deleted: false,
  deleted_date: null,
  updated_date: 1493992836044
};

export const MockVappResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVappJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
