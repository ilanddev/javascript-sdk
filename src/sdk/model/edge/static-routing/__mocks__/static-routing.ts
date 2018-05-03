import { StaticRoutingServiceJson } from '../__json__/static-routing-json';
import { AxiosResponse } from 'axios';

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
