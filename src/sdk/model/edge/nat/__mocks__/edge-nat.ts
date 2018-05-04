import { NatServiceJson } from '../__json__/nat-service-json';
import { AxiosResponse } from 'axios';

export const MockEdgeNatJson: NatServiceJson = {
  'external_ip': null,
  'type': null,
  'policy': null,
  'rules': [
    {
      'icmp_sub_type': null,
      'original_ip': '10.1.22.0/24',
      'original_port': null,
      'protocol': null,
      'translated_ip': '209.143.151.73',
      'translated_port': null,
      'interface': 'External - 209.143.151.64/26',
      'idx': 1,
      'description': 'Outbound traffic',
      'id': 196646,
      'type': 'SNAT',
      'enabled': true
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
