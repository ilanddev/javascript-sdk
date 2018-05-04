import { AxiosResponse } from 'axios';
import { UserJson } from '../__json__/user-json';
import { CompanyJson } from '../../company/__json__/company-json';
import { RoleJson } from '../../iam/role/__json__/role-json';
import { UserInventoryJson } from '../inventory-entity/__json__/user-inventory-json';

export const MockUserJson: UserJson = {
  name: 'coke',
  address: '111 washington st.',
  city: 'new york',
  company: 'coke-co',
  country: 'USA',
  created_date: 12394123948,
  deleted: false,
  deleted_date: null,
  email: 'coke@coke.com',
  fullname: 'Coke User',
  locked: false,
  phone: '111-111-1111',
  state: 'NY',
  user_type: 'SYSTEM_ADMIN',
  zip: '11111',
  domain: 'SYSTEM'
};

export const MockUserCustomerJson: UserJson = {
  name: 'customer',
  address: '111 washington st.',
  city: 'new york',
  company: 'coke-co',
  country: 'USA',
  created_date: 12394123948,
  deleted: false,
  deleted_date: null,
  email: 'coke@coke.com',
  fullname: 'Customer User',
  locked: false,
  phone: '111-111-1111',
  state: 'NY',
  user_type: 'CUSTOMER',
  zip: '11111',
  domain: 'CUSTOMER'
};
export const MockUserCompaniesJson: Array<CompanyJson> = [{
  deleted: false,
  deleted_date: null,
  has_iaas: true,
  has_vcc: false,
  name: 'MyCorp',
  updated_date: 1494608461964,
  uuid: '000003'
}, {
  deleted: false,
  deleted_date: null,
  has_iaas: true,
  has_vcc: true,
  name: 'Coke',
  updated_date: 1494608461964,
  uuid: '000002'
}, {
  has_iaas: true,
  has_vcc: false,
  uuid: '12345',
  name: 'ZertoCustomer',
  deleted: false,
  deleted_date: null,
  updated_date: 1494608462074
}];

