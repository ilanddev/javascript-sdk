import { AxiosResponse } from 'axios';
import { VappTemplateJson } from '../../../model/json';

export const MockVappTemplateJson: VappTemplateJson = {
  description: '',
  vcloud_href: 'https://dev-vcd02.iland.dev/api/vAppTemplate/vappTemplate-068a2478-7aea-4c4f-a89b-a19d5689af4b',
  status: 8,
  size: 0,
  customizable: true,
  customization_required: false,
  gold_master: false,
  storage_profile_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdcstorageProfile:0627a36f-cd11-4c13-ba7d-a64914d063f9',
  public: false,
  vdc_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdc:d8151263-5381-4f97-aad2-b2fecb743491',
  location_id: 'dev-vcd01.iland.dev',
  org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  catalog_uuid: 'dev-vcd01.iland.dev:urn:vcloud:catalog:d576ce89-0599-42f5-812c-592e0e98956b',
  created_date: 1513794411210,
  is_expired: false,
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:vapptemplate:068a2478-7aea-4c4f-a89b-a19d5689af4b',
  name: 'emptyScratchVapp',
  deleted: false,
  deleted_date: null,
  updated_date: 1513794430024
};

export const MockVappTemplateResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>((resolve) => {
  resolve({
    data: MockVappTemplateJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
