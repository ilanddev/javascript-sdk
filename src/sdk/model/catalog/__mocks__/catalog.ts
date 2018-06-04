import { AxiosResponse } from 'axios';
import { MockMediaJson } from '../../media/__mocks__/media';
import { MockVappTemplateJson } from '../../vapp-template/__mocks__/vapp-template';
import { CatalogJson } from '../__json__/catalog-json';
import { ItemDownloadJson } from '../__json__/item-downloads-json';

export const MockCatalogJson: CatalogJson = {
  location_id: 'dev-vcd01.iland.dev',
  shared: false,
  public: false,
  version: 4694,
  org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  description: 'Catalog for automated security tests.',
  vcloud_href: 'https://dev-vcd02.iland.dev/api/catalog/d576ce89-0599-42f5-812c-592e0e98956b',
  created_date: 1479936661507,
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:catalog:d576ce89-0599-42f5-812c-592e0e98956b',
  name: 'AutomatedSecurityTest',
  deleted: false,
  deleted_date: null,
  updated_date: 1516975670336
};

export const MockAnotherCatalogJson: CatalogJson = {
  location_id: 'dev-vcd01.iland.dev',
  shared: false,
  public: false,
  version: 4694,
  org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac024',
  description: 'Catalog for automated security tests.',
  vcloud_href: 'https://dev-vcd02.iland.dev/api/catalog/d576ce89-0599-42f5-812c-592e0e98956b',
  created_date: 1479936661507,
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:catalog:d576ce89-0599-42f5-812c-592e0e98964f',
  name: 'AutomatedSecurityTest',
  deleted: false,
  deleted_date: null,
  updated_date: 1516975670336
};

export const MockPublicCatalogJson: CatalogJson = {
  location_id: 'dev-vcd01.iland.dev',
  shared: true,
  public: true,
  version: 4694,
  org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:1df9a1c6-9c77-44b5-9758-0e7920d8ca05',
  description: 'Catalog for automated security tests.',
  vcloud_href: 'https://dev-vcd02.iland.dev/api/catalog/0c73d242-101d-43b3-a856-7eb4b4688534',
  created_date: 1479936661507,
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:catalog:0c73d242-101d-43b3-a856-7eb4b4688534',
  name: 'Zerto Customer Catalog',
  deleted: false,
  deleted_date: null,
  updated_date: 1516975670336
};

export const CatalogItemDownloadTemplateMock: ItemDownloadJson = {
  catalog_uuid: 'dev-vcd01.iland.dev:urn:vcloud:catalog:d576ce89-0599-42f5-812c-592e0e98956b',
  time: 1516817750405,
  item_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vapptemplate:3c2f35cb-6c7f-49b6-b400-d93724798fd2',
  item_type: 'vapp_template',
  user: 'iland',
  media: null,
  template: {
    description: '',
    vcloud_href: 'https://dev-vcd02.iland.test/api/vAppTemplate/vappTemplate-3c2f35cb-6c7f-49b6-b400-d93724798fd2',
    status: 8,
    size: 16,
    customizable: true,
    customization_required: false,
    gold_master: false,
    storage_profile_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdcstorageProfile:0627a36f-cd11-4c13-ba7d-a64914d063f9',
    public: false,
    vdc_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdc:d8151263-5381-4f97-aad2-b2fecb743491',
    location_id: 'dev-vcd01.iland.dev',
    org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
    catalog_uuid: 'dev-vcd01.iland.dev:urn:vcloud:catalog:d576ce89-0599-42f5-812c-592e0e98956b',
    created_date: 1516815268273,
    is_expired: false,
    uuid: 'dev-vcd01.iland.dev:urn:vcloud:vapptemplate:3c2f35cb-6c7f-49b6-b400-d93724798fd2',
    name: 'cory testing four networks',
    deleted: false,
    deleted_date: null,
    updated_date: 1520485264766
  }
};

export const MockCatalogResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>((resolve) => {
  resolve({
    data: MockCatalogJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockPublicCatalogResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>((resolve) => {
  resolve({
    data: MockPublicCatalogJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const CatalogItemDownloadsTemplateMockResponse: Promise<AxiosResponse> =
  new Promise<AxiosResponse>((resolve) => {
    resolve({
      data: {
        data: [CatalogItemDownloadTemplateMock]
      },
      status: 200,
      statusText: '',
      headers: {},
      config: {}
    });
  });

export const CatalogMediasMockResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>((resolve) => {
  resolve({
    data: {
      data: [MockMediaJson]
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const CatalogVappTemplateMockResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>((resolve) => {
  resolve({
    data: {
      data: [MockVappTemplateJson]
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
