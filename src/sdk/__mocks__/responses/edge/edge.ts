import { AxiosResponse } from 'axios';
import { EdgeJson, NatServiceJson } from '../../../model/edge/json/edge';
import { CheckpointJson } from '../../../model/edge/json/checkpoint';
import { EdgeDhcpJson } from '../../../model/edge/dhcp/json/dhcp';
import { StaticRoutingServiceJson } from '../../../model/edge/static-routing/json/static-routing';
import { NetworkPerfSampleSerieJson } from '../../../model/edge/network-perf-sample/json/network-perf-sample';

export const MockEdgeJson: EdgeJson = {
  'status': 1,
  'vdc_uuid': 'dev-vcd01.iland.dev:urn:vcloud:vdc:f83bb52c-271d-411f-9d0d-1307cb192cb2',
  'org_uuid': 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  'interfaces': [{
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
  }],
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

export const MockEdgeNatCheckpointsJson: Array<CheckpointJson> = [
  {
    'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:af286787-9cb3-4c9d-b86e-c42dc5dfabc5',
    'uuid': '0ea3ac90-d471-11e7-b86f-79bbfaab00e8',
    'time': 1511896770009,
    'export': null
  }, {
    'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:af286787-9cb3-4c9d-b86e-c42dc5dfabc5',
    'uuid': '5dd80a80-caf4-11e7-8127-550561d80949',
    'time': 1510853655336,
    'export': null
  }
];

export const MockEdgeStaticRoutingServiceJson: StaticRoutingServiceJson = {
  'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:af286787-9cb3-4c9d-b86e-c42dc5dfabc5',
  'enabled': true,
  'routes': [{
    edge_uuid: 'test',
    idx: 0,
    name: 'test',
    network: 'network test',
    next_hop_ip: '111.222.333.444',
    interface_type: 'test',
    interface: 'test'
  }]
};

export const MockEdgeStats: NetworkPerfSampleSerieJson = {
  'summary': 'test',
  'interval': 300,
  'group': 'mem',
  'name': 'test',
  'type': 'absolute',
  'unit': 'test',
  'samples': [
    {
      'time': 1524470908,
      'value': 0
    }
  ]
};

export const MockEdgeStatsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeStats,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockEdgeStaticRoutingServiceResponse: Promise<AxiosResponse> =
  new Promise<AxiosResponse>(function(resolve) {
    resolve({
      data: MockEdgeStaticRoutingServiceJson,
      status: 200,
      statusText: '',
      headers: {},
      config: {}
    });
  });

export const MockEdgeNatCheckpointsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeNatCheckpointsJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockEdgeNatCheckpointResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeNatCheckpointsJson[0],
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockEdgeNatJsonResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeNatJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockEdgeResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockEdgeDhcpResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeDhcpJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
