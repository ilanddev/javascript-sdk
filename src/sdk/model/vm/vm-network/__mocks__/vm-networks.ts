import { VmNetworkJson } from '../__json__';
import { AxiosResponse } from 'axios';

export const MockVmNetworkJson: VmNetworkJson = {
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:network:66c1c555-c160-450f-bf60-73481b95554e',
  name: 'My Coke Routed Network 01',
  description: '',
  vapp_network: true,
  fence_mode: 'bridged',
  deleted: false,
  ip_ranges: [{ start: '192.168.102.100', end: '192.168.102.199' }],
  gateway: '192.168.102.1',
  netmask: '255.255.255.0',
  dns1: '98.159.148.21',
  dns2: '64.18.194.69',
  dns_suffix: '',
  enabled: true,
  inherited: true,
  parent_network_name: 'My Coke Routed Network 01',
  parent_network_uuid: 'dev-vcd01.iland.dev:urn:vcloud:network:5e9b4abb-ccb4-4ea5-a1e6-3c75e51709f2',
  parent_entity_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vapp:8cbef789-023f-4706-97a2-d2a15661db78',
  shared: false,
  edge_uuid: '',
  router_external_ip: ''
};

export const MockVmNetworksJson: Array<VmNetworkJson> = [MockVmNetworkJson];

export const MockVmNetworksResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: MockVmNetworksJson
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
