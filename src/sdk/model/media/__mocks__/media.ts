import { AxiosResponse } from 'axios';
import { MediaJson } from '../__json__/media-json';

export const MockMediaJson: MediaJson = {
  status: 1,
  size: 0.04946136474609375,
  public: false,
  location_id: 'dev-vcd01.iland.dev',
  org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  catalog_uuid: 'dev-vcd01.iland.dev:urn:vcloud:catalog:d576ce89-0599-42f5-812c-592e0e98956b',
  storage_profile_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdcstorageProfile:a19243c1-582d-4030-ac58-7f707bcd2e96',
  vdc_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdc:395cf248-5d6c-45b5-8529-8d65e474a093',
  description: 'Automated Security Test Media',
  vcloud_href: 'https://dev-vcd02.iland.dev/api/media/0f7ef8d0-3818-49fa-ba60-e7cd0cdaeff3',
  created_date: 1479938363933,
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:media:0f7ef8d0-3818-49fa-ba60-e7cd0cdaeff3',
  name: 'Automated Security Test Media',
  deleted: false,
  deleted_date: null,
  updated_date: 1493902954768
};

export const MockMediaResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>((resolve) => {
  resolve({
    data: MockMediaJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
