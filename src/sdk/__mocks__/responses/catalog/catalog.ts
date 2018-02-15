import { CatalogJson } from '../../../model/json';
import { AxiosResponse } from 'axios';

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

export const MockPublicCatalogJson: CatalogJson = {
  location_id: 'dev-vcd01.iland.dev',
  shared: false,
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
