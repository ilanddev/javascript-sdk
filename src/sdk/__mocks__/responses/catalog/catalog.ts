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

export const MockCatalogResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>((resolve) => {
  resolve({
    data: MockCatalogJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