export const MockUserInventoryForCompanyJson: UserInventoryJson = {
  username: 'coke',
  'inventory': [
    {
      'company_id': '000002',
      'company_name': 'Coke',
      'entities': {
        'ILAND_CLOUD_VM': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vm:9a32f0b4-bc1f-4d73-b497-fa70411b0ec6',
            'type': 'ILAND_CLOUD_VM',
            'name': 'MT01',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:8cbef789-023f-4706-97a2-d2a15661db78',
            'parent_type': 'ILAND_CLOUD_VAPP'
          }
        ],
        'ILAND_CLOUD_CATALOG': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:catalog:efbe940d-ab1e-49c3-b7fb-529446ca2dd1',
            'type': 'ILAND_CLOUD_CATALOG',
            'name': 'e5fba1c4-9281-4f6a-bff4-459a613f875d',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:9a494f7f-c06e-40d4-b064-4b60b062022f',
            'parent_type': 'ILAND_CLOUD_ORGANIZATION'
          }
        ],
        'ILAND_CLOUD_LOCATION': [
          {
            'uuid': 'urn:iland:location:000002:iland-cloud:dev-vcd01.iland.dev',
            'type': 'ILAND_CLOUD_LOCATION',
            'name': 'urn:iland:location:000002:iland-cloud:dev-vcd01.iland.dev',
            'parent_uuid': 'urn:iland:product:000002:iland-cloud',
            'parent_type': 'ILAND_CLOUD_PRODUCT'
          }
        ],
        'ILAND_CLOUD_INTERNAL_NETWORK': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:network:5e9b4abb-ccb4-4ea5-a1e6-3c75e51709f2',
            'type': 'ILAND_CLOUD_INTERNAL_NETWORK',
            'name': 'My Coke Routed Network 01',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:6c9cd8e6-fd52-47f8-a2fb-73bfd2a71061',
            'parent_type': 'ILAND_CLOUD_VDC'
          }
        ],
        'ILAND_CLOUD_PRODUCT': [
          {
            'uuid': 'urn:iland:product:000002:iland-cloud',
            'type': 'ILAND_CLOUD_PRODUCT',
            'name': 'iland Cloud',
            'parent_uuid': '000002',
            'parent_type': 'COMPANY'
          }
        ],
        'ILAND_CLOUD_VAPP': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:8cbef789-023f-4706-97a2-d2a15661db78',
            'type': 'ILAND_CLOUD_VAPP',
            'name': 'Brett Testing_704929',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:6c9cd8e6-fd52-47f8-a2fb-73bfd2a71061',
            'parent_type': 'ILAND_CLOUD_VDC'
          }
        ],
        'COMPANY': [
          {
            'uuid': '000002',
            'type': 'COMPANY',
            'name': 'Coke',
            'parent_uuid': null,
            'parent_type': null
          }
        ],
        'ILAND_CLOUD_VDC': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:6c9cd8e6-fd52-47f8-a2fb-73bfd2a71061',
            'type': 'ILAND_CLOUD_VDC',
            'name': 'Coke Compliance PAYG vDC',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:9a494f7f-c06e-40d4-b064-4b60b062022f',
            'parent_type': 'ILAND_CLOUD_ORGANIZATION'
          }
        ],
        'ILAND_CLOUD_VAPP_NETWORK': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:network:ef3fd395-a48c-4ca7-b047-6a9a7ff12d92',
            'type': 'ILAND_CLOUD_VAPP_NETWORK',
            'name': 'My Coke Routed Network 01',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:8cbef789-023f-4706-97a2-d2a15661db78',
            'parent_type': 'ILAND_CLOUD_VAPP'
          }
        ],
        'ILAND_CLOUD_MEDIA': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:media:82d6e4e6-9c52-48a4-a13c-21c51aea01b0',
            'type': 'ILAND_CLOUD_MEDIA',
            'name': 'Automated Security Test Media',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:catalog:efbe940d-ab1e-49c3-b7fb-529446ca2dd1',
            'parent_type': 'ILAND_CLOUD_CATALOG'
          }
        ],
        'ILAND_CLOUD_VAPP_TEMPLATE': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapptemplate:c987f487-11fa-4d0e-b5d7-f529bc991196',
            'type': 'ILAND_CLOUD_VAPP_TEMPLATE',
            'name': 'Automated Security Test Template',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:catalog:efbe940d-ab1e-49c3-b7fb-529446ca2dd1',
            'parent_type': 'ILAND_CLOUD_CATALOG'
          }
        ],
        'ILAND_CLOUD_EDGE': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:2cc2b9c9-9705-48f2-a2bf-c0a8e7e9004c',
            'type': 'ILAND_CLOUD_EDGE',
            'name': 'MyCoke Edge 01',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:6c9cd8e6-fd52-47f8-a2fb-73bfd2a71061',
            'parent_type': 'ILAND_CLOUD_VDC'
          }
        ],
        'ILAND_CLOUD_ORGANIZATION': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:9a494f7f-c06e-40d4-b064-4b60b062022f',
            'type': 'ILAND_CLOUD_ORGANIZATION',
            'name': 'MyCoke-000002',
            'parent_uuid': 'urn:iland:location:000002:iland-cloud:dev-vcd01.iland.dev',
            'parent_type': 'ILAND_CLOUD_LOCATION'
          }
        ]
      }
    },
    {
      'company_id': '000003',
      'company_name': 'MyCorp',
      'entities': {
        'ILAND_CLOUD_VM': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vm:92fdeb63-ecf6-4258-90fc-930bbc03b511',
            'type': 'ILAND_CLOUD_VM',
            'name': 'Portal Resource Non-Regression',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:52b2ede5-88ea-49ff-8b55-e429837a70fd',
            'parent_type': 'ILAND_CLOUD_VAPP'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vm:a1addd3a-6a5e-4ee6-bcbc-11b6e08d89d4',
            'type': 'ILAND_CLOUD_VM',
            'name': 'CatalogResourceNonRegression1',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:52b2ede5-88ea-49ff-8b55-e429837a70fd',
            'parent_type': 'ILAND_CLOUD_VAPP'
          }
        ],
        'ILAND_CLOUD_CATALOG': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:catalog:d576ce89-0599-42f5-812c-592e0e98956b',
            'type': 'ILAND_CLOUD_CATALOG',
            'name': 'AutomatedSecurityTest',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
            'parent_type': 'ILAND_CLOUD_ORGANIZATION'
          }
        ],
        'ILAND_CLOUD_LOCATION': [
          {
            'uuid': 'urn:iland:location:000003:iland-cloud:dev-vcd01.iland.dev',
            'type': 'ILAND_CLOUD_LOCATION',
            'name': 'urn:iland:location:000003:iland-cloud:dev-vcd01.iland.dev',
            'parent_uuid': 'urn:iland:product:000003:iland-cloud',
            'parent_type': 'ILAND_CLOUD_PRODUCT'
          }
        ],
        'ILAND_CLOUD_INTERNAL_NETWORK': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:network:9ac26520-d2a9-4a3e-949a-86e9ca5aee0b',
            'type': 'ILAND_CLOUD_INTERNAL_NETWORK',
            'name': 'iland Dev DEV02 Standard Network',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:f83bb52c-271d-411f-9d0d-1307cb192cb2',
            'parent_type': 'ILAND_CLOUD_VDC'
          }
        ],
        'ILAND_CLOUD_PRODUCT': [
          {
            'uuid': 'urn:iland:product:000003:iland-cloud',
            'type': 'ILAND_CLOUD_PRODUCT',
            'name': 'iland Cloud',
            'parent_uuid': '000003',
            'parent_type': 'COMPANY'
          }
        ],
        'ILAND_CLOUD_VAPP': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:52b2ede5-88ea-49ff-8b55-e429837a70fd',
            'type': 'ILAND_CLOUD_VAPP',
            'name': 'vApp from Non-reg test 986bfdda-16f7-465a-aa00-58bc7d5d8975 DELETE ME',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:f83bb52c-271d-411f-9d0d-1307cb192cb2',
            'parent_type': 'ILAND_CLOUD_VDC'
          }
        ],
        'COMPANY': [
          {
            'uuid': '000003',
            'type': 'COMPANY',
            'name': 'MyCorp',
            'parent_uuid': null,
            'parent_type': null
          }
        ],
        'ILAND_CLOUD_VDC': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:f83bb52c-271d-411f-9d0d-1307cb192cb2',
            'type': 'ILAND_CLOUD_VDC',
            'name': 'PAYG',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
            'parent_type': 'ILAND_CLOUD_ORGANIZATION'
          }
        ],
        'ILAND_CLOUD_VAPP_NETWORK': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:network:eb893d42-e7df-46a3-9477-dadd71f94bba',
            'type': 'ILAND_CLOUD_VAPP_NETWORK',
            'name': 'iland Test JA Routed Network 01',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:52b2ede5-88ea-49ff-8b55-e429837a70fd',
            'parent_type': 'ILAND_CLOUD_VAPP'
          }
        ],
        'ILAND_CLOUD_MEDIA': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:media:27082cbd-d354-4f48-93e3-8a0968a10309',
            'type': 'ILAND_CLOUD_MEDIA',
            'name': 'CloneTest DELETE ME25f316a3-0855-4981-93bf-b4bed075f3cb',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:catalog:d576ce89-0599-42f5-812c-592e0e98956b',
            'parent_type': 'ILAND_CLOUD_CATALOG'
          }
        ],
        'ILAND_CLOUD_VAPP_TEMPLATE': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapptemplate:07655c3c-0231-4766-b032-388001a4513e',
            'type': 'ILAND_CLOUD_VAPP_TEMPLATE',
            'name': 'Test Upload',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:catalog:d576ce89-0599-42f5-812c-592e0e98956b',
            'parent_type': 'ILAND_CLOUD_CATALOG'
          }
        ],
        'ILAND_CLOUD_EDGE': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:e1e08051-624c-4d92-8ee3-532655d71b77',
            'type': 'ILAND_CLOUD_EDGE',
            'name': 'iland Test JA Edge 01',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:f83bb52c-271d-411f-9d0d-1307cb192cb2',
            'parent_type': 'ILAND_CLOUD_VDC'
          }
        ],
        'ILAND_CLOUD_ORGANIZATION': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
            'type': 'ILAND_CLOUD_ORGANIZATION',
            'name': 'ilandTestJa-000003',
            'parent_uuid': 'urn:iland:location:000003:iland-cloud:dev-vcd01.iland.dev',
            'parent_type': 'ILAND_CLOUD_LOCATION'
          }
        ]
      }
    },
    {
      'company_id': '12345',
      'company_name': 'ZertoCustomer',
      'entities': {
        'ILAND_CLOUD_VAPP_TEMPLATE': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapptemplate:b1ffb935-f32c-4886-a7a6-2e4d3d7b1de8',
            'type': 'ILAND_CLOUD_VAPP_TEMPLATE',
            'name': 'Microcore Linux',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:catalog:0c73d242-101d-43b3-a856-7eb4b4688534',
            'parent_type': 'ILAND_CLOUD_CATALOG'
          }
        ],
        'ILAND_CLOUD_ORGANIZATION': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:1df9a1c6-9c77-44b5-9758-0e7920d8ca05',
            'type': 'ILAND_CLOUD_ORGANIZATION',
            'name': 'ZertoCustomer-12345',
            'parent_uuid': 'urn:iland:location:12345:iland-cloud:dev-vcd01.iland.dev',
            'parent_type': 'ILAND_CLOUD_LOCATION'
          }
        ],
        'ILAND_CLOUD_VPG': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:zerto:vpg:fdc039be-3f56-4e82-99bb-509ea4addd01',
            'type': 'ILAND_CLOUD_VPG',
            'name': 'I wanna Talk VPG',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:1df9a1c6-9c77-44b5-9758-0e7920d8ca05',
            'parent_type': 'ILAND_CLOUD_ORGANIZATION'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:zerto:vpg:200f7296-0b77-4015-b3c1-607a7a964d82',
            'type': 'ILAND_CLOUD_VPG',
            'name': 'All You Do Is Talk Talk',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:1df9a1c6-9c77-44b5-9758-0e7920d8ca05',
            'parent_type': 'ILAND_CLOUD_ORGANIZATION'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:zerto:vpg:e8917dfb-a3b1-4f5e-babe-2c16350bdd1a',
            'type': 'ILAND_CLOUD_VPG',
            'name': 'Do Not Talk VPG',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:1df9a1c6-9c77-44b5-9758-0e7920d8ca05',
            'parent_type': 'ILAND_CLOUD_ORGANIZATION'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:zerto:vpg:91d270b1-a714-4dc9-b32c-7bb7795174ad',
            'type': 'ILAND_CLOUD_VPG',
            'name': 'Automation Test VPG',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:1df9a1c6-9c77-44b5-9758-0e7920d8ca05',
            'parent_type': 'ILAND_CLOUD_ORGANIZATION'
          }
        ],
        'ILAND_CLOUD_VAPP': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:de50f729-9894-40eb-8d65-a87f741e1d7c',
            'type': 'ILAND_CLOUD_VAPP',
            'name': 'Automation Test vApp',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:bb581047-9cfa-4ec1-a291-b3243736f52a',
            'parent_type': 'ILAND_CLOUD_VDC'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:62783c21-2b07-4691-8a10-ee528d8a94b3',
            'type': 'ILAND_CLOUD_VAPP',
            'name': 'Talk About It vApp',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:bb581047-9cfa-4ec1-a291-b3243736f52a',
            'parent_type': 'ILAND_CLOUD_VDC'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:f1a212a2-f089-4648-8886-56442180c1ed',
            'type': 'ILAND_CLOUD_VAPP',
            'name': 'All You Do Is Talk Talk',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:bb581047-9cfa-4ec1-a291-b3243736f52a',
            'parent_type': 'ILAND_CLOUD_VDC'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:9cd4c184-7657-45f9-8718-0e10688f6b88',
            'type': 'ILAND_CLOUD_VAPP',
            'name': 'Do Not Talk vApp',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:bb581047-9cfa-4ec1-a291-b3243736f52a',
            'parent_type': 'ILAND_CLOUD_VDC'
          }
        ],
        'ILAND_CLOUD_VAPP_NETWORK': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:network:1d12b33d-a283-4ffb-8d0e-3db4fe69623d',
            'type': 'ILAND_CLOUD_VAPP_NETWORK',
            'name': 'Zerto Customer Routed Network 01',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:de50f729-9894-40eb-8d65-a87f741e1d7c',
            'parent_type': 'ILAND_CLOUD_VAPP'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:network:ebb23483-bcfc-4c74-8817-2c83d92872e2',
            'type': 'ILAND_CLOUD_VAPP_NETWORK',
            'name': 'Zerto Customer Routed Network 01',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:62783c21-2b07-4691-8a10-ee528d8a94b3',
            'parent_type': 'ILAND_CLOUD_VAPP'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:network:ff3ee69a-15ed-4768-a4d5-8d6dca067b28',
            'type': 'ILAND_CLOUD_VAPP_NETWORK',
            'name': 'Zerto Customer Routed Network 01',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:9cd4c184-7657-45f9-8718-0e10688f6b88',
            'parent_type': 'ILAND_CLOUD_VAPP'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:network:e2b39609-561f-4248-be15-b0797b2ea149',
            'type': 'ILAND_CLOUD_VAPP_NETWORK',
            'name': 'Zerto Customer Routed Network 01',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:f1a212a2-f089-4648-8886-56442180c1ed',
            'parent_type': 'ILAND_CLOUD_VAPP'
          }
        ],
        'ILAND_CLOUD_PRODUCT': [
          {
            'uuid': 'urn:iland:product:12345:iland-cloud',
            'type': 'ILAND_CLOUD_PRODUCT',
            'name': 'iland Cloud',
            'parent_uuid': '12345',
            'parent_type': 'COMPANY'
          }
        ],
        'COMPANY': [
          {
            'uuid': '12345',
            'type': 'COMPANY',
            'name': 'ZertoCustomer',
            'parent_uuid': null,
            'parent_type': null
          }
        ],
        'ILAND_CLOUD_EDGE': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:1e188a96-189f-407d-bf41-61aace0408d2',
            'type': 'ILAND_CLOUD_EDGE',
            'name': 'Zerto Customer Edge 01',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:bb581047-9cfa-4ec1-a291-b3243736f52a',
            'parent_type': 'ILAND_CLOUD_VDC'
          }
        ],
        'ILAND_CLOUD_LOCATION': [
          {
            'uuid': 'urn:iland:location:12345:iland-cloud:dev-vcd01.iland.dev',
            'type': 'ILAND_CLOUD_LOCATION',
            'name': 'urn:iland:location:12345:iland-cloud:dev-vcd01.iland.dev',
            'parent_uuid': 'urn:iland:product:12345:iland-cloud',
            'parent_type': 'ILAND_CLOUD_PRODUCT'
          }
        ],
        'ILAND_CLOUD_CATALOG': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:catalog:0c73d242-101d-43b3-a856-7eb4b4688534',
            'type': 'ILAND_CLOUD_CATALOG',
            'name': 'Zerto Customer Catalog',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:1df9a1c6-9c77-44b5-9758-0e7920d8ca05',
            'parent_type': 'ILAND_CLOUD_ORGANIZATION'
          }
        ],
        'ILAND_CLOUD_VM': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vm:25726796-afb3-4dc7-a005-03db0b4497e7',
            'type': 'ILAND_CLOUD_VM',
            'name': 'allyoudoistalktalk',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:f1a212a2-f089-4648-8886-56442180c1ed',
            'parent_type': 'ILAND_CLOUD_VAPP'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vm:49d36471-d175-4144-acbd-9be1ab3c45c6',
            'type': 'ILAND_CLOUD_VM',
            'name': 'iwannatalk',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:62783c21-2b07-4691-8a10-ee528d8a94b3',
            'parent_type': 'ILAND_CLOUD_VAPP'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vm:81ac7882-add5-496a-989f-9306d0b88ace',
            'type': 'ILAND_CLOUD_VM',
            'name': 'automationtest',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:de50f729-9894-40eb-8d65-a87f741e1d7c',
            'parent_type': 'ILAND_CLOUD_VAPP'
          },
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vm:7184ec83-68d0-42b9-9ea1-ec73b1310bae',
            'type': 'ILAND_CLOUD_VM',
            'name': 'dontwannatalk',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:9cd4c184-7657-45f9-8718-0e10688f6b88',
            'parent_type': 'ILAND_CLOUD_VAPP'
          }
        ],
        'ILAND_CLOUD_VDC': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:bb581047-9cfa-4ec1-a291-b3243736f52a',
            'type': 'ILAND_CLOUD_VDC',
            'name': 'Zerto Customer PAYG vDC',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:1df9a1c6-9c77-44b5-9758-0e7920d8ca05',
            'parent_type': 'ILAND_CLOUD_ORGANIZATION'
          }
        ],
        'ILAND_CLOUD_INTERNAL_NETWORK': [
          {
            'uuid': 'dev-vcd01.iland.dev:urn:vcloud:network:131f1375-ca72-4fe8-8308-b3a597a84a84',
            'type': 'ILAND_CLOUD_INTERNAL_NETWORK',
            'name': 'Zerto Customer Routed Network 01',
            'parent_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:bb581047-9cfa-4ec1-a291-b3243736f52a',
            'parent_type': 'ILAND_CLOUD_VDC'
          }
        ]
      }
    }
  ]
};

