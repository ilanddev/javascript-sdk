import { EdgeDhcpJson } from '../__json__/edge-dhcp-json';
import { AxiosResponse } from 'axios';

export const MockEdgeDhcpJson: EdgeDhcpJson = {
  'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:65e01e61-a15c-4787-bcf5-7e50225382ed',
  'enabled': false,
  'dhcp_pools': [
    {
      'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:65e01e61-a15c-4787-bcf5-7e50225382ed',
      'enabled': true,
      'network': 'network test network',
      'max_lease_time': 450000,
      'default_lease_time': 450000,
      'low_ip': '10.200.100.101',
      'high_ip': '10.200.100.150'
    }
  ]
};

export const MockEdgeDhcpResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeDhcpJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
