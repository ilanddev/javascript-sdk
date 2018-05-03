import { LoadBalancerServiceJson } from '../__json__/load-balancer-json';
import { AxiosResponse } from 'axios';

export const MockEdgeLoadbalancer: LoadBalancerServiceJson = {
  'edge_uuid': 'ams01.ilandcloud.com:urn:vcloud:gateway:5715e432-cdc5-4b8b-ae06-201ca83a36a3',
  'enabled': true,
  'pools': [
    {
      'id': '',
      'name': 'Web',
      'description': '',
      'service_ports': [
        {
          'enabled': true,
          'protocol': 'HTTP',
          'algorithm': 'ROUND_ROBIN',
          'port': '80',
          'health_check_port': '80',
          'health_checks': [
            {
              'mode': 'HTTP',
              'uri': '/',
              'health_threshold': '2',
              'unhealth_threshold': '3',
              'interval': '5',
              'timeout': '15'
            }
          ]
        },
        {
          'enabled': true,
          'protocol': 'HTTPS',
          'algorithm': 'ROUND_ROBIN',
          'port': '443',
          'health_check_port': '443',
          'health_checks': [
            {
              'mode': 'SSL',
              'uri': '',
              'health_threshold': '2',
              'unhealth_threshold': '3',
              'interval': '5',
              'timeout': '15'
            }
          ]
        }
      ],
      'members': [
        {
          'ip_address': '192.168.245.200',
          'weight': '5',
          'service_ports': [
            {
              'enabled': false,
              'protocol': 'HTTPS',
              'algorithm': '',
              'port': '443',
              'health_check_port': '443',
              'health_checks': []
            },
            {
              'enabled': false,
              'protocol': 'HTTP',
              'algorithm': '',
              'port': '80',
              'health_check_port': '80',
              'health_checks': []
            }
          ]
        },
        {
          'ip_address': '192.168.245.200',
          'weight': '5',
          'service_ports': [
            {
              'enabled': false,
              'protocol': 'HTTP',
              'algorithm': '',
              'port': '80',
              'health_check_port': '80',
              'health_checks': []
            }
          ]
        }
      ],
      'operational': false,
      'error_details': ''
    }
  ],
  'virtual_servers': [
    {
      'name': 'LB01',
      'enabled': true,
      'description': 'loadbalancer1',
      'ip_address': '89.106.181.16',
      'service_profiles': [
        {
          'enabled': true,
          'protocol': 'HTTPS',
          'port': '443',
          'persistence': {
            'method': '',
            'cookie_name': '',
            'cookie_mode': ''
          }
        },
        {
          'enabled': true,
          'protocol': 'HTTP',
          'port': '80',
          'persistence': {
            'method': '',
            'cookie_name': '',
            'cookie_mode': ''
          }
        }
      ],
      'logging': false,
      'pool': 'Web',
      'network': 'iland Public - 89.106.181.0/24'
    }
  ]
};

export const MockEdgeLoadbalancerResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeLoadbalancer,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
