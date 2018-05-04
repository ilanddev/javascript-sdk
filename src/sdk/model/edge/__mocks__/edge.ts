import { AxiosResponse } from 'axios';
import { EdgeJson } from '../__json__/edge-json';
import { EdgeInterfacesMock } from '../edge-interface/__mocks__/edge-interface';

export const MockEdgeJson: EdgeJson = {
  'status': 1,
  'vdc_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:f83bb52c-271d-411f-9d0d-1307cb192cb2',
  'org_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  'interfaces': EdgeInterfacesMock,
  'backward_compatibility_mode': false,
  'gateway_backing_config': 'compact',
  'high_availability_enabled': true,
  'default_dns_relay_route': false,
  'location_id': 'dev-vcd01.iland.dev',
  'description': '',
  'vcloud_href': null,
  'uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:e1e08051-624c-4d92-8ee3-532655d71b77',
  'name': 'iland Test JA Edge 01',
  'deleted': false,
  'deleted_date': null,
  'updated_date': 1499829466442
};

export const MockEdgeResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
