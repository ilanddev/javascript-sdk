import { EdgeInterfaceJson } from '../__json__/edge-interface-json';

export const EdgeInterfacesMock: Array<EdgeInterfaceJson> = [{
  'display_name': 'Test 1',
  'name': 'Test 1',
  'in_rate_limit': -1.0,
  'out_rate_limit': -1.0,
  'type': 'internal',
  'apply_rate_limit': false,
  'default_route': false,
  'network': 'BC Test 2',
  'network_uuid': 'dev-vcd01.iland.dev:urn:vcloud:network:ae51d2a4-7a5f-4cd4-a9b1-e02e51cc0e07',
  'subnet_participation': [{
    'gateway': '192.168.151.1',
    'netmask': '255.255.255.0',
    'ip_address': '192.168.151.1',
    'ip_ranges': []
  }]
}, {
  'display_name': 'Test 2',
  'name': 'Test 2',
  'in_rate_limit': -1.0,
  'out_rate_limit': -1.0,
  'type': 'internal',
  'apply_rate_limit': false,
  'default_route': false,
  'network': 'BC Test Network',
  'network_uuid': 'dev-vcd01.iland.dev:urn:vcloud:network:29720e51-528a-48e9-aa89-fba3d366cfca',
  'subnet_participation': [{
    'gateway': '10.0.15.1',
    'netmask': '255.255.0.0',
    'ip_address': '10.0.15.1',
    'ip_ranges': []
  }]
}, {
  'display_name': 'External - 209.143.151.64/26',
  'name': 'External - 209.143.151.64/26',
  'in_rate_limit': 139.235,
  'out_rate_limit': 240.884,
  'type': 'uplink',
  'apply_rate_limit': true,
  'default_route': true,
  'network': 'External - 209.143.151.64/26',
  'network_uuid': 'dev-vcd01.iland.dev:urn:vcloud:network:e8e221fe-5271-4ce5-b2fb-ad7dc51d191a',
  'subnet_participation': [{
    'gateway': '209.143.151.65',
    'netmask': '255.255.255.192',
    'ip_address': '209.143.151.69',
    'ip_ranges': [{
      'start': '209.143.151.69',
      'end': '209.143.151.69'
    }]
  }]
}];
