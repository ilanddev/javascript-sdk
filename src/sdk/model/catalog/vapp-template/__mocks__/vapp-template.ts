import { AxiosResponse } from 'axios';
import { VappTemplateJson } from '../__json__/vapp-template-json';

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

export const MockPublicVappTemplateJson: VappTemplateJson = {
  'description': 'Size: 64MB RAM/SCSI HD (LSI Logic) 1GB (Thinly Provisioned)\nRoot Account Password: root' +
  '\nSSH account: VMware1!\nSSH password: VMware1!',
  'vcloud_href': 'https://dev-vcd02.iland.dev/api/vAppTemplate/vappTemplate-b1ffb935-f32c-4886-a7a6-2e4d3d7b1de8',
  'status': 8,
  'size': 1,
  'customizable': true,
  'customization_required': false,
  'gold_master': false,
  'storage_profile_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdcstorageProfile:43d95d73-3e75-497d-a621-f5297f9afe21',
  'public': true,
  'vdc_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:bb581047-9cfa-4ec1-a291-b3243736f52a',
  'location_id': 'dev-vcd01.iland.dev',
  'org_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:1df9a1c6-9c77-44b5-9758-0e7920d8ca05',
  'catalog_uuid': 'dev-vcd01.iland.dev:urn:vcloud:catalog:0c73d242-101d-43b3-a856-7eb4b4688534',
  'created_date': 1511906970427,
  'is_expired': false,
  'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapptemplate:b1ffb935-f32c-4886-a7a6-2e4d3d7b1de8',
  'name': 'Microcore Linux',
  'deleted': false,
  'deleted_date': null,
  'updated_date': 1511906999851
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

export const MockPublicVappTemplateResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>((resolve) => {
  resolve({
    data: MockPublicVappTemplateJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
