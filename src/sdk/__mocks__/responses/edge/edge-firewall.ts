import { AxiosResponse } from 'axios';
import { EdgeFirewallJson, EdgeFirewallLogJson } from '../../../model/edge/firewall/json/edge-firewall';
import { CheckpointJson } from '../../../model/edge/json/checkpoint';

export const MockEdgeFirewall: EdgeFirewallJson = {
  'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:65e01e61-a15c-4787-bcf5-7e50225382ed',
  'log': false,
  'enabled': true,
  'default_action': 'drop',
  'rules': [
    {
      'description': 'allow outbound',
      'destination_ip': 'external',
      'destination_port_range': 'Any',
      'direction': null,
      'icmp_sub_type': null,
      'id': '1',
      'policy': 'allow',
      'port': -1,
      'protocol': [
        'any'
      ],
      'source_ip': 'internal',
      'source_port': -1,
      'source_port_range': 'Any',
      'logging': false,
      'enabled': true,
      'match_on_translate': false,
      'idx': 1
    }
  ]
};

export const MockEdgeFirewallLogs: Array<EdgeFirewallLogJson> = [
  {
    'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:1e188a96-189f-407d-bf41-61aace0408d2',
    'time': 1522337769000,
    'dest_port': null,
    'count': 1,
    'dest_ip': '209.143.151.71',
    'action': 'drop',
    'source_ip': '77.72.85.8',
    'protocol': null
  },
  {
    'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:1e188a96-189f-407d-bf41-61aace0408d2',
    'time': 1522337747000,
    'dest_port': null,
    'count': 1,
    'dest_ip': '209.143.151.71',
    'action': 'drop',
    'source_ip': '81.218.140.85',
    'protocol': null
  }
];

export const MockEdgeFirewallCheckpoints: Array<CheckpointJson> = [
  {
    'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:1e188a96-189f-407d-bf41-61aace0408d2',
    'uuid': '82f74090-8915-11e7-b13e-2d72519d62d5',
    'time': 1503611114265,
    'export': null
  },
  {
    'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:1e188a96-189f-407d-bf41-61aace0408d2',
    'uuid': '5c1a3770-8915-11e7-b13e-2d72519d62d5',
    'time': 1503611049063,
    'export': null
  }
];

export const MockEdgeFirewallResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeFirewall,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockEdgeFirewallLogsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeFirewallLogs,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockEdgeFirewallCheckpointsResponse: Promise<AxiosResponse> =
  new Promise<AxiosResponse>(function(resolve) {
    resolve({
      data: MockEdgeFirewallCheckpoints,
      status: 200,
      statusText: '',
      headers: {},
      config: {}
    });
  });

export const MockEdgeFirewallCheckpointResponse: Promise<AxiosResponse> =
  new Promise<AxiosResponse>(function(resolve) {
    resolve({
      data: MockEdgeFirewallCheckpoints[0],
      status: 200,
      statusText: '',
      headers: {},
      config: {}
    });
  });
