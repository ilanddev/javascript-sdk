import { NatServiceJson } from '../__json__/nat-service-json';
import { AxiosResponse } from 'axios';

export const MockEdgeNatJson: NatServiceJson = {
  'external_ip': null,
  'nat_type': null,
  'policy': null,
  'rules': [
    {
      'description': 'Outbound NAT',
      'id': 204913,
      'rule_type': 'SNAT',
      'enabled': true,
      'icmp_sub_type': null,
      'original_ip': '10.1.22.0/24',
      'original_port': null,
      'protocol': null,
      'translated_ip': '209.143.151.72',
      'translated_port': null,
      'interface_name': 'External - 209.143.151.64/26',
      'rule_index': 1
    }
  ],
  'enabled': true
};

export const MockEdgeNatJsonResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeNatJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