export const MockUserRoleForCompanyJson1: RoleJson = {
  'uuid': 'urn:iland:role:builtin:company-admin:000002',
  'company_id': '000002',
  'name': 'Company Administrator',
  'description': 'A user with full access to all data and features available to ' +
  'your company within the iland Cloud environment.',
  'policies': [
    {
      'entity_uuid': '000002',
      'domain': 'COMPANY',
      'type': 'ADMIN',
      'permissions': []
    }
  ],
  'type': 'BUILT_IN'
};

export const MockUserRoleForCompanyJson2: RoleJson = {
  'uuid': 'urn:iland:role:custom:company-read-only-custom:000003',
  'company_id': '000003',
  'name': 'Custom role for company and some entities',
  'description': 'A user custom role for company and entities',
  'policies': [
    {
      'entity_uuid': '000003',
      'domain': 'COMPANY',
      'type': 'READ_ONLY',
      'permissions': []
    },
    {
      'entity_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vm:92fdeb63-ecf6-4258-90fc-930bbc03b511',
      'domain': 'ILAND_CLOUD_VM',
      'type': 'CUSTOM',
      'permissions': ['VIEW_ILAND_CLOUD_VM', 'VIEW_ILAND_CLOUD_VM_BILLING', 'MANAGE_ILAND_CLOUD_VM_POWER_STATE',
        'MANAGE_ILAND_CLOUD_VM_CONFIGURATION', 'MANAGE_ILAND_CLOUD_VM_SNAPSHOTS']
    },
    {
      'entity_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vm:a1addd3a-6a5e-4ee6-bcbc-11b6e08d89d4',
      'domain': 'ILAND_CLOUD_VM',
      'type': 'CUSTOM',
      'permissions': ['VIEW_ILAND_CLOUD_VM', 'VIEW_ILAND_CLOUD_VM_BILLING', 'COPY_MOVE_RESTORE_ILAND_CLOUD_VM',
        'DELETE_ILAND_CLOUD_VM']
    }
  ],
  'type': 'CUSTOM'
};

