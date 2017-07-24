import { AxiosResponse } from 'axios';
import { VappNetworkJson } from '../../../model/json/vapp-network';

export const MockVappNetworkJson: VappNetworkJson = {
  location_id: 'dev-vcd01.iland.dev',
  org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  vdc_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdc:f83bb52c-271d-411f-9d0d-1307cb192cb2',
  description: '',
  primary_dns: '98.159.148.21',
  secondary_dns: '64.18.194.69',
  dns_suffix: '',
  fence_mode: 'NATROUTED',
  gateway: '192.168.103.1',
  netmask: '255.255.255.0',
  ip_ranges: [{
    start: '192.168.103.100',
    end: '192.168.103.254'
  }],
  inherited: false,
  parent_network_uuid: null,
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:vapp-network:15c85c6c-4041-4241-bd05-993ab037d067',
  name: 'Test Routed Network 01',
  deleted: false,
  deleted_date: null,
  updated_date: 1496935364477,
  vapp_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vapp:26c85c6c-4041-4241-bd05-993ab037d067',
  router_external_ip: '10.10.10.10'
};

export const MockVappNetworkResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVappNetworkJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