export const MockUserRoleForCompanyJson3: RoleJson = {
  'uuid': 'urn:iland:role:custom:company-custom:12345',
  'company_id': '12345',
  'name': 'Custom role for company and some entities',
  'description': 'A user custom role for company and entities',
  'policies': [
    {
      'entity_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:62783c21-2b07-4691-8a10-ee528d8a94b3',
      'domain': 'ILAND_CLOUD_VAPP',
      'type': 'READ_ONLY',
      'permissions': []
    }, {
      'entity_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:de50f729-9894-40eb-8d65-a87f741e1d7c',
      'domain': 'ILAND_CLOUD_VAPP',
      'type': 'ADMIN',
      'permissions': []
    }, {
      'entity_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vapp:f1a212a2-f089-4648-8886-56442180c1ed',
      'domain': 'ILAND_CLOUD_VAPP',
      'type': 'CUSTOM',
      'permissions': ['VIEW_ILAND_CLOUD_VAPP', 'VIEW_ILAND_CLOUD_VAPP_BILLING', 'MANAGE_ILAND_CLOUD_VAPP_POWER_STATE']
    }
  ],
  'type': 'CUSTOM'
};

export const MockUserCompanyInventoryResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockUserInventoryForCompanyJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockUserRoleForCompanyResponse1: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockUserRoleForCompanyJson1,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockUserRoleForCompanyResponse2: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockUserRoleForCompanyJson2,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockUserRoleForCompanyResponse3: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockUserRoleForCompanyJson3,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockUserCompaniesResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockUserCompaniesJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
